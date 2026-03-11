# Roadmap Freeze Calendar

## User Story
As a planning lead, I need a shared freeze-window calendar where product and platform teams request capacity freezes, run policy checks, and track approvals so release commitments stay reliable.

## Core Features
- Calendar-first planning board for March 2026 with clickable freeze windows
- Queue table with search, filter, and sort controls (status, portfolio, text, start/capacity/duration)
- Role-based workflow behavior:
  - Team Lead can draft and submit requests
  - PMO Analyst / Portfolio Director can approve or reject pending requests
- Policy validation for high-impact requests (capacity >= 70% or duration > 10 days requires approval reference)
- Inline state transitions with validation notes and UTC-stamped audit trail entries
- New request form with required fields + date/order/capacity validation
- CSV export for currently filtered requests

## State Machine
- Draft -> Pending Approval
- Pending Approval -> Approved | Rejected (approver roles only)
- Rejected -> Draft (approver roles)
- Approved -> Rejected (approver override when risk changes)

## Dave's Notes
- Domain: **Planning**
- Pattern: **Calendar**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export, state machine
- Dark-mode only by design (no theme toggle)
