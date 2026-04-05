# Credit Note Dispute Timeline

## User Story
As an Accounts Receivable lead, I want to track each credit note dispute through a visible timeline so that high-risk disputes are settled quickly, policy exceptions are approved correctly, and finance has a full audit trail.

## Core Workflow
1. Triage incoming disputes with search, filters, and due-date sorting.
2. Route each case through a state machine (`Logged → Analyst Review → Controller Approval → Settled/Rejected`).
3. Enforce policy gates:
   - Tax mismatch or amount >= €50k requires controller approval before settlement.
   - Amount > €120k requires explicit CFO mention in case note.
4. Record all actions in an audit trail and export filtered rows to CSV.

## Features Included
- Dark-mode-only responsive UI (mobile + desktop)
- Timeline-style progress indicator for every dispute
- KPI cards (volume, pending approvals, exposure, age)
- Role-based views (`AR Analyst`, `AR Manager`, `Controller`, `Collections Lead`, `Auditor`)
- Validation-first dispute intake form
- Search + filter + sort controls
- State transitions with reject flow and reason capture
- Audit trail with clear + replay behavior
- CSV export of active filtered view

## Dave's Notes
- Pattern used: **Timeline**
- Domain used: **Finance**
- Cross-cutting patterns in this build: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export, state machine
- This demo is intentionally static and self-contained (Tailwind CDN + inline JavaScript) for GitHub Pages publishing.
