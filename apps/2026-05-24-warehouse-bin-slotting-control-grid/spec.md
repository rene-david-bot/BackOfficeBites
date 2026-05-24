# Warehouse Bin Slotting Control Grid

## User story
As a warehouse operations lead, I need one grid to review and approve slotting move requests so safety, cold-chain, and throughput policies are enforced before physical bin changes happen.

## Features
- Supply-chain data grid with row-level drilldown panel
- Search, filter, and sort by SKU, zone, status, hazard, due date, and risk
- Role-based views (Warehouse Planner, Safety Officer, Ops Manager)
- Policy validation rules for HazMat bins, cold-chain bins, and high-velocity upper-bin approvals
- Controlled state machine (Draft → Ready Review → Approved/Rejected → Moved)
- Action-note validation for submit/reject steps
- Live KPI cards for open work, policy blocks, urgent due work, and completed moves
- Per-request audit trail timeline
- CSV export of currently visible rows
- Responsive, dark-mode-only single-file implementation

## Dave's notes
- Category: Supply Chain
- Pattern: Data Grid
- Cross-cutting patterns included: policy validation, role-based views, approval workflow, audit trail, search+filter+sort, CSV export, state machine
- Built as a self-contained `index.html` with Tailwind CDN + inline JavaScript.
