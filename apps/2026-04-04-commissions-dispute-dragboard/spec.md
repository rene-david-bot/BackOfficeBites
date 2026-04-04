# Commissions Dispute Dragboard — Spec

## User story
As a sales operations lead, I want to triage commission disputes in a drag-and-drop workflow so that payout decisions are resolved quickly with role-based policy controls and a complete audit trail.

## Core workflow
1. Filter disputes by region, risk level, and free-text search.
2. Drag dispute cards across workflow stages (`Intake → Manager Review → Finance Approval → Resolved`).
3. Open a dispute in the resolution desk and apply a formal decision.
4. Enforce policy checks for high-value approvals and required decision notes.
5. Export filtered disputes to CSV for payroll and finance sync.

## Features shipped
- **Drag-and-drop board** with four dispute resolution stages
- **Role-based views/actions** (`Sales Ops`, `Regional Manager`, `Finance Controller`)
- **Policy validation**
  - decision notes required (min length)
  - payout adjustment required for approval decisions
  - full approvals above €15k restricted to Finance Controller
  - invalid state transitions blocked by workflow rules
- **State machine transitions** with automatic timestamp updates
- **Search + filter + sort** controls
- **Audit trail** stream for move/decision/export activity
- **CSV export** for current filtered slice

## Demo data
- 8 disputes across DACH, UKI, Nordics, Iberia, France, and Benelux
- Mixed dispute sizes, aging profiles, and stages to exercise all workflow paths

## Dave's notes
- Built as a single static `index.html` using Tailwind CDN + inline JavaScript.
- Dark-mode only, no build step, GitHub Pages ready.
- Includes keyboard-selectable cards (`tab + enter`) for basic accessibility.
