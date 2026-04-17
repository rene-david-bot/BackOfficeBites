# Access Request Entitlement Review Desk - Spec

## User Story
As an IT operations access governance analyst, I want a master-detail review desk for entitlement requests so I can enforce approval policy, prevent SoD conflicts, and keep an auditable handoff from manager review through provisioning.

## Core Workflow
1. Triage incoming access requests in a searchable, sortable queue.
2. Open each request in a detail pane to inspect justification, risk, SoD findings, and controls.
3. Apply role-based transitions (Manager -> Security -> IAM) with guardrail checks.
4. Submit new requests through a validated intake form.
5. Export filtered request data to CSV and keep an audit trail of all major actions.

## Features
- Dark-mode master-detail layout with keyboard-selectable request rows
- KPI cards (pending approvals, high-risk open items, approved awaiting provisioning, average turnaround)
- Queue filters for status/system/risk plus free-text search and sorting
- Role-based state machine actions:
  - Pending Manager -> Pending Security (Manager)
  - Pending Security -> Approved/Rejected (Security Admin)
  - Approved -> Provisioned (IAM Ops)
- Policy validation for minimum business justification, ticket format, and mandatory compensating controls for high-risk submissions
- New request form with realistic IAM fields and validation feedback
- Audit trail feed and CSV export for compliance reporting

## Dave's Notes
- Domain: IT Ops
- UI Pattern: Master-Detail
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export, state machine
- Built as a single static HTML file with Tailwind CDN and inline JavaScript
