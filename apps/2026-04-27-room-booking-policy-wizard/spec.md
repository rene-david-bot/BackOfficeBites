# Room Booking Policy Wizard

## User story
As a facilities and compliance team,
we need room bookings to pass policy checks before scheduling,
so high-risk meetings are approved, auditable, and operationally safe.

## Features
- 3-step wizard (request details, policy inputs, review)
- Real-time policy validation:
  - booking window 08:00–19:00
  - room capacity enforcement
  - recording capability matching
  - external guests + non-internal classification requires manager approval
  - long meetings (>3h) require manager approval
- Role-based actions:
  - Manager can approve/reject pending requests
  - Facilities can schedule approved requests and mark completion
- Booking queue with search, status filter, and sorting
- State-machine style lifecycle:
  Draft → Pending Approval → Approved → Scheduled → Completed
- Audit trail feed of status changes and exports
- CSV export for operational reporting
- Responsive, dark-mode-only interface

## Dave's notes
- Domain: IT Ops
- UI pattern: Wizard
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export, state transitions
- Chosen to avoid overlap with recent timeline/calendar/dashboard heavy streak and bring back a guided intake flow
