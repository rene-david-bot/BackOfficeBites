# Asset Checkout Chain-of-Custody Desk

## User Story
As a supply-chain operations lead, I need a single place to validate, approve, issue, and return shared warehouse equipment so that every handoff is policy-compliant and auditable.

## Core Features
- Master-detail workflow with keyboard-focusable request list
- Search, filter, and due-date sorting for active checkout requests
- Role-based actions (Requester, Manager, Storekeeper)
- State machine transitions: Requested → Approved → Checked Out → Returned
- Policy validation (purpose length + mandatory policy acknowledgment)
- Overdue detection for checked-out assets past due date
- Audit trail timeline per request
- CSV export of currently filtered records
- Status distribution mini-chart for operational visibility

## Dave's Notes
- Category: Supply Chain
- UI Pattern: Master-Detail
- Cross-cutting patterns included: approval workflow, audit trail, CSV export, role-based views, policy validation, search/filter/sort, state machine
- Kept fully static (single HTML + inline JS + Tailwind CDN) for GitHub Pages compatibility.
