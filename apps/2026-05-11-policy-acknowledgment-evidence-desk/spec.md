# Policy Acknowledgment Evidence Desk

## User story
As a compliance reviewer, I need one place to monitor mandatory policy acknowledgments, validate extension requests against policy limits, and keep an audit-ready evidence history.

## Core features
- Master-detail layout with searchable/sortable acknowledgment grid
- Role views (Reviewer, HRBP, Auditor) with read-only auditor mode
- Status workflow actions: acknowledge, extension request, extension approval, waiver flag
- Policy validation rules for extension windows (critical vs standard)
- Evidence capture required before acknowledgment
- Auto-updating audit trail on every state change
- CSV export for filtered record set

## Dave's notes
- Built dark-mode only per Daily Demo rule set
- Added keyboard row selection support (Enter/Space)
- Included both operational KPIs and detail-level controls to mimic real compliance tooling
