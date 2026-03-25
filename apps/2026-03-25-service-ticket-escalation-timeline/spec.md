# Service Ticket Escalation Timeline

## User Story
As a Sales Ops escalation manager, I need to track high-impact service tickets in a timeline-first view so I can protect ARR, enforce SLA policy, and route concessions through the right approval path.

## Core Features
- Timeline-first ticket detail view with latest escalation events
- Search + filter + sort across queue, severity, SLA, and ARR risk
- State machine transitions: New → Triage → Escalated → Awaiting Approval → Resolved
- Policy validation for goodwill credits (amount threshold + approver eligibility)
- Audit trail logging for updates, approvals, and state transitions
- CSV export of filtered queue for downstream reporting

## Dave's Notes
- **Domain:** Sales
- **Pattern:** Timeline
- Built as a single self-contained static HTML app (Tailwind CDN + inline JavaScript)
- Dark-mode-only UI, responsive layout, keyboard-focusable controls
- Demo data simulates enterprise ticket pressure with realistic SLA and revenue impact context
