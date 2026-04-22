# Invoice Matching Tolerance Workbench

## User Story
As an AP manager, I need a master-detail workspace to triage 3-way invoice matching exceptions so that we can enforce tolerance policy, route approvals by role, and keep an audit-ready history before payment.

## Features
- Search, vendor filter, status filter, and sorting across invoice match exceptions.
- Master queue with due dates, variance visibility, and risk highlighting.
- Detail pane with invoice vs PO values, tolerance, line findings, and audit history.
- Role-based action permissions for AP Analyst, AP Manager, and Controller.
- Policy validation requiring rich justification when approving out-of-tolerance variances.
- State-machine actions: queue approval, approve variance, request credit note, block payment.
- CSV export for the currently filtered exception set.

## Dave's Notes
- Pattern: **Master-Detail**
- Category: **Finance**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, state machine, audit trail, CSV export.
- Dark-mode only by design for BackOfficeBites consistency.
