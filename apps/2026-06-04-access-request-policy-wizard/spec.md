# Access Request Policy Wizard

## User story
As an IT Ops access governance lead, I want to intake and route privileged access requests through policy checks and role-based approvals, so that production access can be granted quickly without violating audit controls.

## Features
- 4-step wizard for request intake (identity, scope, controls, review)
- Data grid with search, filter, sort, keyboard row selection
- Role-based action panel (Requester, Manager, Security)
- Policy validation rules before submission/decisions:
  - MFA required for production access
  - SoD review required for finance systems
  - Rollback plan required for admin privileges
  - Minimum justification length
  - Decision note required for rejections
- Approval workflow state machine:
  - Draft → Pending Manager → Pending Security → Approved
  - Reject path from Manager/Security
- KPI cards for pending/high-risk/approved/rejected counts
- Per-request audit trail log
- CSV export of current filtered view

## Dave's notes
- Domain: IT Ops
- Pattern: Wizard
- Cross-cutting patterns used: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export
- Dark-mode only, no build step, static-file compatible for GitHub Pages
