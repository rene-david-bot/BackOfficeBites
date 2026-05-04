# Skills Matrix Gap Closure Wizard

## User Story
As an HR business partner or team manager, I want to identify critical capability gaps for specific employees, define an upskilling plan under policy constraints, and route it through approval stages so that workforce readiness risks are reduced quickly and consistently.

## Features
- Step-based wizard (Select → Scope → Plan → Approve)
- Search, filter, and sort employee gap candidates
- Role-based view switch (Team Manager vs HR Partner)
- Policy validation rules:
  - At least one selected skill gap must be 2+ levels
  - Policy acknowledgement required before planning
  - Start date must be at least 7 days ahead
  - Budget above €4,000 allowed only in HR role
  - Business impact note must be meaningful (min length)
- Approval workflow state machine (Draft → Manager Review → HR Calibration → Approved)
- Audit trail log for all key actions
- CSV export for closure plan details
- Responsive dark-mode UI (no build step, static hosting ready)

## Dave's Notes
- Domain: HR
- Pattern: Wizard
- Cross-cutting patterns included: approval workflow, policy validation, search/filter/sort, audit trail, CSV export
- Data is realistic sample data for enterprise teams across Ops, CS, Finance, and IT
- Built as a single self-contained `index.html` using Tailwind CDN + inline JavaScript
