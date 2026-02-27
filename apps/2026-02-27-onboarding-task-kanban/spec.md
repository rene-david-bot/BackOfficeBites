# Onboarding Task Kanban

## User Story
As an HR operations lead, I want a shared kanban board for onboarding tasks so I can coordinate HR, IT Ops, and managers, enforce policy checks, and keep a reliable audit trail.

## Features
- Kanban stages for Preboarding, Day 1, Week 1, and Complete
- Drag-and-drop status updates with policy warnings for blocked tasks
- Role-based view and filtering for HR, IT Ops, and Manager responsibilities
- Policy alert panel highlighting blocked or due-soon tasks
- Audit trail log for status changes, quick actions, and exports
- CSV export of onboarding tasks for compliance reviews

## Dave's Notes
- Dark-mode only layout with Tailwind CDN and no build step.
- Added dependency logic to surface policy violations and blocked work.
- Included quick actions and realistic demo data for a single new hire profile.
