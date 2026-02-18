# Leave Request Submission

## Summary
Employee-facing leave request intake that syncs with the Leave Request Approval Center via the shared BackOfficeBites data store.

## Core features
- Submit leave requests with team, manager, dates, balance, coverage estimate, and handoff.
- Live policy preview (notice window, blackout overlap, coverage risk, balance shortfall).
- Recent request tracker with status pills.
- Real-time sync through shared localStorage data.

## Data
- Uses `BackOfficeStore.leaveRequests` as the single source of truth.
- Generates sequential `LR-####` IDs based on existing records.
