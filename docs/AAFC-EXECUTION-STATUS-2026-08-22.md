# AAFC Execution Status — 2026-08-22

This is a point-in-time reconciliation of current AAFC/SFS execution work after the August 21–22 Codex and ChatGPT passes. It exists to prevent duplicate rebuilding and false completion claims.

## Operating rule

Before starting work listed here, verify the current repo, production target, and newest evidence. A merged PR means code/docs are in the repository; it does **not** automatically mean an external automation, deployment, campaign, CRM integration, or client launch is live.

---

## 1. Gmail → Rashida Slack lead router

**Repo:** `knoxkiminou1-byte/aafc-lander`

### Completed
- Original deterministic router package merged in PR #6.
- Apps Script was separately installed and a live synthetic inquiry successfully reached `#lead-router-inbox`.
- Duplicate prevention passed during the initial live test.
- Live evidence later showed two false positives: a Cruisebound promotional email and Kiminou's own LONHA outbound email.
- False-positive correction merged in PR #10, merge commit `4c1929a73e46ce5ccfcfd44477a4b29eb245b841`.
- The correction adds self-sender suppression, stronger promotion/travel/retail suppression, tighter high-intent scoring, and a deterministic regression harness.
- Static regression harness result at merge time: **6/6 passed**.

### Current status
**CODE FIX MERGED / LIVE SCRIPT UPDATE REQUIRED**

The currently installed Apps Script must be replaced or reconciled with the corrected merged code. After that, run a controlled external-lead test and a known promotional/self-sent negative test. Do not call the classifier corrected in production until those live tests pass.

### Do not redo
Do not rebuild the router from scratch. Do not add broad keyword scoring that reintroduces newsletter/travel/marketing false positives.

---

## 2. Dealership Data

**Repo:** `knoxkiminou1-byte/aafc-lander`

### Completed
- Campaign package merged in PR #7.
- It preserves Rashida's flow: qualified dealer list → no-attachment Email #1 → explicit YES → sample → human sales conversation.
- Outreach copy, follow-ups, tracking states, sample schema, suppression logic, and personalization requirements are packaged.
- Recovery-state reconciliation merged in PR #12, merge commit `29ef2e13804f69a773f7ad7df0ead7983c212568`.

### Evidence recovered
Gmail contains a previously sent archive named `handoff-to-rashida.zip` in message `19fbeddf218c17ff`, but the current Gmail connector cannot read the ZIP body. Drive and ChatGPT Library searches did not surface the actual archive bytes.

Historical records indicate dealer records existed/pulled; later handoff evidence does not preserve enough source/license/sample detail to safely launch from summary alone.

### Current status
**RECOVERY REQUIRED / CAMPAIGN NOT SENT**

Search the authorized local Mac first for the exact archive or extracted dataset. Preferred search roots:
- `~/Documents/Kiminou/`
- `~/Documents/Codex/`
- `~/Downloads/`
- `~/Desktop/`
- prior handoff folders and Codex output directories

Search terms:
- `handoff-to-rashida`
- `dealership`
- `dealer`
- `dealership data`
- `qualified prospects`
- `20 qualified prospects`
- `17 verified sent emails`

Before any launch, verify provenance, lawful/authorized source, suppression state, sample accuracy, and current contact data. Do not fabricate or regenerate a dealer list merely to unblock the campaign.

---

## 3. YoChat / Suresh CRM

**Repo:** `knoxkiminou1-byte/aafc-lander`

### Completed
- Demo/handoff reconciliation merged in PR #8.
- Development CRM access status correction merged in PR #11, merge commit `2bbe4c017286e0272ef4f695cc56d447e9d012e8`.
- The demo environment is treated as complete/verified and should not be rebuilt.
- Suresh's team did provide development CRM UI/login access historically.

### Current status
**DEMO VERIFIED / REAL TWO-WAY API INTEGRATION BLOCKED ON EXTERNAL TECHNICAL INPUTS**

UI/login access is not an API contract. Still required from the CRM/provider side:
- API base URL and documentation
- supported authentication method
- object/schema details and exact field IDs
- create/update/query behavior
- webhook/callback support
- rate limits
- example payloads/responses
- sandbox testing permission and acceptance criteria

Do not repeat or commit historical plaintext credentials. Do not invent endpoint behavior.

---

## 4. SFS → Zoho and `.shop` hotfix

**Repo with current hotfix:** `marchitects-builders/social-following-studios`

### Verified working
The SFS → Zoho Web-to-Lead transaction was previously verified using a real QA lead. Do not rebuild the integration.

### Open hotfix
PR #42 fixes only:
- dead `.com` contact email → `hello@socialfollowing.shop`
- dead `.com` Zoho return URL → `https://www.socialfollowing.shop/#/thank-you`

