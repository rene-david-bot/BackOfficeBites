# Shift Coverage Timeline

## User Story
As an HR operations lead, I need a timeline-based view of shift coverage requests so I can route approvals, enforce overtime policy, and close staffing gaps before service quality drops.

## Core Features
- Timeline-first queue for coverage requests with clickable events
- Search, filter, and sort controls (status, site, free text, start time, hours, overtime cost)
- KPI strip for open/approved/rejected requests, total hours, and total overtime cost
- Role-based workflow behavior:
  - Shift Lead can draft and submit requests
  - HR Operations / Workforce Manager can approve or reject pending requests
- Policy validation for high-risk requests (overtime cost >= €200 or coverage > 8h requires approval reference)
- Inline state transition form with validation and UTC-stamped audit trail updates
- New request form with validation (required fields, chronological checks, limits, rationale length)
- CSV export for currently filtered requests

## State Machine
- Draft -> Pending Approval
- Pending Approval -> Approved | Rejected (approver roles only)
- Rejected -> Draft (approver roles)
- Approved -> Rejected (approver override)

## Dave's Notes
- Domain: **HR**
- Pattern: **Timeline**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export, state machine
- Dark-mode only by design (no theme toggle)
