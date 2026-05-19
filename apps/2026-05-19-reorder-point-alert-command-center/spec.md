# Reorder Point Alert Command Center - Spec

## User Story
As a supply chain planner, I want a single dashboard to detect SKU stockout risk and route replenishment decisions through policy-gated approvals so that we can prevent production stoppages while maintaining procurement controls.

## Core Features
- Dashboard KPIs: total SKUs, at-risk SKUs, critical gap units, average days left
- Risk-by-site and workflow distribution charts for quick triage
- Search, site/state/risk filters, and sortable view
- Data grid with stock, reorder point, days left, risk level, and workflow state
- Detail panel with:
  - Policy validation flags
  - Workflow state actions (advance, send back, defer, reopen)
  - Audit note entry and audit trail timeline
- Role-based workflow permissions:
  - Planner, Warehouse Manager, Procurement Lead, Auditor
- Policy validation rules:
  - Dual-source waiver required for large gaps with single-source suppliers
  - Priority escalation required when days-left is below lead-time
  - Escalation warning for large gaps still in Monitor
- CSV export for current filtered view
- Intake form with validation to add new replenishment candidates

## Dave's Notes
- Domain: Supply Chain
- Pattern: Dashboard+Charts
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, charts, state machine, CSV export
- Design target: dark-mode only, responsive, static GitHub Pages compatible, keyboard-accessible controls
