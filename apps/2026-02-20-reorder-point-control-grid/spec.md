# Reorder Point Control Grid

## User Story
As a supply chain planner, I need a grid that shows reorder points across sites so I can spot risk, propose updates, and route changes for approval without losing audit coverage.

## Features
- Data grid with sortable columns, search, and multi-filtering by site/status.
- Approval workflow for reorder point changes with queue actions.
- Policy guardrails with validation and audit trail logging.
- CSV export of the filtered grid.
- Detail panel for SKU review, inventory signals, and proposal form.

## Dave's Notes
- Dark-mode only, responsive grid layout with actionable approval queue.
- Demo data mirrors real warehouse packaging and equipment SKUs.
- Cross-cutting patterns: approval workflow, audit trail, search/filter/sort, CSV export.
