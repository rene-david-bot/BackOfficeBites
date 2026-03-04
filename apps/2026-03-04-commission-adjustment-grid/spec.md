# Commission Adjustment Control Grid — Spec

## User story
As a compensation analyst, I need to submit and route commission adjustments with clear policy limits and approvals so that payroll closes on time without compliance risk.

## Core features
- **Data grid pattern** with searchable/sortable commission cases
- **Role-based behavior** (Analyst, Manager, Finance) with different policy limits
- **Policy validation** for adjustment percentage and reason length
- **Approval workflow routing** (`Approved`, `Pending Manager`, `Pending Finance`)
- **Audit trail** per case with timestamped state changes
- **CSV export** for finance reconciliation

## Demo notes (Dave)
- Dark mode only, no theme toggle
- Responsive layout: grid + right panel stack cleanly on mobile
- Accessibility basics included: labeled inputs, keyboard-focus styles, button semantics
- Demo data is realistic enough for decision rehearsal and handoff discussions
