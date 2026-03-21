# License Renewal Calendar — Spec

## User Story
As an IT Ops renewal coordinator, I need a calendar-centric workspace to track upcoming SaaS license renewals, apply policy checks, route approvals, and export audit-ready records so procurement and risk teams can act before deadlines.

## Core Features
- **Calendar view (dark mode only):** month grid with renewal density and quick vendor previews per day.
- **Search + filter + sort:** vendor/product text search, team filter, status filter, month switch, and sort by date/cost/risk/vendor.
- **Role-based actions:**
  - Renewal Coordinator / IT Manager: submit updates for approval
  - IT Manager / Finance Controller: approve
  - Security Reviewer / IT Manager: escalate
  - Finance Controller: mark renewed
- **Policy validation:** blocks approval when high-risk vendor lacks SOC2 evidence or when high-value contract lacks finance role.
- **State machine flow:** `draft -> pending_approval -> approved -> renewed` with alternate paths to `escalated` and `blocked`.
- **Audit trail:** timestamped action feed with actor + action details.
- **CSV export:** filtered renewal dataset export for procurement handoff.

## Demo Data
- 12 realistic SaaS renewals across March/April 2026.
- Includes annual contract values, owner, seats, risk scores, SOC2 status, and auto-renew flags.

## Dave's Notes
- Chose **IT Ops × Calendar** to keep category/pattern rotation fresh.
- Optimized for quick daily review: pick date -> inspect renewals -> act from workbench.
- Kept as a single static `index.html` with Tailwind CDN and inline JS for GitHub Pages compatibility.
