# Travel Reimbursement Exception Chatdesk

## User Story
As a finance operations lead, I need a chat-first workspace to review out-of-policy travel reimbursements so that manager and controller approvals happen quickly, with policy context and a clean audit trail.

## What this demo includes
- Dark-mode, responsive single-file app (Tailwind CDN + inline JS)
- Request inbox with:
  - Search + filter + sort
  - KPI tiles for open queue, manager queue, finance queue, and SLA risk
- Role-based workflow views:
  - Employee, Manager, Finance Controller
- Policy validation panel per request:
  - Shows cap breach and missing receipt flags
- Chat thread per case:
  - Add comments and persist into the activity stream
- Workflow state machine actions:
  - Submit, escalate to finance, approve, reject, mark paid
- Create request form with validation:
  - Only creates records that qualify as an exception
- Audit trail timeline
- CSV export of currently filtered request set

## Dave's notes
- Pattern: **Chat UI**
- Category: **Finance**
- Cross-cutting patterns used:
  - approval workflow
  - policy validation
  - role-based views
  - search + filter + sort
  - audit trail
  - csv export
- Kept interactions realistic for day-to-day reimbursement exception triage.
