# Capacity Allocation Dragboard — Spec

## User story
As a PMO planner, I need to route weekly staffing requests through a controlled approval flow so that teams stay within delivery capacity while preserving decision traceability.

## Core features
- **Drag-and-drop planning board** with three workflow states (`Backlog`, `Review`, `Approved`)
- **State machine enforcement** (no direct `Backlog` → `Approved` jump)
- **Role-based policy validation** (`Planner`, `PMO Lead`, `Director`) with approval FTE thresholds
- **Search + filter + sort** for initiative triage across squads and weeks
- **Audit trail** per request with timestamped move history and operator notes
- **Create-request form** with validation rules for initiative, owner, FTE bounds, and priority
- **CSV export** of current board view for staffing review meetings

## Demo notes (Dave)
- Dark mode only, no theme toggle
- Responsive behavior: board columns stack on smaller screens, side panel remains usable
- Accessibility basics included: labeled inputs, keyboard-focus states, semantic buttons, drag targets with clear boundaries
- Uses realistic portfolio requests and week-based capacity to support planning rehearsals
