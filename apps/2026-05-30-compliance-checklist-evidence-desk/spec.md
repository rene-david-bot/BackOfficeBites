# Compliance Checklist Evidence Desk

## User Story
As a legal operations analyst, I need to manage compliance checklist controls in one place, attach supporting evidence, and route items through approval states so audits can be answered quickly and consistently.

## Features
- Master-detail layout for fast triage and deep inspection
- Search, filter, and sort across checklist items
- Role-based views and action permissions (Analyst, Approver, Admin)
- Policy validation gate before approval (minimum evidence + due date checks)
- Workflow state machine: Draft → Under Review → Approved/Rejected → Archived
- Evidence capture form with validation
- Full audit trail for key actions
- CSV export for filtered records
- Responsive dark-mode UI only (no theme toggle)

## Dave's Notes
- Domain: Legal
- UI pattern: Master-Detail
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, CSV export, search/filter/sort, state machine
- Built as a single static `index.html` with Tailwind CDN + inline JavaScript for GitHub Pages compatibility.
