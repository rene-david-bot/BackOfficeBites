# Incident Postmortem Timeline Hub - Spec

## User Story
As an IT Ops leadership team, we need a timeline-first workspace to move incidents from report to closure with policy-gated postmortem approvals so that high-impact events are resolved and auditable.

## Core Features
- Timeline feed of incidents with severity cues, stage badges, and keyboard-selectable cards
- Search, filter, and sort controls (service, severity, state, free text, timeline order)
- Role-based workflow transitions for Incident Commander, SRE Manager, and Ops Director
- Postmortem detail form with validation for summary quality, review timing, action-item coverage, and closure notes
- Policy rules for approval and closure (root-cause evidence, action count threshold, critical-incident comms)
- Inline audit trail with timestamped state and save events
- CSV export of current filtered incident view
- New-incident intake action for fast simulation

## Dave's Notes
- Category: IT Ops
- Pattern: Timeline
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, state machine, CSV export
- Dark-mode only and self-contained static HTML (Tailwind CDN + inline JS)
