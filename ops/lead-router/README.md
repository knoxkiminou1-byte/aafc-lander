# AAFC Gmail → Rashida Slack Lead Router

Purpose: route real client/work leads and job/role leads from Kiminou's Gmail to Rashida in Slack without sending any reply to the lead.

## Guardrails
- Draft/read only on the customer side. This script never replies to email.
- Housing, school, travel, receipts, password resets, and obvious newsletters are excluded by negative scoring.
- Borderline messages are labeled `AAFC/Lead-Router/Review` instead of being posted.
- Every processed thread receives `AAFC/Lead-Router/Processed` so the same email is not routed twice.
- The Slack webhook stays in Apps Script Properties, never in source control.

## Required one-time setup
1. Create a Slack incoming-webhook workflow targeted to Rashida's intended destination.
2. Create a Google Apps Script project under Kiminou's authorized Google account.
3. Copy `Code.gs` and `appsscript.json` into that project.
4. Add Script Property `SLACK_WEBHOOK_URL` with the real Slack webhook URL.
5. Run `dryRunRecentLeads()` and inspect the scores before enabling delivery.
6. Send one controlled test payload to a private/test destination first.
7. Run `installFiveMinuteTrigger()` only after the dry run and test are approved.

## Qualification model
Client/work inquiries score highest when they contain signals such as website work, automation, CRM, funnels, project inquiries, quotes, booking, contact-form submissions, or Zoho lead language.

Job/role leads are separately labeled so Rashida can distinguish employment opportunities from AAFC sales opportunities.

This is deliberately deterministic rather than model-based so routing is cheap, auditable, and resistant to prompt drift. Adjust scoring only after reviewing false positives/negatives from the `Review` label.

## Definition of done
The system is live only when a new controlled Gmail test message is classified correctly, one Slack notification appears in Rashida's intended destination, the Gmail thread receives the processed label, and no outbound email is sent.
