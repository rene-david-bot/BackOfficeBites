# AP Hold Release Kanban

## User story
As an Accounts Payable operations team, we need a fast board to move blocked invoices from intake to release while enforcing policy checks and preserving a clear audit trail.

## Features
- Dark-mode-only Kanban board with 5 lanes:
  - New Hold
  - Vendor Follow-up
  - Policy Review
  - Ready to Pay
  - Released
- Search, filter, and sort across tickets
- Role-based views:
  - Analyst: intake + early workflow movement
  - Controller: final approvals + release movement
  - Audit: read-only oversight view
- State machine enforcement for lane transitions
- Policy validation gates before payment release
- Quick approval increment per ticket
- New hold ticket form with required-field and numeric validation
- Live KPI cards (open holds, blocked amount, ready count, released count)
- Audit trail feed for workflow events
- CSV export of the filtered board

## Dave's notes
- Focused on a realistic AP hold scenario rather than generic task cards.
- Added both drag-and-drop and keyboard-friendly action buttons for lane movement.
- Embedded governance controls directly in flow rules so incorrect transitions are blocked and logged.
