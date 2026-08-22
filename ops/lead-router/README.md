# AAFC Gmail → Rashida Slack Lead Router

Purpose: route real client/work leads and job/role leads from Kiminou's Gmail to Rashida in Slack without sending any reply to the lead.

## Guardrails
- Draft/read only on the customer side. This script never replies to email.
- Housing, school, travel, receipts, password resets, obvious newsletters, retail promotions, travel deals, and bulk sales mail are excluded.
- Messages sent by Kiminou's own authenticated Gmail account are hard-excluded so outgoing client mail cannot loop back into Slack as a lead.
- Known promotional patterns such as unsubscribe language, price-drop offers, shop-now language, Cruisebound/Temu/SHEIN/AliExpress/Marriott-style promos, LinkedIn Premium upsells, Medium/Quora digests, and TikTok Shop mail are hard-excluded before score thresholds are evaluated.
- Generic words such as "marketing," "opportunity," and "booking" no longer count strongly by themselves; the router now looks for higher-intent phrases such as request-a-quote, contact-form submissions, consultation requests, or explicit requests for help.
- Borderline messages are labeled `AAFC/Lead-Router/Review` instead of being posted.
- Every processed thread receives `AAFC/Lead-Router/Processed` so the same email is not routed twice.
- The Slack webhook stays in Apps Script Properties, never in source control.

## Required one-time setup
1. Create a Slack incoming-webhook workflow targeted to Rashida's intended destination.
2. Create a Google Apps Script project under Kiminou's authorized Google account.
3. Copy `Code.gs` and `appsscript.json` into that project.
4. Add Script Property `SLACK_WEBHOOK_URL` with the real Slack webhook URL.
5. Run `dryRunRecentLeads()` and inspect the scores before enabling delivery.
6. Run `runSyntheticTestAndVerify()` to verify the new self-mail hard exclusion. For a true Slack delivery test, use a controlled message from an external test account rather than Kiminou's own address.
7. Run `installFiveMinuteTrigger()` only after the dry run and test are approved.

## Verified production baseline

On 2026-08-21, the original router was authorized and tested in the production Google account against Slack channel `#lead-router-inbox`, where Rashida is a confirmed member.

- Synthetic first pass: 1 thread scanned, 1 Slack post.
- Immediate second pass: 0 threads scanned, 0 Slack posts.
- Duplicate prevention: passed.
- Slack receipt: confirmed with qualification score 13 and the no-reply notice.
- Dry run: 30 recent inbox threads reviewed; none reached the live-post threshold of 5.
- Trigger: one time-based `routeNewLeads` trigger installed at a five-minute interval.
- Customer-facing email: none sent; the only email created was the authorized self-addressed synthetic test.

## False-positive correction

After the router went live, production Slack evidence showed two categories that should not have been routed:

1. a Cruisebound marketing/price-drop promotion;
2. one of Kiminou's own outgoing LONHA emails.

The `fix/lead-router-false-positives` branch corrects both classes by adding hard exclusions before score thresholds are evaluated and by tightening generic positive signals.

## Qualification model
Client/work inquiries score highest when they contain high-intent signals such as website work, automation, CRM, funnels, explicit project inquiries, quote requests, consultation requests, contact-form submissions, or Zoho lead language.

Job/role leads are separately labeled so Rashida can distinguish employment opportunities from AAFC sales opportunities. Generic job-alert digests are excluded.

This remains deliberately deterministic rather than model-based so routing is cheap, auditable, and resistant to prompt drift. Adjust scoring only after reviewing false positives/negatives from the `Review` label.

## Definition of done for this correction
Do not call the correction live until the updated `Code.gs` is copied into the production Apps Script project and all of these pass:

- Cruisebound-style promo → ignored;
- Kiminou self-sent client email → ignored;
- controlled external website/contact-form inquiry → posted once to Slack;
- duplicate second pass → zero additional Slack posts;
- no outbound customer email is sent.
