# Performance Review Calibration Grid

## User story
As an HRBP and leadership team, I want to calibrate employee performance ratings in a single grid with role-based permissions, so that final ratings are consistent, policy-compliant, and audit-ready before cycle close.

## Core features
- Data-grid queue with search, filter (department/status/cycle), sort, and row selection
- Role-based views for **Manager**, **HRBP**, and **VP** with different allowed workflow actions
- Policy validation for high rating deltas (> ±1.0): requires calibration slot + longer justification
- Workflow state machine: Draft → Manager Submitted → Calibration Review / Needs Rework → Approved → Locked
- Inline review update form with validation, status transitions, and timestamped audit logs
- New review candidate form for creating additional draft rows
- KPI cards (open, rework, approved, locked, average delta)
- CSV export of filtered results
- Dark-mode responsive UI with accessible labeled controls and keyboard-friendly form interactions

## Dave's notes
- Chosen combo for today: **HR × Data Grid**
- Concept selected to avoid repeating recent catalog ideas: **performance review calibration**
- Cross-cutting patterns included: approval workflow, audit trail, role-based views, search/filter/sort, CSV export, policy validation, state transitions
- Built as a single static `index.html` with Tailwind CDN + inline JavaScript (no build step)
