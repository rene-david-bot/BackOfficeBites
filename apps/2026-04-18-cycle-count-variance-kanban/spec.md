# Cycle Count Variance Kanban - Spec

## User story
As a supply chain operations team, we need to triage inventory cycle-count variances through investigation, approval, and financial posting so that stock adjustments are accurate, controlled, and audit-ready.

## Core workflow
1. Variance case is created from a count mismatch (expected vs counted).
2. Case starts in **New Variance**.
3. Operations moves case to **Investigating** and captures root cause + correction action.
4. Supervisor sends case to **Pending Approval**.
5. Finance Controller posts the adjustment to **Posted** with approval code.

## Features
- Dark-mode responsive Kanban board with drag-and-drop stages
- Role-based workflow controls (Counter, Supervisor, Finance Controller)
- Policy validation rules before stage transitions
- Search, filter, and sort across active cases
- Case detail editor for assignee, root cause, correction action, approval code
- New variance form with validation (SKU format, quantity mismatch, cost checks)
- Risk scoring based on quantity and value impact
- Register table view synchronized with board data
- CSV export for filtered register rows
- Audit trail feed for key workflow actions

## Policy guardrails
- Only Supervisor can submit investigations for approval.
- Root cause and correction action are required before approval.
- Only Finance Controller can post inventory adjustments.
- Posting requires an approval code (min. 4 chars).

## Demo data
- Warehouses: WH-DE-01, WH-DE-02, WH-PL-01, WH-NL-01
- Seeded with realistic high/medium-risk cycle-count cases across multiple bins and SKUs

## Dave's notes
- Pattern used: **Kanban**
- Category used: **Supply Chain**
- Cross-cutting patterns included: approval workflow, policy validation, audit trail, CSV export, search/filter/sort, drag-and-drop
- No build step, single static HTML with Tailwind CDN and inline JavaScript
