# Quote Approval Wizard — Spec

## User Story
As a sales operations manager, I want reps to build quotes in a guided wizard with policy checks so that non-compliant discounts are routed for approval and every state change is auditable.

## Core Features
- **3-step wizard**: deal context → line items → review/submit
- **Policy validation**: role-based discount caps (AE/Manager/VP)
- **Approval workflow**: auto-routes quotes to `pending_approval` when policy/risk thresholds are hit
- **State machine**: Draft → Pending Approval → Approved → Sent (or Rejected)
- **Queue operations**: search, filter by status, sort by newest/value
- **Audit trail**: event log for create/approve/reject/send/export actions
- **CSV export**: filtered queue export for downstream analysis
- **Dark-mode only responsive UI** with keyboard-friendly form controls and labels

## Dave's Notes
- Chosen combo for variety: **Sales × Wizard** (not used in recent streak).
- Added realistic SaaS quote lines (license, add-on, support, implementation).
- Included multiple cross-cutting controls in one demo: approval routing, policy validation, audit trail, search/filter/sort, CSV export, and explicit state transitions.
- No build tooling required; static single-file app for GitHub Pages.
