# Petty Cash Reconciliation Chatdesk

## User Story
As a finance operations reviewer, I need a conversation-first workspace for petty cash mismatch cases so I can reconcile branch variances quickly, enforce approval policy, and keep an auditable decision trail.

## Core Features
- Chat-style reconciliation thread per case with timestamped updates
- Inbox panel with searchable, filterable, sortable case queue
- KPI strip for open workload, approval backlog, resolved/rejected counts, and total variance
- Role-based workflow controls:
  - Cash Custodian can create and move cases into review
  - Finance Reviewer can progress review and reject with note
  - Finance Manager can resolve/reject final outcomes
- Policy validation for high-risk cases (variance >= €150 or declared cash > €500 requires approval code to resolve)
- Inline workflow transition form with validation and audit log updates
- New case intake form with field validation and realistic finance constraints
- CSV export for the currently filtered case set

## State Machine
- New -> In Review
- In Review -> Awaiting Approval | Rejected
- Awaiting Approval -> Resolved | Rejected
- Rejected -> In Review
- Resolved -> Resolved (terminal in demo)

## Dave's Notes
- Domain: **Finance**
- Pattern: **Chat UI**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export, state machine
- Dark-mode only by design (no theme toggle)
