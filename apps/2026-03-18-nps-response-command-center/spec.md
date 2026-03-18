# NPS Response Command Center — Spec

## User Story
As a Sales/CX operations team, we need one workspace to triage NPS responses, enforce follow-up policy, and prove every detractor received a documented close-the-loop action.

## Core Workflow
1. Intake NPS responses from survey/CRM feeds.
2. Prioritize by risk, score, and due follow-up date.
3. Assign owners and playbooks (call, executive outreach, workshop, concession).
4. Move cases through a governed state machine:
   - New → Investigating → Action Planned → Waiting Customer → Closed
5. Keep an audit trail for every action and transition.

## Features Implemented
- **Dashboard + charts pattern** with score-distribution bars and KPI cards.
- **Search + filter + sort** by region, status, risk, score, and recency.
- **Role-based views** (`CX Analyst`, `Regional Manager`, `VP Sales`) with permission differences.
- **Policy validation** for concession approvals:
  - Detractor cases (`score <= 4`) with concessions above €200 require manager/VP authority.
- **Workflow state transitions** with guardrails and close-loop checks.
- **Follow-up action form** with validation (owner, date, note length, non-negative credit).
- **Audit trail** capturing timestamped actions and transitions.
- **CSV export** of currently filtered responses.
- **New response intake form** with validation and auto-prioritization.

## Data Model (demo)
Each NPS record includes:
- Case id, account, segment, region
- Score, risk, status
- Owner, playbook, next follow-up date
- Credit offer, outbound action counter
- Free-text customer comment
- Timestamped audit array

## Dave's Notes
- Kept it dark-mode only (no theme toggle).
- Optimized for quick review + action logging in one screen.
- Designed policy rules to feel realistic for enterprise CX governance.
