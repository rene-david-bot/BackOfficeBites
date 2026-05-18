# License Seat Reclaim Kanban - Spec

## User Story
As an IT operations analyst, I want to route software license reclaim candidates through a policy-gated workflow so that we can reduce SaaS spend without breaking active teams or compliance requirements.

## Core Features
- Kanban workflow lanes: Intake, Security Review, Manager Approval, Procurement, Completed, Rejected
- Search, department filter, risk filter, and sort controls
- Role-based actions for IT Analyst, Security Reviewer, Department Manager, Procurement Ops, Auditor
- Policy validation rules:
  - Seats > 20 require manager sign-off
  - Intake form requires EA id format for >120 seat reclaim requests
- Detailed record panel with:
  - Candidate metadata
  - Savings and seat counts
  - Policy flags
  - Full audit trail timeline
- Workflow state machine actions:
  - Advance to next stage
  - Return to Intake
  - Reject candidate
  - Add audit note
- CSV export of current filtered board view
- New candidate intake form with validation and instant state updates

## Dave's Notes
- Domain: IT Ops
- Pattern: Kanban
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, state machine, CSV export
- Design target: dark-mode only, responsive, keyboard-accessible cards/buttons, static GitHub Pages compatible
