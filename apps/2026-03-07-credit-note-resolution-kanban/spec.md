# Credit Note Resolution Kanban — Spec

## User Story
As an **AR specialist**, I want to intake and triage credit-note requests quickly so exceptions do not delay month-end close.

As a **controller/finance director**, I want policy-aware approvals with clear thresholds so high-risk notes are escalated with full auditability.

## Core Features
- Kanban workflow with drag-and-drop lanes:
  - Intake → Policy Review → Approved → Posted (+ Rejected)
- Search + filter + sort across case/customer/owner/region/reason
- Role-based controls:
  - AR Specialist
  - Controller
  - Finance Director
- State-machine rules for transitions (including approval thresholds)
- Form intake with validation (customer, amount, owner, invoice format, aging)
- Policy validation and risk scoring:
  - amount thresholds
  - aging risk bump
  - missing evidence penalty
- Audit trail with timestamped actions and optional notes
- CSV export of current filtered board
- Responsive, dark-mode-only Tailwind UI

## Demo Data
- 5 seeded credit-note cases spanning all key statuses
- Mix of standard and high-value exception scenarios

## Dave's Notes
- Category: **Finance**
- Pattern: **Kanban**
- Cross-cutting patterns included this round:
  - approval workflow
  - policy validation
  - audit trail
  - search + filter + sort
  - role-based views
  - drag-and-drop
  - CSV export
- Kept as one self-contained static `index.html` (Tailwind CDN + inline JS) for GitHub Pages compatibility.
