# Reorder Point Risk Radar — Spec

## User Story
As a supply planner, I want to detect reorder risk early across warehouses and push recommendations through an approval workflow, so we avoid line stoppages while staying inside stocking policy.

## Core Features
- **Dashboard + charts** showing at-risk SKUs and lead-time stockout exposure.
- **Search / filter / sort** on SKU, item, warehouse, and risk level.
- **Policy validation** on reorder quantity (cannot exceed max-stock gap).
- **Role-based workflow** with explicit state machine:
  - Draft → Submitted (Planner)
  - Submitted → Manager Approved / Rejected (Manager)
  - Manager Approved → PO Created (Procurement)
- **Audit trail** of exports and state transitions.
- **CSV export** of currently filtered inventory view.

## Demo Data
- 7 realistic raw-material SKUs
- 3 warehouses (Berlin DC, Dresden Hub, Leipzig FC)
- Distinct lead times, usage rates, reorder points, and suppliers

## Interaction Notes
- Table headers are clickable for sorting.
- Risk level is derived from reorder point and lead-time consumption.
- Workflow action buttons are gated by selected role.
- App is dark-mode only and fully static (no build step).

## Dave’s Notes
- Pattern used today: **Dashboard+Charts**
- Domain: **Supply Chain**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, search/filter/sort, CSV export.
