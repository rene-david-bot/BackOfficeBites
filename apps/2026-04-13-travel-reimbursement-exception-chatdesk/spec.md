# Travel Reimbursement Exception Chatdesk

## User Story
As a finance operations lead, I need a chat-first workspace to triage travel reimbursement exceptions quickly, enforce policy before payout, and keep a complete audit trail for every decision.

## Core Features
- Chat-style claim workspace with per-claim conversation history
- Role-based view switch (employee, manager, finance) with gated actions
- State machine transitions: Draft → Submitted → Needs Receipt → Manager Approved → Finance Approved → Paid/Rejected
- Policy validation blocks for missing receipts and high-value exceptions
- Search, filter, and sort across claims
- New claim form with validation and draft creation
- CSV export of current filtered claim set
- Audit trail log of comments, state changes, and exports
- Responsive, dark-mode-only UI

## Dave's Notes
- Domain: Finance
- Pattern: Chat UI
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, CSV export, state machine
- Kept fully static and self-contained (Tailwind CDN + inline JavaScript), no build tooling required
