# Asset Checkout Console

## User story
As an asset manager, I want to track who has which high-value equipment, enforce checkout policy, and maintain an immutable audit trail so that I can reduce loss, improve accountability, and stay audit-ready.

## Features
- Master-detail layout with searchable, filterable, sortable asset list
- Checkout, check-in, reserve, and maintenance state changes
- Policy validation: approval required for checkouts > 14 days or value ≥ €5,000
- Audit trail log with timestamped actions
- CSV export of the filtered asset list
- KPI summary for availability, overdue items, and approvals
- Dark-mode toggle and responsive layout

## Dave's notes
- Demo data is static and updates in-memory for UI realism.
- Cross-cutting patterns: approval workflow, audit trail, search/filter/sort, CSV export.
- Built as a single HTML file with Tailwind CDN — no build step required.
