# OKR Dependency Review Desk

## User Story
As a planning manager, I need to review OKRs with dependency risk in one place so I can approve status changes only when policy checks pass and keep an auditable record.

## Features
- Master-detail layout with objective list and deep detail panel
- Search, team/status filters, and sortable columns
- Role-based view selector (Planner, Exec Sponsor, PMO Reviewer)
- Change request form with validation (due date + minimum reason length)
- Policy validation gates before approval actions
- Status state transitions (approve, rework, block)
- Audit trail feed for every key action
- CSV export of filtered objective data

## Dave's Notes
- Chosen combo for variety: **Planning × Master-Detail**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export, state machine
- Dark-mode only by design, responsive from mobile to desktop
