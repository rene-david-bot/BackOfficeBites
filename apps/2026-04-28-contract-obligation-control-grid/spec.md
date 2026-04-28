# Contract Obligation Control Grid

## User story
As a legal operations lead, I want a single grid to track vendor contract obligations so I can prioritize risk, enforce waiver policies, and keep an audit-ready trail of every decision.

## What this demo includes
- Dark-mode Legal **Data Grid** with realistic obligation records
- Search, filter, and sortable columns (due date, risk, status, vendor)
- Role-based view selector (Legal Counsel, Procurement, Compliance Lead)
- Policy validation:
  - only Legal Counsel can move items to **Waived**
  - waived items require a waiver reason (min length)
- Inline status workflow via **Next status** action
- Clause detail panel with recent audit trail
- Review note form with validation
- Quick-add obligation form with required fields validation
- CSV export for filtered records
- KPI cards (overdue, high risk, due soon, waived)

## Dave's notes
- Category: **Legal**
- UI pattern: **Data Grid**
- Cross-cutting patterns used: policy validation, search/filter/sort, role-based views, audit trail, CSV export, state machine actions
- Built as a single static file (`index.html`) with Tailwind CDN + inline JavaScript.
