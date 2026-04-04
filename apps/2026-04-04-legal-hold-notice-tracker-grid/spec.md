# Legal Hold Notice Tracker Grid

## User story
As a legal operations analyst, I need a single place to triage legal hold notices, validate policy readiness, and route approvals so that evidence preservation actions are defensible and audit-ready.

## Features
- Data-grid-first workflow for legal hold notices with search, filter, sort, and keyboard row activation
- Role-based actions:
  - Legal Ops Analyst / Compliance Lead can submit draft/rejected notices for review
  - Senior Counsel can approve or reject in-review notices
- Policy validation checks before approval (custodian quality, evidence completeness, deadline guardrails)
- Workflow state transitions (Draft → In Review → Approved/Rejected, plus On Hold)
- CSV export of currently filtered grid rows for legal packet handoff
- Inline audit trail with auto-stamped workflow events and manual audit note logging
- Create-notice form with validation including critical-risk minimum lead-time rule
- Responsive dark-mode UI (no build step, static-host compatible)

## Dave's notes
- Domain: Legal
- UI pattern: Data Grid
- Cross-cutting patterns included: approval workflow, audit trail, policy validation, search/filter/sort, CSV export, role-based views
- Designed to demo realistic legal hold governance without backend dependencies
