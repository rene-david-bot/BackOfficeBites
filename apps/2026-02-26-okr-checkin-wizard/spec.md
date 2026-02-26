# OKR Check-in Wizard

## User Story
As a planning lead, I need a guided OKR check-in workflow that captures progress, blockers, and confidence so that quarterly updates stay consistent and approvals happen quickly.

## Core Features
- Wizard-style check-in with progress slider, summary, blockers, and next actions.
- Policy validation requiring blockers when progress falls below 40%.
- Role-based manager view with an approval queue for low-confidence or steep progress drops.
- Portfolio search, filter, and sorting for active OKRs.
- Audit trail capturing submissions and approval decisions.
- CSV export of the OKR portfolio.

## Dave's Notes
- Dark-mode only using Tailwind CDN and a single static HTML file.
- Demo data shows realistic OKR progress deltas and confidence levels.
- Approval workflow updates audit trail entries for traceability.
