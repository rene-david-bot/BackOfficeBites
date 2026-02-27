# Shipment Control Tower

## User story
As a supply chain operations manager, I want a single control tower that highlights at-risk shipments, validates policy compliance, and routes exception approvals so I can protect SLAs and unblock customs quickly.

## Features
- Ops dashboard with live KPIs for risk, ETA slip, and exception volume.
- Search, filter, and sort across shipments by region, status, and carrier.
- Role-based views (Ops Manager, Compliance, Finance) with tailored columns.
- Policy validation badges for hazmat, cold-chain, and ETA slip violations.
- Exception request workflow with approval/rejection actions and audit trail.
- Detail panel with actionable controls (approve exception, place customs hold).
- CSV export for filtered shipment lists.
- Visual charts for regional exceptions and delay trend.

## Dave's notes
- Focused on a "dashboard + charts" pattern with embedded approval workflow.
- Added audit logging for every state change to show compliance readiness.
- Kept the UI dark-mode only to match BackOfficeBites guidance.
