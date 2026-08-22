const ROUTER = {
  processedLabel: 'AAFC/Lead-Router/Processed',
  reviewLabel: 'AAFC/Lead-Router/Review',
  minScore: 5,
  search: 'in:inbox newer_than:2d -label:"AAFC/Lead-Router/Processed" -in:trash',
};

const POSITIVE_SIGNALS = [
  [/website|web design|web developer|landing page|redesign/i, 3],
  [/automation|crm|funnel|workflow|integration/i, 3],
  [/project inquiry|request(?:ing)? a quote|need a quote|proposal request|consultation request|book a call|contact form|new lead|form submission|zoho crm/i, 4],
  [/need (?:help|support).*(?:marketing|content|social media)|looking for.*(?:marketing|content|social media)|interested in.*(?:marketing|content|social media)/i, 3],
  [/hiring|job opening|interview request|role with|position with/i, 3],
  [/developer|marketing coordinator|automation specialist|consultant/i, 2],
];

const NEGATIVE_SIGNALS = [
  [/apartment|lease|leasing|housing|rental application/i, -8],
  [/newsletter|daily digest|unsubscribe|promotion|sale ends|shop now|view in browser/i, -8],
  [/flight|airline|college|university|financial aid|fafsa/i, -8],
  [/order shipped|delivery update|receipt|password reset/i, -6],
  [/linkedin.*insights|salary.*job openings|recommended jobs|job alert/i, -8],
  [/price drop|deal|discount|limited time|save \d+%|special offer|book your trip|cruise|vacation/i, -10],
];

const HARD_EXCLUDE_SIGNALS = [
  /unsubscribe/i,
  /view (?:this email )?in (?:your )?browser/i,
  /manage (?:your )?(?:email )?preferences/i,
  /price drop/i,
  /sale ends/i,
  /limited[- ]time offer/i,
  /shop now/i,
  /book your (?:trip|cruise|stay|flight)/i,
  /cruisebound/i,
  /temu/i,
  /shein/i,
  /aliexpress/i,
  /starbucks/i,
  /marriott bonvoy/i,
  /quora digest/i,
  /medium daily digest/i,
  /linkedin premium/i,
  /tiktok shop/i,
];

function routeNewLeads() {
  return routeThreads_(ROUTER.search);
}

function routeThreads_(search) {
  const webhook = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
  if (!webhook) throw new Error('Missing Script Property: SLACK_WEBHOOK_URL');

  const processed = getOrCreateLabel_(ROUTER.processedLabel);
  const review = getOrCreateLabel_(ROUTER.reviewLabel);
  const threads = GmailApp.search(search, 0, 100);
  const result = { scanned: threads.length, posted: 0, reviewed: 0, ignored: 0 };

  threads.forEach(thread => {
    if (thread.getLabels().some(label => label.getName() === ROUTER.processedLabel)) return;

    const message = thread.getMessages().slice(-1)[0];
    const candidate = classifyMessage_(message);

    if (!candidate.hardExcluded && candidate.score >= ROUTER.minScore) {
      postLeadToSlack_(webhook, candidate);
      thread.addLabel(processed);
      result.posted += 1;
    } else if (!candidate.hardExcluded && candidate.score >= 2) {
      thread.addLabel(review);
      thread.addLabel(processed);
      result.reviewed += 1;
    } else {
      thread.addLabel(processed);
      result.ignored += 1;
    }
  });

  return result;
}

