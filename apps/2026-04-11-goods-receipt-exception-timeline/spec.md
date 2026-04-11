# Goods Receipt Exception Timeline

## User story
As a supply chain supervisor, I need to track goods-receipt discrepancies across warehouses, enforce approval policy gates, and keep a full audit trail so exceptions are resolved fast without losing compliance.

## Core features
- Timeline-first exception list with due-time priority and severity badges
- Search, filter, and sort by status, warehouse, severity, variance, and at-risk value
- Role-based views (Receiver, Supervisor, Finance Controller)
- Policy validation gate: approvals above 5% variance require Finance Controller
- State machine transitions (Logged → Investigating → Pending Approval → Approved / Rejected / Escalated)
- Rejection form validation (minimum reason length)
- Live audit trail updates for every action
- Filtered CSV export for operations and audit handoff

## Dave's notes
- Pattern: **Timeline**
- Domain: **Supply Chain**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, state machine, audit trail, CSV export
- Built as a single static file (Tailwind CDN + inline JS), dark-mode only, no build step
