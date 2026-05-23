# Invoice Matching Dispute Desk

## User story
As an Accounts Payable analyst, I need a focused dispute workspace to triage invoice mismatches, route approvals by role, and keep an audit trail so payment risk is reduced without breaking policy.

## Features
- Master-detail queue for invoice matching disputes
- Search, filter, and sort controls for fast triage
- Role-based action permissions (AP Analyst, Controller, CFO)
- Policy validation (Controller approval blocked above €1,000 variance)
- Workflow state transitions (approve, reject, escalate, credit note)
- Required decision note validation
- Escalation owner selection for escalated cases
- Real-time KPI cards (open cases, variance at risk, escalated/overdue)
- Audit trail timeline per case
- CSV export of visible queue
- Responsive dark-mode UI, no build step

## Dave's notes
- Category: Finance
- Pattern: Master-Detail
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, audit trail, search+filter+sort, CSV export, state machine
- Built as one self-contained `index.html` with Tailwind CDN and inline JS for GitHub Pages.
