# Performance Review Calibration Grid

## User Story
As an HR business partner, I need a data-grid calibration workspace for performance reviews so managers, HRBP, and directors can normalize ratings, enforce policy checks, and approve compensation decisions with a full audit trail.

## Features
- Data-grid review queue with search, team/status filters, and multi-sort controls
- Role-based workflow actions (Manager, HRBP, Director)
- State machine transitions: Pending Manager -> Pending HRBP -> Pending Director -> Approved / Escalated
- Policy validation on transitions (rating-gap evidence, high-impact budget note, promotion-ready guardrail)
- Structured audit trail for every state change
- New-case intake form with validation for required employee/review fields
- CSV export of the currently filtered review set
- Responsive dark-mode-only UI with keyboard-selectable rows

## Dave's Notes
- Domain: HR
- UI pattern: Data Grid
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, search/filter/sort, state machine, audit trail, CSV export
- Built as a single static `index.html` using Tailwind CDN + inline JavaScript for GitHub Pages.
