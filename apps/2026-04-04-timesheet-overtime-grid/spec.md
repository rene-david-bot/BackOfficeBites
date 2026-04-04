# Timesheet Overtime Compliance Grid

## User story
As an HR Operations reviewer, I need to triage weekly timesheets with overtime and weekend policy checks so that payroll can be approved quickly and compliantly.

## Features
- Dark-mode only, responsive single-file app
- Search + filter + sort queue for timesheet submissions
- Role-based review controls (Team Lead, HR Operations, Director HR)
- Policy validation gates for overtime thresholds and weekend exceptions
- Workflow state transitions (Draft → Submitted → Manager Review → HR Review → Approved/Rejected)
- Audit trail stream for every state-changing action
- CSV export of currently visible rows

## Dave's notes
- Picked **HR × Data Grid** to diversify today’s catalog run
- Added realistic sample data (cost centers, manager ownership, weekly snapshots)
- Included multiple cross-cutting patterns in one lightweight static artifact:
  - approval workflow
  - policy validation
  - audit trail
  - role-based views
  - search/filter/sort
  - CSV export
