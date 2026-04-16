# Contract Obligation Deadline Calendar - Spec

## User Story
As a legal operations analyst, I want a deadline calendar for contract obligations so I can track due dates, escalate risky items, and keep an auditable workflow across legal and compliance teams.

## Core Workflow
1. Monitor monthly obligation deadlines in a calendar view.
2. Filter and search obligation queue by risk, status, and text.
3. Run role-based actions (complete, escalate, close review, breach).
4. Add new obligations through a validated intake form.
5. Export filtered queue to CSV for audits and reporting.

## Features
- Dark-mode calendar with month navigation and due-date chips
- KPI cards (monthly deadlines, overdue open items, pending review, completion rate)
- Obligation queue with sorting (due date, risk), search, and filters
- Role-based workflow state machine (Open -> Pending Review -> Completed / Breached)
- Validated "new obligation" form with realistic legal fields
- Audit trail log for key actions and workflow transitions
- CSV export of filtered queue

## Dave's Notes
- Domain: Legal
- UI Pattern: Calendar
- Cross-cutting patterns used: role-based views, approval/escalation workflow, audit trail, search/filter/sort, CSV export, state machine
- Built as a single static HTML file with Tailwind CDN and inline JavaScript
