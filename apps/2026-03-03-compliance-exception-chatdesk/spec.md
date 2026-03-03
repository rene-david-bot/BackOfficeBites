# Compliance Exception Chatdesk — Spec

## User story
As a legal operations reviewer, I need a chat-first workspace to triage policy exceptions, collaborate with requesters, and route approvals with guardrails so that risky exceptions are auditable and decision-ready.

## Core features
- Chat UI with per-exception conversation history
- Search, filter, and sort across exception queue
- Role-based view simulation (Requester, Legal Reviewer, Legal Approver)
- Policy validation guardrail:
  - High/Critical or value > €50,000 requires Legal Approver for approval
  - Reject action restricted to Legal Approver
- Decision actions: Approve, Request Revision, Reject
- Due-date validation (no past dates)
- Immutable-style audit trail entries for messages and decisions
- CSV export of current filtered queue
- KPI cards: open, pending, critical, average response SLA

## Dave's notes
- Category: Legal
- UI Pattern: Chat UI
- Cross-cutting patterns included: approval workflow, audit trail, role-based view, policy validation, search+filter+sort, CSV export
- Dark-mode-only by design, no theme toggle
- Built as a single static HTML file (Tailwind CDN + inline JS), no build step required
