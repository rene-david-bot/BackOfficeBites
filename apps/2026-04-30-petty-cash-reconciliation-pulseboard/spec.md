# Petty Cash Reconciliation Pulseboard

## User Story
As a finance controller, I need one dark-mode workspace to reconcile petty cash across branches, route exceptions for review, and keep an audit-ready history so monthly close can happen without manual spreadsheet back-and-forth.

## Core Features
- Dashboard cards for net variance and case mix (open/review/approved)
- Branch variance chart for quick anomaly spotting
- Search + filter + sortable data grid for reconciliation cases
- Role-based actions (Controller, Auditor, Cashier read-only)
- Adjustment intake form with validation guardrails
- Status transitions (Open, Under Review, Approved, Needs Correction)
- Audit trail feed for every key decision
- CSV export of current filtered view

## Dave's Notes
- Category: Finance
- UI Pattern: Dashboard+Charts
- Cross-cutting patterns used: approval workflow, audit trail, role-based views, search/filter/sort, policy validation, CSV export, state machine
- Kept single-file static architecture (Tailwind CDN + inline JavaScript) for GitHub Pages compatibility.
