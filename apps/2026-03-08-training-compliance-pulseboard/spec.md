# Training Compliance Pulseboard — Spec

## User Story
As an **HR/L&D lead**, I want a single dashboard for mandatory training coverage so I can quickly spot risk, route extension approvals, and keep auditors satisfied.

As a **compliance officer**, I want policy-constrained approvals and a complete action log so exceptions stay controlled and traceable.

## Core Features
- Dashboard cards for compliance rate, overdue training, pending approvals, and average risk
- Department charts for compliance coverage and upcoming deadlines
- Search + filter + sort in a training data grid
- Role-based approval queue:
  - **L&D Admin** can route but not approve
  - **Manager** can approve low-risk requests only
  - **Compliance Officer** can approve all requests
- State-machine behavior for extension requests (Pending → Approved/Rejected)
- Training completion form with validation:
  - completion date required
  - assessment score threshold (>= 70)
  - evidence confirmation required
- Extension request form with validation:
  - requested date required
  - must be later than current due date
  - reason must be meaningful (min length)
- CSV export of the active filtered dataset
- Audit trail showing timestamped user actions
- Responsive dark-mode-only UI

## Demo Data
- 8 seeded employees across Finance, IT Ops, Sales, HR, Legal, and Supply Chain
- Mixed statuses: Compliant, In Progress, Due Soon, Overdue
- 2 pending extension requests with policy threshold differences

## Dave's Notes
- Category: **HR**
- Pattern: **Dashboard+Charts**
- Cross-cutting patterns included:
  - approval workflow
  - policy validation
  - audit trail
  - role-based views
  - search + filter + sort
  - CSV export
  - state machine
- Single-file static implementation (`index.html` with Tailwind CDN + inline JS) for GitHub Pages.
