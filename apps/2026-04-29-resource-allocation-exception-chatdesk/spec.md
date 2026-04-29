# Resource Allocation Exception Chatdesk

## User story
As a planning manager, I want to resolve cross-team staffing exceptions in one chat-oriented workspace so I can approve or reject allocations quickly, enforce approval policy, and preserve an auditable trail.

## What this demo includes
- Dark-mode **Chat UI** for planning exceptions with realistic data
- Exception queue with search, filter, and sort (impact, due date, priority)
- Role-based view selector (Planner, Team Lead, Portfolio Manager)
- Policy validation:
  - only Portfolio Manager can approve requests above 40 hours
  - proposal form enforces hours, target team, and minimum justification length
- Chat thread per exception with inline posting and timestamped updates
- Decision panel for approve/reject workflow and state changes
- Audit trail timeline updated on comments and decisions
- CSV export for filtered exception rows
- KPI cards for review load and approved/pending hour totals

## Dave's notes
- Category: **Planning**
- UI pattern: **Chat UI**
- Cross-cutting patterns used: approval workflow, policy validation, search/filter/sort, role-based views, audit trail, CSV export
- Built as a static single file (`index.html`) with Tailwind CDN and inline JavaScript.
