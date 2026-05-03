# RACI Builder Ownership Dragboard

## User Story
As a planning lead, I need a visual workspace to assign and validate RACI ownership for critical decisions so governance stays clear, compliant, and auditable across programs.

## Core Features
- Drag-and-drop board across workflow stages (Intake, Mapping, Approval, Published)
- Search, workstream filter, and sortable views (due date, risk, name)
- Role-based stage transitions for PMO Lead, Functional Owner, and Compliance Reviewer
- Policy validation form for RACI fields with segregation-of-duties checks (R != A)
- Manual work item intake with default governance metadata
- Per-item audit trail updates on save and stage changes
- CSV export for currently filtered records
- Keyboard-focusable cards, labeled controls, and high-contrast dark UI

## Dave's Notes
- Category: Planning
- UI Pattern: Drag-and-Drop
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, state machine, drag-and-drop, CSV export
- Built as a single static HTML file (Tailwind CDN + inline JS) for zero-build deployment on GitHub Pages.
