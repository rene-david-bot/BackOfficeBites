# Shipment Dock Slot Calendar

## User Story
As a warehouse dock planner, I need a calendar view of inbound shipments so I can schedule dock slots, enforce arrival policies, and hand off completed receipts with a clear audit trail.

## Features
- 14-day shipment calendar with per-day slot volume and critical-load indicators.
- Search, lane filter, status filter, and sorting by ETA, priority, supplier, or pallet count.
- Role-based views (Dock Planner, Shift Lead, Carrier Desk) with transition permissions.
- Shipment detail panel with docs and quality validation controls.
- State machine transitions: Scheduled, At Risk, Delayed, Arrived, Closed.
- Policy validation for delay notes, docs-required arrival, and Shift Lead close authority.
- Embedded audit trail entries for field updates, transitions, and exports.
- New inbound shipment form with validation.
- CSV export for the selected day and active filter set.

## Dave's Notes
- Pattern: **Calendar**
- Category: **Supply Chain**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, state machine, audit trail, CSV export.
- Dark-mode only by design for BackOfficeBites consistency.
