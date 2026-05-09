# Visitor Access Escort Calendar — Spec

## User Story
As an IT operations team, we need one calendar workspace to schedule visitors, enforce restricted-zone policy rules, and track check-in/check-out actions so audits and security reviews can be completed quickly.

## Core Features
- Weekly visitor calendar grouped by date with searchable visitor cards
- Search + filter + sort by zone, status, risk, time, and company
- Role-based views (Reception Desk, Security Supervisor, Employee Host)
- State machine actions: approve, check-in, check-out, deny
- Policy validation:
  - Data Center and Lab visits require an escort
  - Only Security Supervisor or Host can approve access
  - Check-in requires approved status
  - Check-out requires checked-in status
- Create-visit form with field validation and policy-aware default status
- Audit trail with actor and timestamp
- CSV export of current filtered results

## Dave's Notes
- Category: IT Ops
- UI Pattern: Calendar
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, CSV export, search/filter/sort, state-machine status flow
- Dark-mode only, no theme toggle, static self-contained HTML for GitHub Pages
