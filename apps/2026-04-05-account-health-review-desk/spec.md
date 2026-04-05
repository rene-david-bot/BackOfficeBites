# Account Health Review Desk — Spec

## User story
As a Sales and Customer Success retention team, we need a master-detail account health workspace so we can triage churn risk, route recovery plans through policy approvals, and keep an auditable history of commercial actions before renewal.

## Core features
- Master-detail portfolio layout with selectable account records
- Search, segment/status filters, and sortable account list
- Role-based views (CSM, Sales Director, Finance Partner)
- Account detail panel with ARR, renewal timing, margin, and risk drivers
- Recovery plan intake form with validation (discount bounds + reason length)
- Policy validation/routing (`RETAIN-07`) based on ARR, margin, and concession size
- Approval workflow actions (approve/reject) with role-based permissions
- State transitions for account health (`At Risk`, `Escalated`, `Recovery In Progress`)
- CSV export for current filtered portfolio
- Inline audit trail for key workflow events

## Dave's notes
- Pattern: Master-Detail
- Category: Sales
- Seed concept: Account Health
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export, state-machine transitions
- Dark-mode only, responsive, single self-contained HTML file with Tailwind CDN + inline JS
