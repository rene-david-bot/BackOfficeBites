# RMA Disposition Wizard — Spec

## User story
As a supply-chain operations agent, I want to intake and classify supplier return claims in a guided flow so that high-value RMAs are policy-routed for approval and low-risk RMAs are dispatched quickly with full audit traceability.

## Core features
- 4-step wizard (Intake → Classification → Approval → Dispatch)
- Inline policy validation: claims above €5,000 require Finance Controller approval
- Role-based queue views (Operations Agent, QA Lead, Finance Controller)
- Search + filter + sortable data grid for active RMAs
- CSV export of the current filtered queue
- Audit trail feed for key user actions and system events
- KPI strip for open backlog, pending approvals, and average cycle time

## Dave's notes
- Pattern: Wizard (with embedded data-grid operations for triage)
- Category: Supply Chain
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, CSV export, audit trail, state-machine transitions
- Dark-mode only and mobile-friendly layout as requested
