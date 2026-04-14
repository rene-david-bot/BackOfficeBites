# OKR Confidence Control Grid

## User story
As a PMO lead, I need a single control grid for portfolio OKRs so I can detect confidence drops early, route rebaseline requests for approval, and keep an audit-ready decision trail.

## Features
- Dark-mode planning data grid with realistic OKR portfolio data
- Role-based views (PMO Analyst, Exec Sponsor, Finance Partner)
- Search, filter, and sortable columns (confidence, 2-week delta, budget risk)
- Policy validation:
  - confidence drop >15 points triggers approval routing
  - confidence <50 and budget risk >€100k requires approval
  - short mitigation plans are blocked
- Rebaseline request form with validation and state transition to Pending Approval
- Row actions: route approval, approve, set watchlist/critical
- KPI cards for pending approvals, critical objectives, policy triggers, and average confidence
- CSV export of the currently filtered view
- Audit trail feed for every material action

## Dave's notes
- Domain: Planning
- Pattern: Data Grid
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search/filter/sort, CSV export, audit trail, state machine transitions
- Static, self-contained app with Tailwind CDN and inline JavaScript
