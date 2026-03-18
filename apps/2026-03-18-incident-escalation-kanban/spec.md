# Incident Escalation Kanban — Spec

## User story
As an IT Ops incident manager, I need a dark-mode workflow board to triage incidents, enforce P1 closure policy gates, and keep an audit-ready history so we can resolve outages faster without violating governance.

## Core features
- **Kanban workflow** across `Reported → Investigating → Mitigating → Resolved`
- **Search + filter + sort** by severity, service, status, and free-text query
- **Role-based actions** (`On-call Engineer`, `Incident Manager`, `Head of IT Ops`)
- **Policy validation**
  - P1 incidents require explicit closure approval before resolve
  - Resolve requires at least one logged update + valid postmortem URL
  - Reported incidents need owner assignment before investigation
- **Audit trail** per incident with timestamped workflow and approval events
- **Action logging** with owner, mitigation ETA, and structured notes
- **CSV export** for filtered board views
- **New incident intake form** with validation and realistic IT service data

## Demo data
- Seeded with 4 realistic incidents across Identity Platform, Order API, Warehouse Scanner, and Finance ETL
- Includes one open P1 with pending approval, one active P2 mitigation, one newly reported P3, and one resolved historical P2

## Dave’s notes
- Chosen combo for variety: **IT Ops × Kanban**
- Cross-cutting patterns covered: approval workflow, audit trail, policy validation, search/filter/sort, CSV export, role-based views
- Implemented as one static `index.html` (Tailwind CDN + inline JS), no build step, GitHub Pages ready
