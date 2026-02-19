# Deal Desk Approval Kanban

## User Story
As a Sales Operations Manager, I want a single kanban view for discount approvals so I can route exceptions quickly, enforce pricing policy, and keep an audit-ready trail of decisions.

## Features
- Kanban board with drag-and-drop between Draft, Submitted, Review, Approved, and Rejected.
- Global search, region/segment/owner filters, minimum discount threshold, and sorting.
- Policy validation for discount ceiling, ARR threshold, public sector review, and stage aging.
- Role-based view context (Sales Manager, Finance, VP Sales) for decision-making.
- Approval actions with required justification for high discounts and rejections.
- Audit trail timeline capturing every status change.
- CSV export of the filtered approval queue.
- KPI summary for pending approvals, average discount, policy exceptions, and total ARR.

## Dave's Notes
- Built as a single static HTML file with Tailwind CDN and inline JS.
- Dark-mode only, responsive layout.
- Interactive state changes update KPIs, policy flags, and audit trail live.
