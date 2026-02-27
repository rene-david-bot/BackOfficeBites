# RMA Resolution Console

## User story
As a supply chain operations lead, I want a single console to triage RMAs, validate policy exceptions, and route approvals so that returns move quickly without losing audit coverage.

## Features
- Master-detail queue for RMAs with search, filter, and priority sorting.
- Role lens switcher (Agent / Manager / Finance) to surface the right decisions.
- Policy validation checks (high value, late window, missing photos, recall).
- Approval workflow actions and state changes with an audit trail.
- CSV export for downstream reporting.

## Dave's notes
- Dark-mode-only UI with Tailwind CDN and fully client-side state.
- Includes realistic demo data, policy guardrails, and SLA risk awareness.
- Added note validation and audit trail updates for every action.
