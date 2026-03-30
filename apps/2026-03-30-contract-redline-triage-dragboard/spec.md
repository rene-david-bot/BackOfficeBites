# Contract Redline Triage Dragboard — Spec

## User Story
As a legal operations lead, I want to triage contract redlines through a stage-based workflow so that high-risk agreements are approved correctly, signed on time, and fully auditable.

## Core Workflow
1. Intake new contracts with required metadata (vendor, type, value, risk, target signature date).
2. Move contracts stage-by-stage across Intake → Legal Review → Negotiation → Approval → Executed.
3. Enforce policy guardrails for high-risk contracts (legal + finance approvals required before approval/execution).
4. Export currently filtered view to CSV for review meetings.

## Features
- Drag-and-drop board with keyboard fallback (`Alt + ← / →`) for accessibility.
- Search, risk filter, and multi-mode sorting (due date, value, risk severity).
- Role-based approvals:
  - Legal Counsel can grant/revoke legal approval.
  - Finance Controller can grant/revoke finance approval.
  - Procurement Lead can triage but not approve.
- State machine transition rules (adjacent-stage moves only).
- Policy validation with inline notifications when blocked.
- Audit trail list with timestamped activity feed.
- KPI cards for visible items, high-risk pending approvals, due-soon contracts, and executed count.
- Dark-mode-only responsive UI; no build step, single static `index.html`.

## Dave's Notes
- Domain: Legal
- Pattern: Drag-and-Drop
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search+filter+sort, audit trail, CSV export, state machine.
- Demo data reflects realistic enterprise contract portfolio values and timelines.
