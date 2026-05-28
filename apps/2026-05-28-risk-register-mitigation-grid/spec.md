# Risk Register Mitigation Grid - Spec

## User Story
As a portfolio planning team, we need one place to triage delivery risks, enforce policy-gated mitigations, and route closure approvals so that risk decisions are auditable and exportable.

## Core Features
- Data-grid queue with search, filter, and sort (program, severity, state, free text)
- Role-based state transitions for PMO Analyst, Risk Owner, and Portfolio Lead
- Policy validation for approval and closure (review gates, residual risk threshold, due-date checks)
- Editable mitigation form with validation, budget, residual risk, and review flags
- Audit trail per risk with timestamped actions
- CSV export of current filtered view
- Add-risk action to simulate live intake

## Dave's Notes
- Category: Planning
- Pattern: Data Grid
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export, state machine
- Dark-mode only and fully self-contained static HTML (Tailwind CDN + inline JS)
