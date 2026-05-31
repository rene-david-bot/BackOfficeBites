# Resource Allocation Burnup Command Center

## User Story
As a planning lead, I need a real-time dashboard of team capacity and reallocation requests so I can rebalance workload, enforce policy checks, and keep a clear audit trail of approval decisions.

## Features
- Dashboard + charts view for utilization and approval funnel
- Search, filter, and sort across reallocation requests
- Workflow state machine: Draft → Pending Approval → Approved/Rejected → Implemented
- Role-based actions (Analyst, Approver, Admin)
- Policy validation gates before approvals (hours cap, reason quality, sprint format)
- Request creation form with validation
- Audit trail per request
- CSV export for filtered request list
- Responsive dark-mode-only interface (no theme toggle)

## Dave's Notes
- Domain: Planning
- UI pattern: Dashboard+Charts
- Cross-cutting patterns used: approval workflow, role-based views, policy validation, audit trail, CSV export, search/filter/sort, state machine, charts
- Built as a single static `index.html` using Tailwind CDN + inline JavaScript for GitHub Pages.
