# Warehouse Bin Rebalance Board

## User Story
As a warehouse lead, I want to rebalance SKUs across bins with clear policy checks and approvals so that fast movers stay accessible without violating capacity or hazmat/cold-chain rules.

## Core Features
- Drag-and-drop bin map to stage rebalance moves
- Policy validation (capacity, hazmat-only, cold-chain-only, pending move lock)
- Approval queue for staged moves with approve/reject actions
- Search, filter, and sort across SKUs
- CSV export for rebalance reviews
- Audit trail of moves, approvals, and exports

## Dave's Notes
- Dark-mode only, single-file Tailwind build for GitHub Pages.
- Dragging an item creates a pending move; approval clears the pending badge or rejects it back.
- Capacity and allowed-type checks prevent invalid drops.
