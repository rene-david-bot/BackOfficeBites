# Change Freeze Exception Chatdesk

## User story
As an IT operations lead during a release freeze, I need a chat-first desk to evaluate emergency change exceptions quickly, validate policy controls, and keep an audit trail so production risk stays controlled.

## Features
- Search, filter, and sort exception tickets by ID, service, owner, status, and risk.
- Role-based view switching (Requestor, Ops Lead, Security, CAB Chair).
- Chat thread per ticket for fast triage and documented decisions.
- Policy package capture:
  - rollback plan
  - pre-prod evidence
  - ops + security acknowledgments
- State machine workflow: Draft -> Risk Review -> CAB Review -> Approved/Rejected.
- Policy validation before approval (content quality + required acknowledgments + role constraints).
- Audit trail logging for all state changes and major actions.
- CSV export of the selected exception package.

## Dave's notes
- Pattern: **Chat UI**
- Category: **IT Ops**
- Cross-cutting controls used: role-based views, policy validation, state machine, search/filter/sort, audit trail, CSV export.
- Built as a single self-contained dark-mode HTML file with inline JavaScript and Tailwind CDN.
