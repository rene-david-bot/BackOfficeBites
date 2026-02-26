# License Compliance Control Grid

## User Story
As a license admin, I need a single control grid to monitor seat usage, renewal risk, and exception approvals so that I can keep compliance on track while procurement negotiates true-ups.

## Core Features
- Data grid with search, filters, and sorting across apps, vendors, and owners.
- Role-based views (admin vs department manager vs requester).
- Exception request workflow with policy validation (CFO approval required for high overage or >$60k).
- Exception approval queue with audit trail updates.
- Renewal risk flags (<= 60 days) and utilization insights.
- CSV export of the filtered grid.

## Dave's Notes
- Dark-mode only with Tailwind CDN and no build step.
- Demo data reflects realistic seat overages and renewal windows.
- Approvals update compliance status and write to audit trail.
