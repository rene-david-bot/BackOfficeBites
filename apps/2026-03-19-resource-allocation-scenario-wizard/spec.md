# Resource Allocation Scenario Wizard — Spec

## User story
As a planning lead, I need a guided wizard to build quarterly staffing scenarios, validate governance policies before submission, and route approvals to PMO/Finance so resource plans can be executed without budget or compliance surprises.

## Core features
- **4-step wizard flow**
  - Scenario Intake
  - Capacity Planning
  - Policy & Approval
  - Review & Export
- **Search + filter + sort** in the resource capacity table
- **Role-based views/actions** (`Planner`, `PMO Lead`, `Finance Controller`)
- **Policy validation**
  - Intake completeness checks
  - Overbooking prevention (`assigned <= available`)
  - Budget-cap enforcement
  - Minimum utilization threshold warning
  - Mandatory role coverage (Architect + QA)
- **Approval workflow state machine**
  - `Draft → Validation Failed/Ready → Approval Requested → Approved`
- **Audit trail** for all key actions (allocation edits, validation, approval)
- **CSV export** for assignments and audit log

## Demo data
- Seeded with 6 realistic resources across Platform, Business Apps, Data, and QA teams
- Includes rates, available hours, and initial assignments for a 12-week SAP rollout scenario

## Dave’s notes
- Chosen combo for variety: **Planning × Wizard**
- Cross-cutting patterns covered: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export, state machine
- Single self-contained dark-mode `index.html` with Tailwind CDN + inline JS, no build step
