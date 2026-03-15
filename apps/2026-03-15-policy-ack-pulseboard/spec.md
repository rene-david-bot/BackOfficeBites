# Policy Acknowledgement Pulseboard — Spec

## User Story
As a compliance or policy owner, I need a single view of acknowledgement progress across teams so I can chase overdue attestations, approve justified exceptions, and maintain an audit-ready record.

## Core Features
- **Dashboard + charts**
  - KPI cards for average acknowledgement rate, overdue count, critical policies, and exception queue
  - Team acknowledgement bars that update against active filters
  - Workflow mix bars (Completed, On Track, At Risk, Exception Requested, Overdue)
- **Search + filter + sort**
  - Free text search across policy ID/title/team/owner
  - Team, workflow-state, and risk-tier filters
  - Sort by due date, acknowledgement rate, risk, or exception volume
- **Role-based views**
  - Policy Owner: acknowledge + request exception
  - Manager: acknowledge + request exception + approve exception
  - Auditor: read-only access
- **Policy validation + workflow actions**
  - Exception request requires minimum reason length (10 chars)
  - Action buttons mutate policy state and counters in-place
- **Audit trail**
  - Session audit log captures role switches, acknowledgements, exception requests, approvals, and CSV exports
- **CSV export**
  - Export currently filtered rows as downloadable CSV

## Dave's Notes
- Dark-mode only UI, no theme toggle.
- Kept as a single self-contained HTML file with Tailwind CDN + inline JS (no build step).
- Demo data spans HR, IT, Legal, Finance, Sales, and Supply Chain to mimic cross-functional compliance operations.
