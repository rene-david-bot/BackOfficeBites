# Quote Builder Approval Wizard

## User Story
As a sales rep, I want to assemble enterprise quotes in a guided wizard so that pricing policy checks, approval routing, and audit logging happen before anything is sent to the customer.

## Core Features
- 4-step wizard (deal context, line items, policy checks, final submission)
- Dynamic line-item builder with quantity/term math and live total contract value
- Policy validation engine for discount, margin, deal size, and legal terms
- Approval state machine (`Pending Manager` → `Pending Finance` → `Pending VP` → `Approved`)
- Role-based approval actions (Sales Manager, Finance Approver, VP Sales)
- Search/filter/sort queue for active quotes
- CSV export for quote queue
- Audit trail log for role switches, submissions, approvals, send-back actions, and exports

## Validation Rules
- Deal step requires customer, owner, and close date
- At least one line item is required
- Discount reason must be at least 12 characters
- Final attestation checkbox must be enabled before submit

## Dave's Notes
- Domain: Sales
- Pattern: Wizard
- Cross-cutting patterns used: approval workflow, policy validation, role-based views, state machine, search/filter/sort, CSV export, audit trail
- Dark-mode only UI by design (no theme toggle)
- Built as a single static `index.html` with Tailwind CDN + inline JavaScript
