# Access Request Review Desk — Spec

## User Story
As an IT operations team handling internal access requests,
I want a master-detail review workspace with policy-aware decisions,
so I can route approvals faster while keeping compliance and auditability intact.

## Core Features
- Master-detail queue for access requests (employee, app, role, risk, state)
- Role-based reviewer views (Team Manager, Security Reviewer, IT Admin)
- Policy validation banner for privileged-production and global data-scope requests
- Workflow state changes with validation (`Needs Info`, `Approved`, `Rejected`)
- Mandatory reviewer note before decision (simple quality guardrail)
- Search + status filter + sort (newest, oldest, highest risk)
- CSV export of currently filtered queue
- New request form with input validation and auto-generated risk score
- Audit trail timeline per request

## Dave's Notes
- Category: IT Ops
- Pattern: Master-Detail
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, search/filter/sort, CSV export, audit trail, state machine
- Dark-mode only UI; no build step; static GitHub Pages compatible
