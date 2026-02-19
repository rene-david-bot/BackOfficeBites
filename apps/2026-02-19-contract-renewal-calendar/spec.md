# Contract Renewal Calendar

## User Story
As a Legal Ops manager, I need a calendar view of upcoming contract renewals so I can prioritize high-risk deals, enforce policy checks, and keep approvals audit-ready before notice windows close.

## Features
- Calendar-based renewal planning with risk badges and monthly KPIs
- Search, filter, and sort by status, owner, value, and risk level
- Detail panel with approval workflow actions (approve, request changes, escalate)
- Policy validation that blocks approval on high-risk renewals missing a security addendum
- Audit trail with notes and status changes
- CSV export of the filtered renewal list

## Dave's Notes
- Dark-mode only, Tailwind CDN, single-page static build.
- Calendar grid is generated in JavaScript to keep data and visuals in sync.
- Approval workflow writes to an in-app audit trail for demo realism.
