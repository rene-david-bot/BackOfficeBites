# Service Ticket Deflection Grid

## User Story
As a Sales Operations analyst, I want to triage incoming service tickets in a sortable grid, enforce concession policies, and route risky decisions through approval stages so that retention actions are fast, consistent, and auditable.

## Features
- Data-grid ticket workspace with realistic sample queue
- Search, filter, and sort controls (segment, risk, status, SLA/credit/risk sorting)
- Role-based views (Triage Agent vs Sales Manager)
- Decision panel with form validation for action, justification, and approved credit value
- Policy checks:
  - Justification minimum length
  - Credits above €1,500 require manager role
  - Approval requests only for > €1,500 tickets
  - Approved credit capped at 110% of requested amount
- State changes across workflow statuses (New, In Review, Needs Approval, Approved, Rejected)
- Audit trail for key actions
- CSV export of currently filtered ticket set
- Responsive dark-mode UI using single-file Tailwind CDN + inline JavaScript

## Dave's Notes
- Domain: Sales
- Pattern: Data Grid
- Cross-cutting patterns included: approval workflow, policy validation, search/filter/sort, state machine, audit trail, CSV export
- Built as a static self-contained page for GitHub Pages deployment
