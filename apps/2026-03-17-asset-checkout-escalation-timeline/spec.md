# Asset Checkout Escalation Timeline — Spec

## User Story
As a supply chain operations lead managing overdue internal asset checkouts,
I want a timeline-based escalation desk with role-aware decisions,
so I can resolve high-risk cases quickly while maintaining policy compliance and audit traceability.

## Core Features
- Timeline-first queue of overdue checkout cases (asset, holder, site, value, risk, status)
- Role-based permissions for Logistics Coordinator, Finance Controller, and Security Lead
- Policy validation banner for high-value assets and cross-site overdue conditions
- Workflow transitions with mandatory action note validation (`Open`, `Under Review`, `Extended`, `Escalated`, `Closed`)
- Search + status filter + sort (due soonest, most overdue, highest risk)
- CSV export of current filtered timeline view
- New case intake form with validation and auto-calculated risk score
- Case-level audit trail that logs every transition and note

## Dave's Notes
- Category: Supply Chain
- Pattern: Timeline
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, search/filter/sort, CSV export, audit trail, state machine
- Dark-mode only UI; no build step; static GitHub Pages compatible
