# Audit Findings Workbench

## User Story
As a compliance or legal operations lead, I need a single workspace to triage audit findings, apply remediation updates, and manage risk acceptance approvals so we can close findings on time with full evidence.

## Core Features
- Master-detail queue for audit findings with realistic control/audit data
- Search + filter + sort controls (status, severity, text query, risk/due-date ordering)
- Workflow action form with validation:
  - minimum action note length
  - allowed state transitions only
  - accepted-risk gate requiring Legal Counsel role + approval reference
- Role-based behavior:
  - Legal Counsel can approve pending risk directly
  - other roles cannot set accepted risk without policy checks
- KPI strip showing status distribution (lightweight chart bars)
- CSV export for currently filtered findings
- Embedded audit trail that records each state change and assignment update

## State Machine
- Open → In Review
- In Review → Remediated
- In Review → Pending Approval
- Pending Approval → Accepted Risk (Legal Counsel only)
- Remediated ↔ In Review (reopen if evidence insufficient)

## Dave's Notes
- Domain: **Legal / Compliance**
- Pattern: **Master-Detail**
- Cross-cutting patterns included today: approval workflow, policy validation, audit trail, search/filter/sort, CSV export, state machine
- Dark-mode only by design (no theme toggle)
