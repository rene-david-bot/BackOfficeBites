# Risk Register Mitigation Pulseboard - Spec

## User Story
As a planning operations lead, I want a dashboard-first risk register where teams can intake risks, move them through review and approval, and track mitigation progress so governance and budget decisions stay auditable.

## Core Workflow
1. Monitor portfolio KPIs and heatmap bars for risk severity and status distribution.
2. Filter, search, and sort the queue to prioritize high-score and near-due risks.
3. Open a selected risk in detail, then apply role-based workflow transitions.
4. Intake new risks with policy validation on due-date horizon, scoring inputs, and mitigation quality.
5. Export filtered queue data as CSV and keep an action-by-action audit trail.

## Features
- Dark-mode dashboard with KPI cards + lightweight chart bars
- Search/filter/sort controls (severity, status, team, free-text, score/due sorting)
- Keyboard-selectable queue rows with detail pane
- Role-based state machine:
  - Draft -> Needs Review (Analyst)
  - Needs Review -> Pending Approval (Risk Owner)
  - Pending Approval -> Approved (PMO Director)
  - Approved -> Mitigating -> Closed (Risk Owner)
- Policy validation rules:
  - Critical/High risks must have due date within 45 days
  - Mitigation plan minimum length check
  - Close requires approved budget >= 50% of request
- CSV export and persistent in-memory audit trail feed

## Dave's Notes
- Domain: Planning
- UI Pattern: Dashboard+Charts
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, state machine, search/filter/sort, charts, audit trail, CSV export
- Built as one static HTML file (Tailwind CDN + inline JavaScript), no build step
