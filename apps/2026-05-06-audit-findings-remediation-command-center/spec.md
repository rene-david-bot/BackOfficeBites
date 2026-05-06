# Audit Findings Remediation Command Center

## User story
As a legal operations lead, I need one dashboard to track audit findings from intake to closure so that overdue controls are escalated early, evidence quality is enforced, and closure decisions are audit-ready.

## Core features
- Role-based workspace context (Auditor, Control Owner, Legal Lead, CISO)
- Search + filter + sort across finding queue
- KPI cards for open risk, due-soon load, and closure progress
- Status chart bars for workload distribution
- State-machine workflow (New, Triage, Remediation, Validation, Closed, Escalated)
- Policy validation gates for validation, closure, and escalation
- Inline remediation package editing (owner, due date, evidence count, exception reason)
- Audit trail logging for status changes, role switches, and CSV exports
- CSV export of current filtered findings

## Dave's notes
- Chosen combo: **Legal × Dashboard+Charts** for domain/pattern variety.
- Dark-mode only, no theme toggle, fully self-contained single-file app.
- Designed to feel like a practical compliance mini-SaaS teams can test immediately.
