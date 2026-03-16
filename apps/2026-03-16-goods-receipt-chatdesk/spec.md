# Goods Receipt Exception Chatdesk — Spec

## User story
As a supply-chain operations team,
we need to triage goods-receipt mismatches in one place,
so we can resolve quantity/PO exceptions quickly,
apply policy rules consistently,
and keep an audit-ready decision trail.

## Core features
- Chat-first triage workspace for each receipt exception
- Search, status filter, and sort (newest/oldest/highest variance)
- Role selector (Warehouse Clerk, QA Reviewer, Supply Chain Lead)
- Policy validation panel:
  - Missing PO = hard block
  - Variance >5% = lead approval required
- State-machine actions:
  - New → Under Review
  - Under Review/New → Approved (policy + role gated)
  - Any non-blocked → Blocked
- Audit trail updates for messages and status transitions
- New exception intake form with validation
- CSV export for current filtered dataset

## Dave's notes
- Domain: Supply Chain
- UI pattern: Chat UI
- Cross-cutting patterns included this build:
  - approval workflow
  - policy validation
  - audit trail
  - role-based views
  - search + filter + sort
  - CSV export
  - state machine
- Built as a single static HTML file with Tailwind CDN + inline JavaScript.
- Dark-mode only (no theme toggle), responsive layout, keyboard-focusable controls.
