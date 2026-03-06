# Visitor Access Intake Wizard — Spec

## User Story
As a **security desk operator**, I want a guided wizard for visitor pre-registration so that policy checks are applied before anyone arrives on site.

As a **facilities/compliance approver**, I want to review a prioritized queue, approve/deny requests, and maintain an audit trail for every decision.

## Core Features
- 4-step wizard (identity → visit details → compliance checks → review)
- Built-in policy validation:
  - Restricted vendor hard block
  - Secure zone requires compliance approval
  - Device declaration + missing NDA increases risk
  - After-hours escort warning
- Queue with search + filter + sort
- Role-based views (Security Desk, Facilities Lead, Compliance)
- State machine actions (Approve, Check In, Deny)
- Audit trail logging with timestamped notes
- CSV export of current filtered queue
- Responsive, dark-mode-only Tailwind UI

## Demo Data
- Includes 3 seeded requests:
  - pending secure-zone review
  - approved service visit
  - blocked vendor request

## Dave's Notes
- Category: **IT Ops**
- Pattern: **Wizard**
- Cross-cutting patterns included this round:
  - policy validation
  - approval workflow
  - audit trail
  - search + filter + sort
  - role-based views
  - CSV export
- Kept everything in one static `index.html` with inline JS so it runs directly on GitHub Pages.
