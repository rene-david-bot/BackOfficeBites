# Invoice Dispute Timeline Hub

## User Story
Accounts Payable leads need to track invoice disputes across vendors, validate policy compliance, and move disputes through approvals before payment deadlines expire.

## Features
- Timeline-first view showing dispute events, SLA dates, and status progression.
- Master queue with search, filters, and sorting by SLA or amount.
- Role-based action controls (AP Lead, Controller, Legal) with approval workflow actions.
- Policy validation checks (credit limits, document availability, SLA health).
- Inline audit trail updates when actions or notes are added.
- CSV export of the active dispute queue.

## Dave's Notes
- Domain: Finance · Pattern: Timeline.
- Built for dark-mode only with Tailwind CDN and no build step.
- Cross-cutting patterns included: approval workflow, audit trail, policy validation, search+filter+sort, CSV export.
