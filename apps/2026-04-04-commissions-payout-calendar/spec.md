# Commissions Payout Calendar

## User story
As a Sales Operations manager,
I want a calendar-centered workspace for commission payout runs,
so that I can plan payout dates, move records through approvals, and keep finance policy checks audit-ready.

## Features
- Monthly calendar view showing payout run counts and total payout amount per day
- Search/filter/sort controls (region, status, amount/risk/date)
- Day-focused payout list with selectable records and detail panel
- Role-based workflow actions (Sales Ops, Finance Controller, CFO)
- Policy validation rules:
  - payouts above €50k require CFO for approval
  - payouts above €70k require CFO to mark as paid
  - paid status only allowed from approved state
  - minimum note length for audit traceability
- Editable payout date during workflow transition
- Audit trail log with UTC timestamps
- CSV export of filtered payout runs
- Responsive dark-mode-only layout with keyboard-focus styling

## Dave's notes
- Domain: Sales
- Pattern: Calendar
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, search+filter+sort, CSV export
- Designed as a static single-file demo (Tailwind CDN + inline JavaScript), ready for GitHub Pages
