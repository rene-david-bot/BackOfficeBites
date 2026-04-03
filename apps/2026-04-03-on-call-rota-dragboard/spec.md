# On-Call Rota Dragboard

## User story
As an IT operations rota manager, I need to assign and approve on-call coverage quickly while enforcing weekend/P1 policies, so critical services stay covered without violating staffing guardrails.

## Features
- Drag-and-drop board across **Backlog → Proposed → Approved → Escalated**
- Role-based visibility (**Rota Manager**, **Incident Commander**, **Team Lead**)
- Policy validation on moves (e.g., weekend P1 requires certified engineer)
- Search + filter (team, severity) and sortable coverage table
- KPI strip for open shifts, uncovered hours, P1 review count, weekend readiness
- Add-shift form with inline validation and policy pre-checks
- CSV export for handover/reporting
- Rolling audit trail with move decisions and policy-triggered escalations

## Dave's notes
- Pattern: **Drag-and-Drop**
- Domain: **HR / IT Ops staffing**
- Cross-cutting controls included this build: drag-and-drop workflow, role-based views, search/filter/sort, CSV export, policy validation, audit trail
- Dark-mode only by design (no theme toggle)
