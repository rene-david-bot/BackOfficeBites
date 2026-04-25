# Shift Swap Approval Dragboard

## User story
As an HR operations coordinator, I need to intake and route shift swap requests through supervisor and HR review so approved swaps remain policy-compliant and auditable.

## Features
- Drag-and-drop board with four workflow states: Submitted, Supervisor Review, Approved, Rejected
- Search, team filter, policy filter, and sort controls (priority/date/hours impact)
- Role-aware behavior (`Coordinator`, `Supervisor`, `HRBP`) with approval gating
- Policy validation for approval moves:
  - Blocks approval for skill mismatch
  - Blocks approval when weekly hours exceed 50
  - Prevents coordinators from self-approving
- New request form with validation (required fields, shift mismatch check)
- Audit trail for moves, blocked actions, role changes, and new requests
- CSV export for downstream payroll/compliance review
- Dark-mode responsive UI with keyboard-focusable drop zones

## Dave's notes
- Category: **HR**
- Pattern: **Drag-and-Drop**
- Cross-cutting patterns used: **approval workflow**, **policy validation**, **audit trail**, **search/filter/sort**, **CSV export**
- Designed as a static single-file prototype for GitHub Pages (no build step)
