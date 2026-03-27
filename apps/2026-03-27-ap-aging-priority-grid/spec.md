# AP Aging Priority Grid

## User Story
As an AP analyst, I need to triage overdue invoices in one grid so I can apply payment holds, request approvals, and schedule payments without violating finance policy.

## Core Features
- Data-grid-first AP aging queue with realistic overdue invoice data
- Search, region filter, status filter, and configurable sorting
- Role-based view switch (`AP Analyst` vs `Finance Controller`)
- Detail side panel with invoice context, hold reason, and audit history
- Holdback / approval workflow actions with validation rules
- Policy enforcement:
  - Invoices over €50k require Finance Controller for approval
  - Invoices with missing documents cannot be approved
  - Only approved invoices can be scheduled
- CSV export of filtered queue for finance ops handoff
- Keyboard-selectable table rows (`Enter` / `Space`) and labeled form controls

## Dave's Notes
- Category: Finance
- Pattern: Data Grid
- Cross-cutting patterns used: role-based views, policy validation, search+filter+sort, state machine, audit trail, CSV export
- Kept dark-mode only and static-file compatible for GitHub Pages.
