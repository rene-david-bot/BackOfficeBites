# Skills Matrix Gap Dashboard

## User Story
As an HR business partner, I need a single dashboard to detect critical capability gaps by team, route training requests through approval, and keep an auditable action log so workforce risk can be reduced before quarter-end.

## Core Features
- Team coverage KPI cards (coverage %, critical gaps, open requests, expiring certs)
- Two charts:
  - Team coverage vs 80% target
  - Gap severity distribution (critical / moderate / healthy)
- Search + filter + sort matrix table for employees, roles, teams, and score bands
- Role-based views (HRBP, Team Lead, L&D) that adjust row-level actions
- Validated training request form with approval workflow state (`Pending Manager Approval`)
- CSV export of currently filtered rows
- Audit trail feed for every critical user action (view change, request submit, export)

## Dave's Notes
- Pattern: **Dashboard+Charts**
- Category: **HR**
- Cross-cutting patterns included: approval workflow, audit trail, search/filter/sort, CSV export, role-based views, charts
- Dark-mode only as requested for BackOfficeBites demos
- Built as one static self-contained file (Tailwind CDN + inline JavaScript)
