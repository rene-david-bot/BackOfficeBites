# Clause Deviation Review Dragboard

## User Story
As legal operations lead, I need a drag-and-drop workspace for contract clause deviations so I can triage reviews, enforce policy gates, and document auditable approval decisions.

## Features
- Drag-and-drop board with workflow stages: Intake, Legal Review, Risk Committee, Approved, Rejected
- Search, region filter, and sort (newest, value, risk)
- Role-based actions (Legal Ops Analyst, Counsel, Risk Committee)
- Policy validation checks before approval
- Detailed audit trail per deviation
- Create-deviation form with field validation
- CSV export for filtered dataset
- Responsive dark-mode-only interface (no theme toggle)

## Dave's Notes
- Domain: Legal
- UI pattern: Drag-and-Drop
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, state machine, CSV export
- Built as a single static `index.html` using Tailwind CDN + inline JavaScript for GitHub Pages.
