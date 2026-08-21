const ROUTER = {
  processedLabel: 'AAFC/Lead-Router/Processed',
  reviewLabel: 'AAFC/Lead-Router/Review',
  minScore: 5,
  search: 'newer_than:2d -label:"AAFC/Lead-Router/Processed" -in:trash',
};

const POSITIVE_SIGNALS = [
  [/website|web design|web developer|landing page|redesign/i, 3],
  [/automation|crm|funnel|workflow|integration/i, 3],
  [/project inquiry|quote|proposal|consultation|book a call|booking/i, 3],
  [/marketing|content strategy|lead generation|social media/i, 2],
  [/hiring|job opening|role|opportunity|interview/i, 2],
  [/developer|marketing coordinator|automation specialist|consultant/i, 2],
  [/contact form|new lead|form submission|zoho crm/i, 4],
];

const NEGATIVE_SIGNALS = [
  [/apartment|lease|leasing|housing|rental application/i, -8],
  [/newsletter|daily digest|unsubscribe|promotion|sale ends/i, -4],
  [/flight|airline|college|university|financial aid|fafsa/i, -8],
  [/order shipped|delivery update|receipt|password reset/i, -6],
  [/linkedin.*insights|salary.*job openings/i, -3],
];

function routeNewLeads() {
  const webhook = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
  if (!webhook) throw new Error('Missing Script Property: SLACK_WEBHOOK_URL');

  const processed = getOrCreateLabel_(ROUTER.processedLabel);
  const review = getOrCreateLabel_(ROUTER.reviewLabel);
  const threads = GmailApp.search(ROUTER.search, 0, 100);

  threads.forEach(thread => {
    if (thread.getLabels().some(label => label.getName() === ROUTER.processedLabel)) return;

    const message = thread.getMessages().slice(-1)[0];
    const candidate = classifyMessage_(message);

    if (candidate.score >= ROUTER.minScore) {
      postLeadToSlack_(webhook, candidate);
      thread.addLabel(processed);
    } else if (candidate.score >= 2) {
      thread.addLabel(review);
      thread.addLabel(processed);
    } else {
      thread.addLabel(processed);
    }
  });
}

function classifyMessage_(message) {
  const subject = message.getSubject() || '';
  const from = message.getFrom() || '';
  const body = (message.getPlainBody() || '').slice(0, 5000);
  const text = `${subject}\n${from}\n${body}`;
  let score = 0;
  const reasons = [];

  POSITIVE_SIGNALS.forEach(([pattern, points]) => {
    if (pattern.test(text)) { score += points; reasons.push(`+${points} ${pattern.source}`); }
  });
  NEGATIVE_SIGNALS.forEach(([pattern, points]) => {
    if (pattern.test(text)) { score += points; reasons.push(`${points} ${pattern.source}`); }
  });

  const category = /hiring|job opening|interview|role/i.test(text)
    ? 'JOB / ROLE LEAD'
    : 'CLIENT / WORK LEAD';

  return {
    id: message.getId(),
    category,
    score,
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
  return GmailApp.search(ROUTER.search, 0, 30).map(thread => {
    const message = thread.getMessages().slice(-1)[0];
    const result = classifyMessage_(message);
    return { subject: result.subject, from: result.from, score: result.score, category: result.category };
  });
}

function getOrCreateLabel_(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

function escapeSlack_(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
