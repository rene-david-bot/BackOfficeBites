# Goods Receipt Dispute Timeline Hub

## User Story
As a supply-chain operations lead, I need a timeline-based dispute hub for goods receipt mismatches so my team can investigate, escalate, approve financial impact, and close cases with a full audit trail.

## Features
- Timeline workflow stages: Received, Investigation, Carrier Review, Finance Approval, Closed
- Search, site filter, and sort (newest, variance value, severity)
- Role-based actions (Dock Supervisor, QA Lead, Finance Controller)
- Policy validation before closure for high-value and critical disputes
- Detailed per-case audit trail for all state changes
- Intake form with validation for required logistics and financial data
- CSV export for filtered case lists
- Responsive dark-mode-only interface (no theme toggle)

## Dave's Notes
- Domain: Supply Chain
- UI pattern: Timeline
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, state machine, CSV export
- Built as a single static `index.html` using Tailwind CDN + inline JavaScript for GitHub Pages.
