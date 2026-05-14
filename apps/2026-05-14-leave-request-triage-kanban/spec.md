# Leave Request Triage Kanban

## User story
As an HR operations lead, I want a Kanban workspace to triage leave requests, enforce approval policy, and keep an auditable record of status changes.

## Features
- Dark-mode-only responsive Kanban board with five workflow stages:
  - Pending Review
  - Manager Approval
  - HR Validation
  - Approved
  - Rejected
- Search, team filter, leave-type filter, and sorting controls
- Role-based views:
  - People Manager
  - HR Coordinator
  - Auditor (read-only)
- Policy validation gates for long leave, parental leave, and extended sick leave
- Drag-and-drop plus keyboard card movement (arrow keys)
- Detail panel with status actions and per-request audit trail
- New leave-request intake form with validation
- KPI strip for pending, policy-gated, approved, and high-priority requests
- CSV export of the current filtered view

## Dave's notes
- Category: HR
- Pattern: Kanban
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, state changes, drag-and-drop, CSV export
- Built as one static `index.html` with Tailwind CDN and inline JavaScript for GitHub Pages compatibility
