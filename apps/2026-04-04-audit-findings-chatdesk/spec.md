# Audit Findings Resolution Chatdesk

## User Story
As a legal operations lead, I need a chat-first workspace to triage audit findings, validate remediation evidence, and close findings only when policy checks and approvals are satisfied.

## Core Features
- Findings queue with sortable columns (finding ID, severity, days open)
- Search + filter controls for severity and workflow status
- Role-based interaction modes (Auditor, Control Owner, Legal Counsel)
- Chat thread per finding for actionable updates and handoffs
- Policy validation gates:
  - Critical findings require minimum evidence before sign-off
  - Closure requires explicit approver selection
- Workflow state machine actions (New → In Review → Remediation → Pending Sign-off → Closed)
- Live KPI cards (open, critical, pending sign-off, overdue)
- CSV export for currently filtered findings
- Audit trail log for selection, messaging, status changes, policy blocks, and exports

## Dave's Notes
- Pattern: **Chat UI**
- Category: **Legal**
- Cross-cutting patterns included: approval workflow, policy validation, state machine, audit trail, role-based views, search/filter/sort, CSV export
- Dark-mode only (no theme toggle)
- Single static file (Tailwind CDN + inline JavaScript), no build tooling
