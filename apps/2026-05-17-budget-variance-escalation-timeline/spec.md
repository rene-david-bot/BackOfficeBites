# Budget Variance Escalation Timeline

## User story
As a finance controller, I need to track budget overruns through a timeline-based approval flow so I can enforce policy, escalate high-risk variances, and document mitigation actions for audit.

## What this demo includes
- Timeline-style variance case tracking across stages (Investigate → Controller Review → CFO Approval → Execution → Closed)
- Search, department/status filters, and sort controls
- Role-based action controls (Budget Analyst, Finance Controller, CFO, Department Owner, Auditor)
- Policy validation flags for threshold breaches
- Interactive approval actions (advance, return, reject) that mutate state
- Inline audit timeline on every record
- New-case intake form with validation rules
- CSV export of current filtered view
- Dark-mode responsive layout with accessible form labels and keyboard-friendly case selection

## Dave's notes
- Category: Finance
- UI pattern: Timeline
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search+filter+sort, CSV export, state-machine transitions
- Built as a single static `index.html` with Tailwind CDN and inline JavaScript (no build step)
