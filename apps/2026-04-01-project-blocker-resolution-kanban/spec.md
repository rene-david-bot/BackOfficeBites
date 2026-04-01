# Project Blocker Resolution Kanban — Spec

## User story
As a PMO lead, I need a single board to triage project blockers, route policy-sensitive risks to executive approval, and close items with a full audit trail so release governance stays predictable.

## Core features
- Kanban board with four states: Intake, Analysis, Approval, Done
- Drag-and-drop + button transitions with state-machine policy checks
- Role-based view modes: PMO Lead, Team Lead, Exec Approver
- Policy validation rule: critical blockers or impact >5 days require executive approval
- Approval queue with approve/reject actions
- Search + filter + sort controls (title/owner/squad, severity, squad, due/impact/severity)
- New blocker intake form with validation (title length, owner, impact range, no past due date)
- Audit trail log for moves, approvals, and policy denials
- CSV export for current filtered view

## Dave's notes
- Domain: Planning
- UI pattern: Kanban
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, role-based views, search/filter/sort, drag-and-drop, state machine, CSV export
- Dark-mode only (no theme toggle)
- Static single-file app (Tailwind CDN + inline JavaScript), GitHub Pages ready