### Production-mapping evidence
The deployment target is still not safe enough to promote automatically:
- Connected Vercel team `rashidas-projects-7ef77618` exposes a `social-following-studios` project linked to **`marchitectsio/social-following-studios`**, an older repo state.
- PR #42's Vercel bot references another team/project that the current Vercel connection cannot access (403).
- Historical Vercel email shows `socialfollowing.shop` and `www.socialfollowing.shop` were attached to project `social-following-studios` on team **`kiminou's projects`** in May 2026, but were then marked Invalid Configuration.
- Google Drive document `DNS Records` records the historical repository URL as `https://github.com/knoxkiminou1-byte/social-following-studios`; GitHub now resolves that repository to `marchitects-builders/social-following-studios`, consistent with a later owner transfer.
- The same DNS record document lists apex A `216.198.79.1` and `www` CNAME `61416ffbdf946036.vercel-dns-017.com.` as the Vercel target values shown at that time.

### Current status
**HOTFIX CODE READY / DEPLOYMENT TARGET IDENTITY STILL BLOCKED**

Keep PR #42 open and unmerged until the currently authoritative Vercel project that owns the custom domain can be accessed and verified. Do not make DNS changes based only on historical values.

---

## 5. SFS Video Remaker / Avatar Studio

**Repo:** `marchitects-builders/social-following-studios`

### Completed
- 30-short validation scaffold merged in PR #43.
- Current structure includes three vertical lanes: SaaS founders, course creators, coaches.
- `30-Short-Test/PILOT-PACK-01.md` contains three researched original pilot scripts/blueprints and a controlled engine protocol.
- Engine scorecard and research templates exist.

### Current status
**PILOT PACK READY / REAL RENDERS NOT YET VERIFIED**

Next live step requires authenticated DZINE access:
1. record exact live Seedance model/version label;
2. render Pilot A with existing credits;
3. score correction minutes and all required quality fields;
4. run a newest-MiniMax comparison only when justified;
5. repeat for the remaining pilots;
6. only scale toward 30 after correction burden is acceptable.

Do not claim 30 videos are complete. Do not fabricate render/model performance. Do not purchase credits/upgrades without explicit authorization.

---

## 6. Pan African City Alive / Mama Keisha

**Repo:** `knoxkiminou1-byte/pan-african-city-alive-preview`

### Completed separately
- Promo asset package is treated as complete: 30 ready-to-post graphics + 5 slideshow videos, captions/source/provenance/proofs.
- Product-readiness state merged in PR #1.

### Store state
- 12 product concepts exist in the storefront.
- 25 launch-ready products is the target.
- Current 12 rows still use sample/inquiry values and require real client verification.
- Slots 13–25 remain intentionally blank.

### Current status
**12 CONCEPTS DOCUMENTED / CLIENT INVENTORY INPUT REQUIRED**

Do not infer store inventory from old payment memos such as “jewels and oils,” “Purple hood and blue nile,” or “The great oils.” Those prove purchases/descriptions existed, not the exact current sellable product records, quantities, prices, dimensions, ingredients, provenance, variants, or stock.

Required to advance:
- approve/replace each existing concept
- final price
- inventory/stock
- dimensions/sizes/colors/variants where applicable
- materials/ingredients where applicable
- origin/provenance/maker where claimed
- 13 additional real products with photos and facts

Do not fabricate products 13–25.

---

## 7. LONHA

**Repo:** `marchitectsio/lonha-website`

### Completed
- Public site production QA and launch work merged previously.
- Migration preflight merged in PR #3.
- Client received hosting/email/security options.

### Current status
**WAITING ON TY / NO MIGRATION AUTHORIZED YET**

Do not alter DNS, registrar, mailboxes, hosting ownership, or client accounts until Ty chooses an option and required access/authorization is verified.

A follow-up email is scheduled for 2026-08-22 at 08:00 America/Los_Angeles. A separate Rashida update is scheduled five minutes later, conditional on confirming the Ty email actually sent.

---

## 8. Blaque Lotus

**Repo:** `knoxkiminou1-byte/blaqueLYS`

### Completed
- Commercial-status reconciliation merged in PR #1, merge commit `90aad20c186e5a7656c9999e0b4c6cfd74af49d7`.

### Current status
**WAITING / PRESERVE ONLY**

A prototype exists, but current evidence does not establish an authorized active client scope, fee/payment state, launch approval, or case-study permission. Preserve and QA only. Do not resume speculative development until status is explicitly reopened and verified.

---

## 9. KNOX LAB

Actual recovery/build is intentionally routed out of this execution pass.

A recovery-first master prompt is now merged at:
`docs/KNOX-LAB-BUILDS-PRODUCTS-MASTER-PROMPT.md`

It belongs with AAFC BUILDS & PRODUCTS. Do not reconstruct it casually from the status summary; follow the recovery prompt.

---

## 10. Current stop conditions

The following are **not completion failures**; they are explicit external/auth/input blockers:

- production Apps Script access for router update/testing
- local Mac/archive access for Dealership Data recovery
- authoritative Vercel custom-domain project access for SFS `.shop`
- authenticated DZINE account/browser for Video Remaker renders
- API contract/sandbox details from Suresh's CRM side
- real inventory facts from Mama Keisha
- Ty's choice/access for LONHA migration

When one of these blockers clears, resume from the documented next step instead of rebuilding prior work.
