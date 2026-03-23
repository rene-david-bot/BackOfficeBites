# Purchase Requisition Approval Calendar — Spec

## User story
As a finance/procurement analyst, I need a calendar-first view of purchase requisitions so I can spot approval bottlenecks, enforce policy guardrails, and release payments with a complete audit trail.

## Core features
- Dark-mode only, responsive single-page app (no build step)
- Calendar month view with requisition counts and status chips per day
- Search + filter + sort (status, team, query, due date, amount, requester)
- Role-based action gating (Requester, Procurement Manager, Finance Analyst, Finance Lead)
- Detail form with validation for required fields and minimum justification text
- Policy validation guardrails:
  - Submitted requisitions > €500 require attached vendor quote
  - Approval blocked for requisitions > €1,500 without vendor quote
- Workflow state transitions: Draft / Submitted / Needs Info / Approved / Paid
- Audit trail panel for each requisition with timestamped events
- CSV export of current filtered requisition set
- Quick-add draft form for net-new requisitions

## Dave's notes
- Chosen combo for variety: **Finance × Calendar**
- Kept interactions practical: keyboard navigation, clear policy feedback, and stateful workflow transitions.
- Cross-cutting patterns included:
  - approval workflow
  - audit trail
  - policy validation
  - search/filter/sort
  - CSV export
