# Customer Onboarding Escalation Timeline

## User story
As a Sales Operations lead, I need one place to monitor enterprise onboarding deals, escalate blockers, and route approvals so go-live dates stay on track without losing auditability.

## Core features
- Timeline board across onboarding phases: Contract Signed, Security Review, Integration, Training, Go-Live
- Search, filter, and sort controls for segment, risk level, and go-live urgency
- Role-based action controls (CSM, Solutions Engineer, Legal Ops, Revenue VP)
- Approval workflow with policy-aware routing (high-risk and high-concession escalations)
- Escalation form with validation checks:
  - minimum reason length
  - due date required and not beyond go-live date
  - concession threshold requiring VP role
- Inline state changes for stage progression and approval status
- Audit trail log per account
- CSV export for filtered views

## Dave's notes
- Chose **Sales × Timeline** to avoid repeating recent concepts and keep pattern rotation healthy.
- Dark-mode only, fully static, no build step.
- Included multiple cross-cutting patterns in one compact demo:
  - approval workflow
  - policy validation
  - role-based views
  - audit trail
  - CSV export
  - search + filter + sort
