# Capacity Freeze Calendar — Spec

## User Story
As a portfolio planning lead, I need a calendar-centric workspace to stage and approve temporary capacity-freeze windows across squads, so releases can be stabilized without violating utilization and financial guardrails.

## Core Features
- Monthly **calendar view** (April 2026) with daily overlap counts and overload highlighting
- Role-based workspace mode:
  - Capacity Planner
  - Team Lead
  - Finance Controller
  - Portfolio Director
  - Auditor (read-only)
- Search, filter, and sort across freeze requests
- Request creation form with validation:
  - Date range checks
  - Utilization threshold checks
  - Minimum planner notes
- Approval **state machine**:
  - Draft → Team Review → Finance Check → Approved
  - Rejected available for authorized roles
- Policy validation gate:
  - Requests with utilization >85% or impact >€60k must pass Finance Check before approval
- Audit trail event log
- CSV export for filtered records
- Weekly utilization snapshot bars for quick capacity risk scanning

## Demo Data
- 6 seeded requests across Planning-adjacent product and ops teams
- Mixed statuses (Draft, Team Review, Finance Check, Approved, Rejected)
- Mixed utilization and budget impact values to trigger both low-risk and gated approval paths

## Dave's Notes
- Pattern used: **Calendar**
- Category used: **Planning**
- Cross-cutting patterns included this run:
  - Approval workflow
  - Policy validation
  - Role-based views
  - Search/filter/sort
  - Audit trail
  - CSV export
  - State machine
- Built as a single self-contained `index.html` (Tailwind CDN + inline JS), dark-mode only, no build step.
