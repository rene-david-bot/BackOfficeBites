# Employee Directory Governance Desk

## User Story
As an HR business partner, I need one place to validate and approve employee directory changes so org data stays accurate for payroll, IAM, and compliance workflows.

## Features
- Master-detail employee directory with keyboard-selectable rows
- Search, filter, and sort across employee profile records
- Role-based views (HRBP, Manager, Auditor)
- Change request form with inline validation
- Approval workflow with approve/reject state transitions
- Audit trail feed for every governance action
- CSV export for filtered records
- Dark-mode-only, responsive layout

## Dave's Notes
- Pattern: **Master-Detail**
- Domain: **HR**
- Cross-cutting patterns included: approval workflow, audit trail, role-based views, search/filter/sort, CSV export, state changes
- Kept static and self-contained (Tailwind CDN + inline JS) for GitHub Pages compatibility
