# Compliance Checklist Remediation Wizard — Spec

## User Story
As a legal/compliance lead, I need a guided workflow to scope controls, assign remediation actions, enforce policy constraints, and route the plan for approval so that compliance findings are closed with clear accountability.

## Core Features
- 4-step wizard flow:
  1. Scope setup (framework, audit window, approver)
  2. Control scoping + status updates
  3. Remediation planning per control (owner, due date, evidence, notes)
  4. Review + submission actions
- Search, severity filter, and sorting on control inventory.
- State changes for control statuses (Fail / At Risk / Pass).
- Policy validation:
  - Required scope metadata before progressing
  - At least one control in scope
  - Failed controls require owner + due date + evidence
  - Critical failed controls must have due date within 14 days
- Workflow state machine:
  - Draft → In Legal Review → Approved / Changes Requested
- Role-aware approval checks (Legal Counsel / CISO approval).
- Audit trail log for all major interactions.
- CSV export for scoped remediation plan.

## Accessibility & UX
- Dark-mode-only responsive layout.
- Labeled inputs and semantic table structure.
- Keyboard shortcuts for step navigation (`Alt + Left/Right`).
- High-contrast status indicators and readable spacing.

## Dave’s Notes
- Category × Pattern: **Legal × Wizard** (fresh combo in recent 30 entries).
- Cross-cutting patterns included: approval workflow, audit trail, policy validation, search/filter/sort, CSV export.
- Kept as one static `index.html` with Tailwind CDN and inline JS for GitHub Pages compatibility.
