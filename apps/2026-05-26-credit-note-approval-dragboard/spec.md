# Credit Note Approval Dragboard — Spec

## User story
As a finance operations analyst, I want to route credit notes through a controlled workflow so that high-value adjustments are validated, approved by the right role, and posted on time with a clear audit trail.

## Core features
- Drag-and-drop workflow across **Draft → Review → Approved → Posted**
- **Role-based stage controls** (Analyst, Controller, Treasury)
- **Policy validation**
  - reason text minimum length
  - attachment check mandatory above €10,000
  - CFO acknowledgment mandatory above €25,000
- Search, region filter, and sort controls
- Side-panel edit form with inline validation
- Audit trail log per credit note
- CSV export for visible rows
- Quick-add action to create a new draft note

## Dave's notes
- Pattern: **Drag-and-Drop**
- Category: **Finance**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search+filter+sort, audit trail, CSV export, state machine
- Built as a single self-contained `index.html` (Tailwind CDN + inline JS), dark-mode only, responsive, static-host friendly.
