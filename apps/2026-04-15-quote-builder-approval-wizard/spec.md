# Quote Builder Approval Wizard - Spec

## User Story
As a sales operations team member, I want to build quotes in a guided wizard so I can package products, apply discounts, and route risky deals through approvals before sending to customers.

## Core Workflow
1. Enter account and ownership details.
2. Add one or more product line items with quantity and discount.
3. Review commercial terms and policy feedback.
4. Create quote and process it through role-based actions (submit, approve/reject, send).

## Features
- 3-step wizard with inline validation
- Product line-item builder with running totals
- Policy validation for margin, discount, and payment terms
- Role-based views: Sales Rep, Deal Desk, Finance Approver
- Quote pipeline table with search, status filter, and sortable columns
- Approval state machine (Needs Approval -> Pending Approval -> Approved/Rejected -> Sent)
- KPI cards for quote volume, approval load, policy triggers, and pipeline value
- Audit trail log of key actions
- CSV export of currently filtered quote list

## Dave's Notes
- Domain: Sales
- UI Pattern: Wizard
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, audit trail, search/filter/sort, CSV export
- Built as a single static HTML file with Tailwind CDN and inline JavaScript
