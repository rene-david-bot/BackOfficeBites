# Onboarding Readiness Calendar — Spec

## User story
As an HR operations lead, I want a calendar-driven onboarding workspace so that each new hire can start on time with document checks, IT readiness, and manager accountability all tracked in one place.

## Core features
- **Calendar pattern** for onboarding start dates with month navigation
- **Role-based transitions** (HR Ops, IT Admin, Hiring Manager)
- **Policy validation** for near-term starts and readiness completeness
- Search, location filter, and queue sorting
- Detail form with validation and status controls
- Audit trail per hire record
- CSV export for visible onboarding rows
- Quick-add flow for new intake cards

## Dave's notes
- Pattern: **Calendar**
- Category: **HR**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, search+filter+sort, audit trail, CSV export, state machine
- Built as a single self-contained `index.html` (Tailwind CDN + inline JS), dark-mode only, responsive, static-host friendly.
