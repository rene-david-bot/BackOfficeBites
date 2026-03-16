# Contract Obligation Kanban — Spec

## User story
As a legal/compliance operations lead, I need a fast board view of contract obligations so I can move clauses from intake to signature, enforce policy gates, and leave a clear audit trail for internal controls.

## Core features
- Kanban workflow across four states: Intake → Legal Review → Business Approval → Signed
- Drag-and-drop movement plus explicit action buttons (advance/send back)
- Role-based permissions:
  - Legal Counsel: can progress and rework drafts, but not finalize signature
  - Business Owner: can approve/send back at Business Approval stage
  - Compliance Lead: full transition permissions
  - Auditor: read-only
- Policy validation gate before final signing:
  - MSA linked
  - DPA signed
  - Security review complete
  - Budget approved
- Search/filter/sort controls for vendor, owner, risk, region, due date/value
- KPI cards for open load, high-risk exposure, due-soon workload, and signed volume
- CSV export of the currently filtered board slice
- Audit trail panel for role changes, validation updates, transitions, and exports

## Dave's notes
- Domain: **Legal**
- Pattern: **Kanban**
- Cross-cutting patterns included:
  - approval workflow
  - policy validation gate
  - role-based views
  - search + filter + sort
  - CSV export
  - audit trail
  - state machine transitions
- Dark-mode only, responsive, static single-file implementation (Tailwind CDN + inline JS)
