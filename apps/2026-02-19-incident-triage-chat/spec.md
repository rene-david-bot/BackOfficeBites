# Incident Triage Chatdesk

## User story
As an IT operations dispatcher, I want a real-time incident chat desk that connects queue triage with approvals and audit trails so I can coordinate response and close incidents with policy compliance.

## Core features
- Role-based controls for Dispatcher, Analyst, and Approver actions
- Incident queue with search, filter, and SLA/priority sorting
- Live chat bridge per incident with message logging
- Approval workflow: request approval → approve mitigation → resolve
- Policy validation checklist required before closure
- Auto-updated audit trail for every action
- CSV export of the current queue view

## Dave's notes
- Dark-mode only UI with responsive layout and accessibility-friendly labels
- Realistic incident data and action feedback baked into the demo state
- Built as a single static HTML file using Tailwind CDN and vanilla JS
