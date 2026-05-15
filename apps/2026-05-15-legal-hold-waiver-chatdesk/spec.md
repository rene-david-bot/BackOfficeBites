# Legal Hold Waiver Chatdesk

## User story
As a legal operations reviewer, I want a chat-style workspace to evaluate legal hold waiver requests, enforce retention policy, and keep an auditable record of every decision.

## Features
- Dark-mode-only responsive legal chatdesk with searchable waiver queue
- Workflow states:
  - Draft Intake
  - Counsel Review
  - Compliance Approval
  - Approved
  - Rejected
- Search, status filter, region filter, and sorting controls
- Role-based views:
  - Requestor
  - Legal Analyst
  - Compliance Officer
  - General Counsel
  - Auditor (read-only)
- Policy validation checks for mitigation plan, hold notice, legal/compliance acknowledgments, and retention minimums
- State-machine actions for counsel routing, compliance routing, approval, and rejection
- Per-request discussion thread with posted updates
- Editable policy package controls inside the detail panel
- New waiver intake form with validation and seeded risk scoring
- KPI strip for queue health and policy-blocked items
- CSV export of the filtered request list
- Full audit trail for transitions and updates

## Dave's notes
- Category: Legal
- Pattern: Chat UI
- Cross-cutting patterns included: approval workflow, role-based views, policy validation, search/filter/sort, state machine, audit trail, CSV export
- Built as a single static `index.html` with Tailwind CDN and inline JavaScript for GitHub Pages
