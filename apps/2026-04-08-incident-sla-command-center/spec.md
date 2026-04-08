# Incident SLA Command Center — Spec

## User story
As an **IT Ops incident manager**, I need a single dashboard to monitor SLA risk, process exception requests, and keep an audit trail so that breaches are handled consistently and defensibly.

## Core features
- **Dashboard + charts pattern**
  - KPI tiles: open incidents, breached SLAs, pending CAB approvals, average MTTR, near-breach count
  - Severity distribution bars (P1/P2/P3)
- **Incident queue operations**
  - Search, severity filter, and sortable columns (severity and minutes-to-breach)
  - State machine transition buttons (New → Investigating → Mitigated → Resolved)
- **Policy-gated SLA exception workflow**
  - Submit extension requests with required business justification
  - Validation rules by severity (P1/P2/P3 max extension limits)
  - CAB-only approval action
- **Role-based views**
  - NOC Analyst, Incident Manager, CAB Approver with permission-specific actions
- **Auditability and export**
  - Real-time audit trail entries for key actions
  - CSV export of current filtered queue

## Dave's notes
- Built as a **single self-contained static file** (Tailwind CDN + inline JS), no build step.
- Dark-mode only by design for the Daily Demo baseline.
- Focused on practical back-office behaviors: policy validation, role constraints, auditable operations, and live queue manipulation.
