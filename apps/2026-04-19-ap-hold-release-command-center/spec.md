# AP Hold Release Command Center - Spec

## User story
As a finance shared-services team, we need to monitor invoice holds, route approvals, and release only policy-compliant items so that AP risk and payment delays stay controlled.

## Core workflow
1. AP analyst logs a hold as **New Hold**.
2. Team moves item to **In Review** and adds review notes + supporting docs.
3. AP Manager approves reviewed hold to **Approved**.
4. Finance Controller releases approved hold to **Released** using a valid release code.

## Features
- Dark-mode responsive dashboard with KPI cards and two chart panels
- Hold register table with search, filter, and sort controls
- Role-based transition controls (AP Analyst, AP Manager, Finance Controller)
- Policy validation for approval and release actions
- Hold detail editor with owner, docs count, review note, release code
- Intake form with validation (invoice format, duplicates, numeric checks)
- Status transitions and state changes with forward/back actions
- CSV export for currently filtered register rows
- Audit trail of updates, transitions, and exports

## Policy guardrails
- Any role can move from **New Hold** to **In Review**.
- Only AP Manager (or Finance Controller) can approve reviewed holds.
- Approval requires at least one supporting doc and a review note.
- Only Finance Controller can release approved holds.
- Release requires a release code with minimum 5 characters.

## Demo data
- Regions: EMEA, DACH, US, APAC
- Seeded with realistic invoice holds across risk levels, aging buckets, and statuses

## Dave's notes
- Pattern used: **Dashboard+Charts**
- Category used: **Finance**
- Cross-cutting patterns included: approval workflow, policy validation, role-based views, charts, search/filter/sort, audit trail, CSV export, state machine
- No build step, single static HTML with Tailwind CDN and inline JavaScript
