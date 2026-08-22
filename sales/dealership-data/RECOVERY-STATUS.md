# Dealership Data — Recovery Status

Status: **OUTBOUND PACKAGE READY / REAL DATASET NOT YET VERIFIED**

## What is verified
- Rashida's required flow is preserved: lead list → Email #1 → explicit YES → sample delivery → human sales conversation.
- The draft-only campaign package, tracking states, sample schema, and follow-up copy are merged in this repository.
- Gmail contains the finalized August 1 handoff email to Rashida with an attached archive named `handoff-to-rashida.zip`. A second, slightly earlier copy of the same archive is also present in the same Gmail thread.
- The final email says the archive's delivery record was updated with the successful Gmail delivery metadata.
- Slack history confirms that Dealership Data was an assigned revenue deliverable and repeatedly describes the intended YES → sample → conversation workflow.
- The older SALES & GROWTH record says the dealership records "already exist and get pulled." Treat that as evidence that a dataset may have existed historically, not as proof that the current recoverable file, provenance, licensing, or send state is verified now.

## Evidence conflict that must stay explicit
The historical SALES & GROWTH record says dealership records already existed and were pulled. A later August 1 executive revenue handoff, however, treated the dealership data source, licensing, dataset, and sample as unresolved. No currently accessible authoritative file resolves that conflict.

Therefore the correct state is **RECOVERY REQUIRED**, not "the data never existed" and not "the data is ready to send."

## What is not verified
The accessible records reviewed do **not** establish that the real dealership dataset itself is currently recoverable or safe to use.

Specifically, no verified current file has been located that contains:
- the real dealership lead list;
- the real sample data file;
- the source/license record for that data;
- a cleaned first send batch;
- proof that the first dealership campaign batch was actually sent;
- proof that a prospect replied YES and received a sample.

Later Gmail searches for dealership/dealer/data-sample outreach found the handoff messages but no verified dealership campaign sends.

## Handoff archive recovery note
The finalized `handoff-to-rashida.zip` is confirmed to exist as a Gmail attachment. The connected Gmail interface exposes its attachment metadata but does not currently expose ZIP attachment contents as a readable file. The raw MIME confirms the archive is physically present and lists project-status/documentation members, but this is not enough to claim the real dealership dataset is inside it.

Do not equate recovery of the handoff archive with recovery of the dealership dataset until the archive is materialized and inspected or the original local source is found.

## Next recovery target
Search the authorized local Mac/worktree for the original dealership files and the finalized handoff archive. Useful targets include:
- `handoff-to-rashida.zip`
- dealership/dealer CSV, XLSX, ZIP, or JSON files
- campaign tracking sheets
- sample files
- data-source or licensing notes
- prior outbound exports

If a candidate dataset is found, verify source, date, consent/outreach basis, duplicates, opt-outs, email validity, and sample safety before any send is approved.

## Operating rule
No dealership campaign send is authorized by this status file. Keep the campaign in draft/readiness state until:
1. the real data source is recovered and verified;
2. the exact first batch is cleaned and reviewed;
3. the sample contains no restricted/private data and its provenance is clear;
4. Kiminou explicitly approves the exact send batch.

## Definition of resolved
This recovery task is resolved only when the real dealership dataset/sample is recovered with source/provenance evidence and the campaign's current send state can be proved. If the data cannot be recovered, state that directly rather than fabricating a replacement dataset under the old campaign's identity.