function classifyMessage_(message) {
  const subject = message.getSubject() || '';
  const from = message.getFrom() || '';
  const body = (message.getPlainBody() || '').slice(0, 5000);
  const text = `${subject}\n${from}\n${body}`;
  let score = 0;
  const reasons = [];

  const activeAccount = (Session.getActiveUser().getEmail() || '').toLowerCase();
  const normalizedFrom = from.toLowerCase();
  const sentBySelf = activeAccount && normalizedFrom.includes(activeAccount);
  const hardMatches = HARD_EXCLUDE_SIGNALS.filter(pattern => pattern.test(text));
  const hardExcluded = sentBySelf || hardMatches.length > 0;

  if (sentBySelf) reasons.push('HARD EXCLUDE: sent by active account');
  hardMatches.forEach(pattern => reasons.push(`HARD EXCLUDE: ${pattern.source}`));

  POSITIVE_SIGNALS.forEach(([pattern, points]) => {
    if (pattern.test(text)) {
      score += points;
      reasons.push(`+${points} ${pattern.source}`);
    }
  });
  NEGATIVE_SIGNALS.forEach(([pattern, points]) => {
    if (pattern.test(text)) {
      score += points;
      reasons.push(`${points} ${pattern.source}`);
    }
  });

  const category = /hiring|job opening|interview request|role with|position with/i.test(text)
    ? 'JOB / ROLE LEAD'
    : 'CLIENT / WORK LEAD';

  return {
    id: message.getId(),
    category,
    score,
    hardExcluded,
    reasons,
    subject,
    from,
    date: message.getDate(),
    snippet: body.replace(/\s+/g, ' ').trim().slice(0, 700),
  };
}

function postLeadToSlack_(webhook, lead) {
  const payload = {
    text: `*${lead.category}*\n*From:* ${escapeSlack_(lead.from)}\n*Subject:* ${escapeSlack_(lead.subject)}\n*Received:* ${lead.date.toISOString()}\n*Qualification score:* ${lead.score}\n*Preview:* ${escapeSlack_(lead.snippet)}\n\n_Routed automatically for Rashida review. No reply was sent._`,
  };

  const response = UrlFetchApp.fetch(webhook, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  const code = response.getResponseCode();
  if (code < 200 || code >= 300) throw new Error(`Slack webhook failed with HTTP ${code}`);
}

function installFiveMinuteTrigger() {
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (trigger.getHandlerFunction() === 'routeNewLeads') ScriptApp.deleteTrigger(trigger);
  });
  ScriptApp.newTrigger('routeNewLeads').timeBased().everyMinutes(5).create();
}

function dryRunRecentLeads() {
  const results = GmailApp.search(ROUTER.search, 0, 30).map(thread => {
    const message = thread.getMessages().slice(-1)[0];
    const result = classifyMessage_(message);
    return {
      subject: result.subject,
      from: result.from,
      score: result.score,
      hardExcluded: result.hardExcluded,
      category: result.category,
    };
  });
  console.log(JSON.stringify(results));
  return results;
}

function runSyntheticTestAndVerify() {
  const account = Session.getActiveUser().getEmail();
  if (!account) throw new Error('Could not resolve the active Google account for the synthetic test.');

  const stamp = Utilities.formatDate(new Date(), 'UTC', 'yyyyMMdd-HHmmss');
  const subject = `[AAFC Router Synthetic Test ${stamp}] Website project inquiry`;
  const body = [
    'This is an authorized synthetic technical test. It is not a real prospect.',
    'Contact form new lead requesting a quote for website, CRM, and automation work.',
    'No reply should be sent.',
  ].join('\n');

  GmailApp.sendEmail(account, subject, body);

  const escaped = subject.replace(/"/g, '\\"');
  const search = `in:anywhere subject:"${escaped}" newer_than:1d -label:"${ROUTER.processedLabel}"`;
  let found = [];
  for (let attempt = 0; attempt < 15; attempt += 1) {
    found = GmailApp.search(search, 0, 5);
    if (found.length) break;
    Utilities.sleep(1000);
  }
  if (!found.length) throw new Error('Synthetic test message did not appear in Gmail search.');

  // Synthetic self-mail is intentionally hard-excluded in normal routing now.
  // Verify classification directly rather than posting it to Slack.
  const message = found[0].getMessages().slice(-1)[0];
  const classification = classifyMessage_(message);
  const verification = {
    subject,
    score: classification.score,
    hardExcluded: classification.hardExcluded,
    expectedSelfExclusion: classification.hardExcluded === true,
  };
  console.log(JSON.stringify(verification));
  return verification;
}

function getOrCreateLabel_(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

function escapeSlack_(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
