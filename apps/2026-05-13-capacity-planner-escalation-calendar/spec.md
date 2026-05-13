# Capacity Planner Escalation Calendar

## User story
As a planning lead, I want a calendar-based capacity workspace to review overloaded delivery requests, enforce utilization policy, and route exceptions through an auditable approval flow.

## Features
- Calendar-style grouped request view by date
- Search + filter by team and status
- Sort by date or risk
- KPI strip (visible requests, overloaded slots, pending approvals, escalations/high risk)
- Role-based views (Planner, Finance Controller, PMO Auditor read-only)
- Policy validation logic for FTE deficit threshold
- Action state machine:
  - Approve
  - Escalate
  - Rebalance (-0.5 FTE)
  - Reject
- Detailed audit trail per request
- New capacity request form with validation
- CSV export of filtered requests
- Responsive dark-mode-only UI

## Dave's notes
- Category: Planning
- Pattern: Calendar
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, state machine, CSV export
- Implemented as a single static `index.html` with Tailwind CDN + inline JS for zero-build GitHub Pages deployment
