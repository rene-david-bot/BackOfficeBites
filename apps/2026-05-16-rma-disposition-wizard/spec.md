# RMA Disposition Workflow Wizard

## User story
As a supply-chain returns lead, I need to intake RMAs quickly, validate policy risk in one place, and move cases through role-based approvals so high-value returns are controlled and auditable.

## Features
- Three-step wizard for intake, policy capture, and routing.
- Queue with search, filter (status/region), and sortable risk/exposure/date views.
- Role-based action controls (Request Agent, RMA Analyst, QA Lead, Finance Controller, Ops Manager, Auditor).
- Policy validation flags:
  - Warranty expired
  - Serial mismatch
  - High-value approvals
  - Severe damage inspection
  - High fraud signal
- Approval workflow actions from detail panel:
  - Advance stage
  - Return for evidence
  - Reject case
- Audit trail log for each status/action transition.
- CSV export for the currently filtered queue.
- Dark-mode-only responsive layout.

## Dave's notes
- Domain: **Supply Chain**
- Pattern: **Wizard**
- Cross-cutting patterns included this build:
  - Approval workflow
  - Policy validation
  - Role-based views
  - Search/filter/sort
  - Audit trail
  - CSV export
- Built as a single static `index.html` (Tailwind CDN + inline JS), no build step.
