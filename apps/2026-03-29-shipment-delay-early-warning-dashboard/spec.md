# Shipment Delay Early-Warning Dashboard

## User Story
As a supply chain operations lead, I need a real-time delay risk dashboard so I can escalate critical shipments, approve expedite spend within policy limits, and keep an auditable decision trail.

## Core Features
- Dashboard + charts layout for shipment delay monitoring (KPIs, carrier delay profile bars, status mix donut)
- Realistic shipment dataset with lanes, ETA, delay, priority, carrier, region, owner, and expedite benchmark cost
- Search, region/carrier/status filtering, and multiple sorting modes (delay, ETA, budget, priority)
- Role-based view switch (`Planner`, `Ops Manager`, `Logistics Director`) with policy-aware approval behavior
- Expedite workflow panel with:
  - shipment selection
  - mandatory reason validation
  - budget validation
  - escalation submission
  - role-based approval limits (Ops Manager €1,500 cap, Director unlimited)
- State changes reflected in table and KPI calculations (`Monitoring`, `At Risk`, `Escalated`, `Expedite Approved`, `Delivered`)
- CSV export for the currently filtered shipment view
- Embedded audit trail with timestamped workflow events

## Dave's Notes
- Category: Supply Chain
- Pattern: Dashboard+Charts
- Cross-cutting patterns used: approval workflow, role-based views, policy validation, search+filter+sort, audit trail, CSV export
- Dark-mode only, responsive, keyboard-focusable controls, and static-file compatible for GitHub Pages.
