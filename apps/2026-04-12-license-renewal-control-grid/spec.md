# License Renewal Control Grid — Spec

## User story
As an **IT Asset Manager**, I need one workspace to monitor software-license renewals, enforce policy checks, and route approvals so that spend and compliance risk stay under control.

## Core features
- **Data Grid pattern**
  - Sortable columns (days to renewal, utilization, annual cost)
  - Search + vendor/status filters for fast triage
  - Responsive table with actionable row controls
- **Role-based workflow**
  - Role views: IT Asset Analyst, Security Lead, Finance Controller
  - Permissioned actions for approvals and auto-renew changes
- **Policy validation**
  - Auto-renew block when utilization is below 60% and cost is above €50k
  - Exception request rules (reason length and extension limits)
- **State management and auditability**
  - Status transitions (Compliant, Pending Approval, At Risk, Expired)
  - Live audit trail entries for every critical action
- **Exportability**
  - CSV export of the currently filtered portfolio

## Dave's notes
- Built as a **single self-contained static file** (Tailwind CDN + inline JS), no build step.
- Dark-mode only to match the BackOfficeBites baseline.
- Focused on practical procurement + compliance controls that teams usually buy from niche SaaS tools.
