# Renewal Forecast Risk Grid

## User Story
As a RevOps stakeholder, I need a fast, policy-aware renewal grid so I can identify risky renewals, control discount exceptions, and keep an audit trail of approval decisions before quarter close.

## Core Features
- **Sales Data Grid pattern** with sorting, filtering, and free-text search.
- **Role-based policy view** (Sales Rep, RevOps Manager, VP Sales) with dynamic discount caps.
- **State-machine transitions** for renewal stages: Draft -> Manager Review -> VP Approval -> Approved -> Scheduled.
- **Approval workflow** for out-of-policy discount requests.
- **Audit trail panel** capturing all key actions and rationale.
- **CSV export** for filtered rows.
- **Dark-mode only UI**, responsive layout, keyboard-accessible row selection.

## Demo Data
- 6 renewal opportunities across DACH, Nordics, UKI, Benelux.
- ARR values from €76k to €245k.
- Risk levels (Low/Medium/High), stage status, and discount requests.

## Validation Rules
- Reason text is required for all updates.
- Discount range must remain 0-30%.
- Users cannot save out-of-policy discounts unless exception is approved by authorized role.

## Dave's Notes
- Chosen combo: **Sales × Data Grid** for variety versus recent demos.
- Cross-cutting patterns included: approval workflow, role-based views, policy validation, state machine, audit trail, search/filter/sort, CSV export.
- Built as a single static HTML file with Tailwind CDN and inline JavaScript, no build step.
