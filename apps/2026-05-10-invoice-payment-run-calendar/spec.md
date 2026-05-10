# Invoice Payment Run Calendar — Spec

## User Story
As a finance operations team, we need a calendar-based payment run workspace to review invoices by payout date, enforce approval policy for high-value and high-risk items, and keep an audit trail for every decision.

## Core Features
- Calendar view grouped by planned payment run date
- Search + filter + sort by vendor, owner, status, risk, date, and amount
- Role-based views (AP Analyst, Treasury Manager, Finance Controller)
- State-machine actions: approve, hold, release hold, mark paid, reject
- Policy validation:
  - Invoices above €25k require Treasury Manager or Finance Controller approval
  - High-risk invoices require Finance Controller approval
  - Hold release is restricted to Treasury Manager / Finance Controller
  - Only approved invoices can be paid, and >€50k needs Controller sign-off
- Create-invoice form with validation and policy-aware initial status
- KPI cards for filtered invoice count, value, pending approvals, and high-risk items
- Audit trail with actor and timestamp
- CSV export for the filtered payment run view

## Dave's Notes
- Category: Finance
- UI Pattern: Calendar
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export, state-machine status flow
- Dark-mode only, no theme toggle, static self-contained HTML for GitHub Pages
