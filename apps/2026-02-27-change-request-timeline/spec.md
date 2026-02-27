# Change Request Timeline Hub

## User story
As an IT change manager, I need a clear timeline view of upcoming changes with approvals, policy checks, and audit logs so I can keep production rollouts compliant and on schedule.

## Features
- Timeline queue with search, filter, and sorting across environment, risk, and status.
- Role-aware actions for approvals, scheduling, execution, and rollback.
- Policy checklist and approval tiles (CAB, Security, Ops) with audit logging.
- Interactive milestones view plus notes and audit trail updates.
- CSV export for change reporting.

## Dave's notes
- Dark-mode-only UI built with Tailwind CDN and client-side state.
- Includes realistic change data, risk signals, and compliance guardrails.
- Every workflow action writes to the audit trail for traceability.
