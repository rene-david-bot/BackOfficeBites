# RACI Builder Review Desk

## User Story
As a PMO or portfolio reviewer, I want to define and approve RACI ownership models for cross-functional initiatives so that accountability is unambiguous before execution starts.

## Core Features
- **Master-detail planning workspace** with initiative queue + deep review panel
- **RACI matrix editor** with per-role assignment controls (R/A/C/I/None)
- **Policy validation engine**:
  - Exactly one `A`
  - At least one `R`
  - Critical items must keep minimum lead time
  - High/Critical items require a consulted governance role
- **Workflow state machine**: Draft → In Review → Approved / Needs Rework
- **Role-based actions**:
  - PMO Analyst / Portfolio Manager can draft + submit
  - Portfolio Manager / Executive Sponsor can approve or request rework
- **Search + filter + sort** across initiatives
- **CSV export** for filtered list handoff
- **Audit trail** of key actions (validation, submission, approval, rework, export, create)
- **Create-initiative form** with input validation

## Dave's Notes
- Built as a single static HTML file (Tailwind CDN + inline JS), no build step.
- Dark-mode only by design.
- Optimized for realistic ERP/PMO governance workflows with responsive layout and keyboard-friendly controls.
- Cross-cutting patterns covered: approval workflow, policy validation, role-based views, search/filter/sort, audit trail, CSV export.
