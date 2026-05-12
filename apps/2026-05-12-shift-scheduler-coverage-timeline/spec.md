# Shift Scheduler Coverage Timeline

## User story
As an HR scheduling lead, I want to manage weekly shifts in a timeline view so I can detect coverage gaps early, process swap requests quickly, and keep policy-compliant staffing records.

## Features
- Timeline grouped by day with clickable shift cards
- Search + filter by team, site, and status
- KPI strip for open gaps, swaps, and high-risk shifts
- Role-based views (Scheduler, Team Lead, Compliance) with read-only compliance mode
- Shift action state machine:
  - Approve Shift
  - Approve Swap
  - Mark Open Gap
  - Assign Backup
- Overtime policy validation indicator in detail panel
- Audit trail per shift with timestamp, actor, action, note
- Swap request intake form with validation (time range + reason length)
- CSV export of currently filtered shifts
- Responsive dark-mode-only UI

## Dave's notes
- Category: HR
- Pattern: Timeline
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter, audit trail, state machine, CSV export
- Kept as a single static `index.html` with Tailwind CDN + inline JS for zero build/deploy friction
