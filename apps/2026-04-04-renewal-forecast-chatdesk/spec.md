# Renewal Forecast Negotiation Chatdesk

## User Story
As a sales operations lead, I need a chat-first renewal workspace so account teams can align on discount strategy, enforce forecast policy, and keep an auditable trail from risk to commit.

## Core Features
- Chat-style negotiation thread with timestamped updates per renewal
- Searchable, filterable, sortable inbox by status, region, and risk tier
- KPI strip with renewal count, pending approvals, at-risk load, and weighted ARR
- Role-based forecast transitions:
  - Account Executive: draft/at-risk/negotiation updates
  - RevOps Analyst: risk/negotiation/approval routing
  - Sales Director: final committed/slipped decisions
- Policy validation for strict renewals (discount >20%, ARR >= €200k, or high-risk tiers require approval token before commit)
- Transition form with validation for discount limits, note length, and role authority
- Create-renewal form with realistic input checks and seeded defaults
- CSV export of the currently filtered renewal set
- Inline audit trail updates for every state or chat action

## State Machine
- Draft -> At Risk | Negotiation
- At Risk -> Negotiation | Pending Approval | Slipped
- Negotiation -> Pending Approval | Committed | Slipped
- Pending Approval -> Committed | Slipped
- Slipped -> Negotiation
- Committed -> Committed (terminal in demo)

## Dave's Notes
- Domain: **Sales**
- Pattern: **Chat UI**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export, state machine
- Dark-mode only by design (no theme toggle)
