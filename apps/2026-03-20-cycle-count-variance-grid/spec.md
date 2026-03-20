# Cycle Count Variance Grid

## User Story
As a **warehouse inventory supervisor**, I need a single workspace to triage cycle-count variances by value impact and due date so I can route approvals quickly, reduce stock inaccuracies, and keep a complete audit trail for compliance.

## Core Features
- **Data grid workflow** with realistic cycle-count variance records across Berlin, Dresden, and Leipzig sites.
- **Search + filter + sort** for SKU, location, status, and priority; sortable by impact, variance, due date, and SKU.
- **Role-based views**:
  - Counter: submit recounts for approval.
  - Supervisor: approve/reject variances from the grid.
  - Auditor: reopen closed cases for independent recount.
- **Approval workflow + state machine** (`open → needs_review → approved/rejected → reopened`).
- **Validated variance review form** requiring recount quantity, ticket reference, and corrective notes.
- **Audit trail panel** capturing approval/rejection/reopen and submission events with UTC timestamps.
- **CSV export** of current filtered rows for ERP/WMS handoff and finance review.
- **Dark-mode responsive UI** with keyboard-friendly controls and labeled form fields.

## Dave's Notes
- Chose **Supply Chain × Data Grid** to keep pattern/domain rotation fresh and avoid recent concept repetition.
- Focused this build on operational realism: value exposure visibility, priority triage, and audit-safe actions.
- Kept everything static and self-contained (single HTML + inline JS + Tailwind CDN), so it runs on GitHub Pages without a build pipeline.
