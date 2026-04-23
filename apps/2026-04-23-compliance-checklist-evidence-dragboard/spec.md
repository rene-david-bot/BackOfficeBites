# Compliance Checklist Evidence Dragboard

## User Story
As a legal operations lead, I need a drag-and-drop workspace for compliance checklist controls so the team can collect required evidence, enforce review policy, and maintain an audit-ready history before sign-off.

## Features
- Multi-lane dragboard: Intake, Needs Evidence, Ready for Review, Approved, Rejected.
- Search, framework filter, status filter, and sorting by due date, severity, or owner.
- Role-based movement rules for Compliance Analyst, Auditor, and Legal Lead.
- Policy validation on transitions (evidence requirements and approval note minimum).
- Detail panel for evidence toggles, review note management, and lane actions.
- Audit trail logging for transitions, evidence updates, and note edits.
- New checklist-item form with validation.
- CSV export of the currently filtered view.

## Dave's Notes
- Pattern: **Drag-and-Drop**
- Category: **Legal**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, state machine, audit trail, CSV export.
- Dark-mode only by design for BackOfficeBites consistency.
