# Policy Acknowledgment Exception Kanban — Spec

## User Story
As a legal operations lead, I need a single board to triage overdue policy acknowledgments, route exceptions through the right reviewers, and keep an audit-ready trace so compliance checks can be closed quickly.

## Core Features
- Kanban workflow with four states: **New Exception → Manager Review → Legal Approval → Closed**
- Role-based action model (**HR Analyst, Team Manager, Legal Counsel, DPO, Auditor**) with enforced state transitions
- Policy validation gates:
  - Manager note required before legal routing
  - EU + AI policy + High/Critical cases require DPO closure
- Search, filter, and sort controls (policy, severity, region, free text)
- Exception intake form with validation (required fields, overdue range, minimum reason length)
- Export current filtered board data to CSV
- Local audit trail stream for actions and policy blocks

## Dave's Notes
- Pattern selected: **Kanban**
- Category selected: **Legal**
- Cross-cutting patterns included: role-based views, policy validation, search/filter/sort, state machine, audit trail, CSV export
- Dark-mode only implementation (no dark/light toggle)
- Fully self-contained static app (Tailwind CDN + inline JS), ready for GitHub Pages
