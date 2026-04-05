# Visitor Log Intake Wizard — Spec

## User story
As a front-desk and security operations team, we need a guided visitor pre-registration workflow so that high-risk visits are policy-routed for approval while low-risk visits can be checked in quickly with full audit traceability.

## Core features
- 4-step wizard (Visitor → Visit → Compliance → Route)
- Inline policy validation for high-risk conditions:
  - foreign ID,
  - after-hours arrival,
  - missing NDA,
  - restricted-area access
- Approval workflow state machine (`Pending Approval` vs `Approved`)
- Role-based queue views (Front Desk, Security Officer, Facilities Manager)
- Search + filter + sortable data grid for active visits
- CSV export for the current filtered queue
- Audit trail feed for system/user actions
- KPI strip for total visits, pending approvals, high-risk volume, and checked-in count

## Dave's notes
- Pattern: Wizard
- Category: IT Ops
- Seed concept: Visitor Logs
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export, state-machine transitions
- Dark-mode only, responsive layout, single self-contained HTML file
