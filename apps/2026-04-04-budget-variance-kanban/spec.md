# Budget Variance Action Kanban — Spec

## User story
As a finance operations lead, I want to triage monthly budget variances in a kanban workflow so that teams can investigate overspend, submit reforecasts, and close lines only when policy and approval rules are satisfied.

## Core workflow
1. Filter variance lines by department, severity, and free-text search.
2. Open a card in the action desk to inspect planned vs actual values.
3. Apply workflow actions (`Investigate → Reforecast → Approve Offset → Closed`) with role-aware constraints.
4. Enforce policy checks for high-value closures and mandatory audit notes.
5. Export the currently filtered view to CSV for controller handoff.

## Features shipped
- **Kanban UI** with four finance workflow states and clickable cards
- **Role-based views/actions** (`Analyst`, `Finance Manager`, `CFO`)
- **Policy validation**
  - notes required (min length)
  - offset required for reforecast/approval actions
  - only CFO can close >€30k variances
  - high-severity closure needs documented offset
- **State machine transitions** with timestamp refresh
- **Audit trail feed** for decisions + exports
- **Search + filter + sort** controls
- **CSV export** for filtered dataset
- **Mini variance chart** by department

## Demo data
- 8 budget lines across Marketing, Sales, IT Ops, HR, Legal, Finance, etc.
- Mixed severities and statuses to show all workflow stages

## Dave's notes
- Kept everything in a single static `index.html` with Tailwind CDN and inline JS.
- Dark-mode only by design (no theme toggle).
- Designed for GitHub Pages: no build step, no backend dependencies.
