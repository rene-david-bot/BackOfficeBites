# Travel Reimbursement Review Desk — Spec

## User story
As a finance reviewer or line manager,
I want to validate travel reimbursement requests against policy,
so that payouts are fast, compliant, and audit-ready.

## Core workflow
1. Review incoming reimbursement requests in a prioritized list.
2. Filter by status/risk and search by employee, request ID, trip, or cost center.
3. Open a request in the detail pane to inspect amount, receipts, policy flags, and audit history.
4. Take role-aware actions:
   - **Manager**: Approve / Need Info / Reject
   - **Finance**: Need Info / Mark Paid (only if approved)
   - **Auditor**: Read-only review
5. Export filtered rows to CSV for downstream accounting or monthly controls.

## Features shipped
- Dark-mode-only responsive UI (mobile → desktop).
- Master-detail layout with keyboard-focusable request rows.
- Search + filter + sort controls.
- Policy validation panel with live risk flags.
- Approval workflow state changes.
- Audit trail that appends new actions with timestamps.
- CSV export from the current filtered view.
- KPI cards for visible workload and financial totals.

## Demo data model
Each request includes:
- Employee + department
- Trip purpose
- Cost center
- Submitted timestamp
- Amount
- Status + risk
- Policy flags
- Receipt completeness
- Approver and reimbursement method
- Audit log timeline

## Dave’s notes
- Domain/pattern combo for today: **Finance × Master-Detail**.
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, and CSV export.
- Kept interactions deterministic and static-site-friendly (no backend/build step).
