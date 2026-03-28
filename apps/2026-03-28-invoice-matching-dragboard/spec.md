# Invoice Matching Dragboard

## User Story
As an AP operations analyst, I need to move three-way match exceptions through a controlled workflow so I can resolve mismatches quickly without violating finance policy.

## Core Features
- Drag-and-drop board for invoice matching exceptions across four workflow states:
  - Unmatched
  - Investigating
  - Ready for Approval
  - Approved for Posting
- Realistic finance exception data (invoice, PO, GRN, variance, due date, amount, risk)
- Search, risk filter, status filter, and amount/variance/date sorting
- Role switch (`AP Analyst`, `AP Lead`, `Finance Controller`) with policy-aware approvals
- Policy validation rules:
  - Variance >1.5% cannot move to `Ready for Approval` by AP Analyst
  - Variance >3.0% blocks posting approval
  - Missing supporting documents blocks posting approval
  - Role-based approval amount limits (Analyst €75k, Lead €150k, Controller €250k)
- State-machine enforced transitions (no skipping workflow steps)
- Detail panel with selected exception context and editable audit notes
- Form to create new exceptions with validation and duplicate invoice check
- CSV export of the currently filtered queue

## Dave's Notes
- Category: Finance
- Pattern: Drag-and-Drop
- Cross-cutting patterns used: approval workflow, policy validation, state machine, role-based views, search+filter+sort, audit trail, CSV export
- Dark-mode only, static-file compatible, and ready for GitHub Pages.
