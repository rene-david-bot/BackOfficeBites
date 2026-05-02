# Commission Clawback Ops Kanban

## User Story
As a sales operations manager, I need to triage and approve commission clawback disputes in one workflow so that payout corrections are policy-compliant, auditable, and resolved quickly.

## Core Features
- Kanban board with drag-and-drop between workflow stages (Intake, Review, Approval, Resolved)
- Search, region filter, and sortable views (age and amount)
- Role-based state transitions for Analyst, Manager, and Finance Controller
- Policy validation form (root cause, corrected amount, policy acknowledgment)
- Manual case creation for incoming disputes
- Audit trail timeline per case
- CSV export for currently filtered cases
- Keyboard-focusable cards and labeled form controls for accessibility basics

## Dave's Notes
- Category: Sales
- UI Pattern: Kanban
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, state machine, drag-and-drop, CSV export
- Built as a single static HTML file (Tailwind CDN + inline JS) for zero-build deployment on GitHub Pages.
