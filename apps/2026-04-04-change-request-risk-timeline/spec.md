# Change Request Risk Timeline

## User story
As a Change Manager, I need to move production changes through review, CAB approval, scheduling, and implementation with strict policy checks so risky releases are controlled and auditable.

## Core features
- Timeline queue for change windows with stage/risk visibility
- Search + filter + sort across stage, risk, system, and keywords
- Role-based transitions (Requester, CAB Reviewer, Change Manager)
- Policy validation for high/critical changes (rollback readiness + approval code)
- State machine workflow from proposal to implemented/rolled-back
- Full audit trail per change request
- CSV export for filtered reporting
- New-change intake form with validation

## Dave's notes
- Pattern used: **Timeline**
- Category used: **IT Ops**
- Cross-cutting patterns: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export, state machine
- Built as a single-file static app (Tailwind CDN + inline JS), dark-mode only.
