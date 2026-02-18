(() => {
  const STORE_KEY = 'backofficebites.store.v1';

  const defaultData = () => ({
    schemaVersion: 1,
    lastUpdated: new Date().toISOString(),
    accessRequests: [
      { name: 'Lena Müller', system: 'Snowflake', role: 'Analyst', risk: 'Medium', status: 'pending' },
      { name: 'Omar Idris', system: 'Jira', role: 'Admin (temporary)', risk: 'High', status: 'approved' },
      { name: 'Sofia Romano', system: 'NetSuite', role: 'Read-only', risk: 'Low', status: 'rejected' }
    ],
    accessAudit: ['Wizard initialized'],
    assets: [
      {
        id: 'A-1001',
        name: 'Dell Latitude 7440',
        category: 'Laptop',
        status: 'Checked Out',
        location: 'Dresden HQ · Locker 4',
        assignedTo: 'M. Krüger',
        value: 1600,
        serial: 'DL-7440-991',
        lastCheckout: '2026-02-05',
        nextDue: '2026-02-20',
        condition: 'Good',
        approval: 'Not Required'
      },
      {
        id: 'A-1002',
        name: 'iPad Pro 12.9',
        category: 'Tablet',
        status: 'Available',
        location: 'Dresden HQ · Locker 2',
        assignedTo: '',
        value: 1400,
        serial: 'IP-129-223',
        lastCheckout: '2026-01-28',
        nextDue: '',
        condition: 'Excellent',
        approval: 'Not Required'
      },
      {
        id: 'A-1003',
        name: 'Canon R6 Kit',
        category: 'Camera',
        status: 'Reserved',
        location: 'Media Lab · Shelf 3',
        assignedTo: 'Product Marketing',
        value: 3600,
        serial: 'CR6-4431',
        lastCheckout: '2026-02-10',
        nextDue: '2026-02-25',
        condition: 'Good',
        approval: 'Approved'
      },
      {
        id: 'A-1004',
        name: 'Surface Studio 2+',
        category: 'Workstation',
        status: 'Checked Out',
        location: 'Innovation Lab',
        assignedTo: 'R. Dutt',
        value: 5200,
        serial: 'SS2-8811',
        lastCheckout: '2026-01-30',
        nextDue: '2026-02-18',
        condition: 'Fair',
        approval: 'Approved'
      },
      {
        id: 'A-1005',
        name: 'Logitech Rally Bar',
        category: 'AV Equipment',
        status: 'Maintenance',
        location: 'Meeting Room 7',
        assignedTo: 'AV Support',
        value: 4100,
        serial: 'LRB-5530',
        lastCheckout: '2026-02-01',
        nextDue: '',
        condition: 'Repair',
        approval: 'Not Required'
      },
      {
        id: 'A-1006',
        name: 'DJI Mavic 3',
        category: 'Drone',
        status: 'Available',
        location: 'Field Ops · Locker 1',
        assignedTo: '',
        value: 2600,
        serial: 'DJI-3389',
        lastCheckout: '2026-01-22',
        nextDue: '',
        condition: 'Excellent',
        approval: 'Not Required'
      },
      {
        id: 'A-1007',
        name: 'MacBook Pro 16"',
        category: 'Laptop',
        status: 'Checked Out',
        location: 'Dresden HQ · Locker 6',
        assignedTo: 'S. Patel',
        value: 3200,
        serial: 'MBP-160-707',
        lastCheckout: '2026-02-01',
        nextDue: '2026-02-10',
        condition: 'Good',
        approval: 'Not Required'
      },
      {
        id: 'A-1008',
        name: 'Zebra TC57',
        category: 'Scanner',
        status: 'Available',
        location: 'Warehouse Dock',
        assignedTo: '',
        value: 1150,
        serial: 'ZB-5704',
        lastCheckout: '2026-02-12',
        nextDue: '',
        condition: 'Good',
        approval: 'Not Required'
      }
    ],
    assetAudit: {
      'A-1001': [
        { time: '2026-02-05 09:10', action: 'Checked Out', by: 'M. Krüger', note: 'Client demo kit' },
        { time: '2026-02-05 09:12', action: 'Policy OK', by: 'Auto', note: 'Duration 15 days' }
      ],
      'A-1002': [
        { time: '2026-01-28 13:22', action: 'Checked In', by: 'N. Schulz', note: 'Returned from offsite' }
      ],
      'A-1003': [
        { time: '2026-02-10 10:45', action: 'Reserved', by: 'Product Marketing', note: 'Launch video shoot' },
        { time: '2026-02-10 10:50', action: 'Approval', by: 'L. Meyer', note: 'APR-00412' }
      ],
      'A-1004': [
        { time: '2026-01-30 14:05', action: 'Checked Out', by: 'R. Dutt', note: 'Workshop build-out' },
        { time: '2026-01-30 14:10', action: 'Approval', by: 'C. Reuter', note: 'APR-00388' }
      ],
      'A-1005': [
        { time: '2026-02-14 08:20', action: 'Maintenance', by: 'AV Support', note: 'Firmware issue' }
      ],
      'A-1006': [
        { time: '2026-01-22 16:10', action: 'Checked In', by: 'Ops Team', note: 'Battery swap' }
      ],
      'A-1007': [
        { time: '2026-02-01 09:30', action: 'Checked Out', by: 'S. Patel', note: 'New hire setup' }
      ],
      'A-1008': [
        { time: '2026-02-12 11:05', action: 'Checked In', by: 'Warehouse', note: 'Cycle count complete' }
      ]
    },
    invoices: [
      {
        id: 'INV-3291', vendor: 'Northwind Metals', po: 'PO-22018', amount: 18450, variance: 20, received: true,
        status: 'Pending', owner: 'Maya', due: '2026-02-20', currency: 'USD',
        notes: 'Two line items missing ship docs.',
        lines: [
          { item: 'Aluminum coils', qty: 30, price: 420 },
          { item: 'Packaging pallets', qty: 10, price: 120 }
        ],
        audit: ['Submitted 02/15 08:20', 'PO matched 02/15 09:12', 'GRN synced 02/15 10:05']
      },
      {
        id: 'INV-3299', vendor: 'Helios Logistics', po: 'PO-21991', amount: 7420, variance: 160, received: true,
        status: 'Exception', owner: 'Noah', due: '2026-02-18', currency: 'USD',
        notes: 'Freight surcharge exceeds contract cap.',
        lines: [
          { item: 'Inbound freight', qty: 1, price: 6800 },
          { item: 'Fuel surcharge', qty: 1, price: 620 }
        ],
        audit: ['Submitted 02/14 12:03', 'Policy flag: surcharge cap 02/14 12:05']
      },
      {
        id: 'INV-3304', vendor: 'Verta Office', po: 'PO-22022', amount: 2150, variance: 0, received: true,
        status: 'Matched', owner: 'Iris', due: '2026-02-22', currency: 'USD',
        notes: 'Auto-match completed.',
        lines: [
          { item: 'Desk chairs', qty: 10, price: 215 }
        ],
        audit: ['Submitted 02/15 14:01', 'Auto-match approved 02/15 14:02']
      },
      {
        id: 'INV-3312', vendor: 'Kessel Components', po: 'PO-22030', amount: 49200, variance: 420, received: false,
        status: 'Exception', owner: 'Maya', due: '2026-02-19', currency: 'USD',
        notes: 'Goods receipt pending for line 3.',
        lines: [
          { item: 'Drive assemblies', qty: 12, price: 4100 }
        ],
        audit: ['Submitted 02/16 09:40', 'GRN pending 02/16 09:42']
      },
      {
        id: 'INV-3320', vendor: 'Blue Harbor IT', po: 'PO-22044', amount: 9800, variance: 75, received: true,
        status: 'Pending', owner: 'Noah', due: '2026-02-23', currency: 'USD',
        notes: 'Awaiting security review for software add-on.',
        lines: [
          { item: 'License bundle', qty: 1, price: 9200 },
          { item: 'Support add-on', qty: 1, price: 600 }
        ],
        audit: ['Submitted 02/16 11:22', 'Policy check queued 02/16 11:25']
      },
      {
        id: 'INV-3327', vendor: 'Atlas Packaging', po: 'PO-22050', amount: 6450, variance: 15, received: true,
        status: 'Matched', owner: 'Iris', due: '2026-02-24', currency: 'USD',
        notes: 'Auto-match completed.',
        lines: [
          { item: 'Protective foam', qty: 50, price: 120 },
          { item: 'Cartons', qty: 300, price: 6 }
        ],
        audit: ['Submitted 02/16 13:48', 'Auto-match approved 02/16 13:49']
      },
      {
        id: 'INV-3333', vendor: 'Solara Energy', po: 'PO-22055', amount: 12700, variance: 260, received: true,
        status: 'Exception', owner: 'Maya', due: '2026-02-18', currency: 'USD',
        notes: 'Rate change outside contract window.',
        lines: [
          { item: 'Facility power', qty: 1, price: 12700 }
        ],
        audit: ['Submitted 02/17 08:10', 'Policy flag: rate window 02/17 08:12']
      },
      {
        id: 'INV-3341', vendor: 'Orchid Labs', po: 'PO-22061', amount: 3650, variance: 0, received: true,
        status: 'Matched', owner: 'Noah', due: '2026-02-25', currency: 'USD',
        notes: 'Auto-match completed.',
        lines: [
          { item: 'Testing kits', qty: 5, price: 730 }
        ],
        audit: ['Submitted 02/17 09:30', 'Auto-match approved 02/17 09:31']
      },
      {
        id: 'INV-3348', vendor: 'Nimbus Freight', po: 'PO-22070', amount: 21400, variance: 90, received: true,
        status: 'Pending', owner: 'Iris', due: '2026-02-26', currency: 'USD',
        notes: 'Carrier insurance clause needs approval.',
        lines: [
          { item: 'Outbound freight', qty: 1, price: 21000 },
          { item: 'Insurance', qty: 1, price: 400 }
        ],
        audit: ['Submitted 02/17 11:54', 'Policy check queued 02/17 12:01']
      },
      {
        id: 'INV-3354', vendor: 'Civic Print', po: 'PO-22075', amount: 2980, variance: 5, received: true,
        status: 'Pending', owner: 'Noah', due: '2026-02-27', currency: 'USD',
        notes: 'Backorder confirmation still open.',
        lines: [
          { item: 'Product labels', qty: 2000, price: 1.49 }
        ],
        audit: ['Submitted 02/17 13:09', 'PO matched 02/17 13:12']
      },
      {
        id: 'INV-3362', vendor: 'Everline Safety', po: 'PO-22083', amount: 8350, variance: 110, received: true,
        status: 'Exception', owner: 'Maya', due: '2026-02-21', currency: 'USD',
        notes: 'Unit cost above policy threshold.',
        lines: [
          { item: 'Safety harness', qty: 25, price: 310 }
        ],
        audit: ['Submitted 02/17 15:22', 'Policy flag: unit cost 02/17 15:25']
      },
      {
        id: 'INV-3370', vendor: 'Granite Data', po: 'PO-22090', amount: 15600, variance: 45, received: true,
        status: 'Pending', owner: 'Iris', due: '2026-02-28', currency: 'USD',
        notes: 'Contract extension doc awaiting sign-off.',
        lines: [
          { item: 'Data hosting', qty: 1, price: 15600 }
        ],
        audit: ['Submitted 02/17 16:40', 'Policy check queued 02/17 16:42']
      }
    ],
    risks: [
      {
        id: 'R-144',
        name: 'Vendor API deprecation impacts order promises',
        owner: 'Lea',
        department: 'Supply Chain',
        level: 'High',
        status: 'Mitigating',
        impact: 4,
        likelihood: 3,
        nextReview: '2026-02-21',
        mitigation: 'Roll out dual routing + cache for legacy endpoints.',
        milestones: [
          { date: '2026-02-15', label: 'Deprecation notice received', type: 'signal' },
          { date: '2026-02-18', label: 'Mitigation sprint started', type: 'work' },
          { date: '2026-02-21', label: 'Failover test & exec update', type: 'review' }
        ],
        audit: ['Owner assigned: Lea', 'Mitigation plan approved 02/16 10:12', 'Daily status updates started']
      },
      {
        id: 'R-152',
        name: 'Quarterly revenue forecast variance > 8%',
        owner: 'Omar',
        department: 'Finance',
        level: 'Critical',
        status: 'Awaiting Approval',
        impact: 5,
        likelihood: 4,
        nextReview: '2026-02-19',
        mitigation: 'Re-baseline pipeline assumptions, tighten discount guardrails.',
        milestones: [
          { date: '2026-02-12', label: 'Variance detected', type: 'signal' },
          { date: '2026-02-16', label: 'Mitigation drafted', type: 'work' },
          { date: '2026-02-19', label: 'Approval review', type: 'approval' }
        ],
        audit: ['Risk escalated 02/12 16:40', 'Mitigation awaiting CFO approval']
      },
      {
        id: 'R-158',
        name: 'Data residency gap for new EU customer segment',
        owner: 'Priya',
        department: 'Legal',
        level: 'High',
        status: 'Escalated',
        impact: 4,
        likelihood: 4,
        nextReview: '2026-02-18',
        mitigation: 'Finalize EU data zone contract + DPA updates.',
        milestones: [
          { date: '2026-02-10', label: 'Contract review requested', type: 'work' },
          { date: '2026-02-14', label: 'Legal review completed', type: 'review' },
          { date: '2026-02-18', label: 'Board approval needed', type: 'approval' }
        ],
        audit: ['Escalated to board 02/13 08:30', 'Waiting on final sign-off']
      },
      {
        id: 'R-163',
        name: 'Cyber insurance renewal delay',
        owner: 'Jules',
        department: 'IT Ops',
        level: 'Medium',
        status: 'Open',
        impact: 3,
        likelihood: 2,
        nextReview: '2026-02-25',
        mitigation: 'Collect control evidence for renewal underwriting.',
        milestones: [
          { date: '2026-02-17', label: 'Evidence request sent', type: 'work' },
          { date: '2026-02-22', label: 'Broker review', type: 'review' },
          { date: '2026-02-25', label: 'Renewal decision', type: 'approval' }
        ],
        audit: ['Broker contacted 02/17 14:20']
      },
      {
        id: 'R-167',
        name: 'Call center staffing shortfall for product launch',
        owner: 'Mia',
        department: 'HR',
        level: 'High',
        status: 'Mitigating',
        impact: 4,
        likelihood: 3,
        nextReview: '2026-02-20',
        mitigation: 'Contract temp staffing + shift incentives.',
        milestones: [
          { date: '2026-02-13', label: 'Forecast gap confirmed', type: 'signal' },
          { date: '2026-02-18', label: 'Staffing outreach', type: 'work' },
          { date: '2026-02-20', label: 'Capacity checkpoint', type: 'review' }
        ],
        audit: ['Temp staffing RFP sent 02/14']
      },
      {
        id: 'R-171',
        name: 'Tier-1 logistics partner capacity risk',
        owner: 'Kai',
        department: 'Supply Chain',
        level: 'Medium',
        status: 'Open',
        impact: 3,
        likelihood: 3,
        nextReview: '2026-02-23',
        mitigation: 'Qualify alternate carriers and flex lanes.',
        milestones: [
          { date: '2026-02-11', label: 'Capacity warning from carrier', type: 'signal' },
          { date: '2026-02-19', label: 'Backup lane proposal', type: 'work' },
          { date: '2026-02-23', label: 'Ops review', type: 'review' }
        ],
        audit: ['Carrier escalation logged 02/11 09:14']
      },
      {
        id: 'R-175',
        name: 'Customer churn spike in SMB segment',
        owner: 'Zoe',
        department: 'Sales',
        level: 'High',
        status: 'Awaiting Approval',
        impact: 4,
        likelihood: 4,
        nextReview: '2026-02-22',
        mitigation: 'Retention playbooks + renewal incentives.',
        milestones: [
          { date: '2026-02-16', label: 'Churn alert triggered', type: 'signal' },
          { date: '2026-02-18', label: 'Retention plan drafted', type: 'work' },
          { date: '2026-02-22', label: 'Leadership approval', type: 'approval' }
        ],
        audit: ['Exec sponsor assigned 02/16 12:20']
      }
    ],
    holds: [
      {
        id: 'LH-1023',
        matter: 'Acme v. Triad',
        custodian: 'A. Brewer',
        custodians: ['A. Brewer', 'M. Choi'],
        region: 'US',
        status: 'Pending',
        risk: 'High',
        due: '2026-03-05',
        owner: 'J. Lam',
        last: '2026-02-16',
        notes: [
          { time: '2026-02-16 09:12', by: 'J. Lam', text: 'Hold issued to finance group.' },
          { time: '2026-02-17 14:31', by: 'A. Brewer', text: 'Awaiting counsel approval for APAC scope.' }
        ]
      },
      {
        id: 'LH-1048',
        matter: 'NovaCorp IP Audit',
        custodian: 'S. Ortiz',
        custodians: ['S. Ortiz', 'L. Wu', 'D. Young'],
        region: 'EU',
        status: 'Active',
        risk: 'Medium',
        due: '2026-02-22',
        owner: 'R. Patel',
        last: '2026-02-17',
        notes: [
          { time: '2026-02-14 08:22', by: 'R. Patel', text: 'Reviewed data mapping for R&D shares.' },
          { time: '2026-02-17 12:08', by: 'S. Ortiz', text: 'Custodian notices confirmed.' }
        ]
      },
      {
        id: 'LH-1077',
        matter: 'BlueSky Compliance Review',
        custodian: 'E. Jones',
        custodians: ['E. Jones'],
        region: 'APAC',
        status: 'Escalated',
        risk: 'High',
        due: '2026-02-19',
        owner: 'K. Meyer',
        last: '2026-02-18',
        notes: [
          { time: '2026-02-15 11:02', by: 'K. Meyer', text: 'Missing policy acknowledgement from two teams.' }
        ]
      },
      {
        id: 'LH-1091',
        matter: 'Helios Partner Dispute',
        custodian: 'C. Ito',
        custodians: ['C. Ito', 'B. Stein'],
        region: 'LATAM',
        status: 'Pending',
        risk: 'Low',
        due: '2026-03-10',
        owner: 'M. Rossi',
        last: '2026-02-15',
        notes: [
          { time: '2026-02-12 10:44', by: 'M. Rossi', text: 'Preliminary hold drafted.' }
        ]
      },
      {
        id: 'LH-1104',
        matter: 'Orion Data Retention',
        custodian: 'N. Gupta',
        custodians: ['N. Gupta', 'T. Reed', 'H. Salem'],
        region: 'US',
        status: 'Active',
        risk: 'High',
        due: '2026-02-20',
        owner: 'J. Lam',
        last: '2026-02-18',
        notes: [
          { time: '2026-02-13 09:17', by: 'J. Lam', text: 'High-risk hold triggered by regulator inquiry.' },
          { time: '2026-02-18 08:10', by: 'N. Gupta', text: 'Updated custodian roster with HR sign-off.' }
        ]
      },
      {
        id: 'LH-1129',
        matter: 'Summit Pricing Review',
        custodian: 'P. Novak',
        custodians: ['P. Novak', 'G. Diaz'],
        region: 'EU',
        status: 'Released',
        risk: 'Low',
        due: '2026-01-28',
        owner: 'A. Keller',
        last: '2026-02-01',
        notes: [
          { time: '2026-02-01 15:50', by: 'A. Keller', text: 'Hold released after settlement.' }
        ]
      },
      {
        id: 'LH-1142',
        matter: 'Vertex Vendor Review',
        custodian: 'M. Chi',
        custodians: ['M. Chi'],
        region: 'APAC',
        status: 'Pending',
        risk: 'Medium',
        due: '2026-02-26',
        owner: 'T. Gray',
        last: '2026-02-17',
        notes: [
          { time: '2026-02-17 16:22', by: 'T. Gray', text: 'Awaiting custodian confirmation from APAC.' }
        ]
      },
      {
        id: 'LH-1160',
        matter: 'Zenith Insider Inquiry',
        custodian: 'L. Park',
        custodians: ['L. Park', 'J. Silva', 'R. Amin'],
        region: 'US',
        status: 'Active',
        risk: 'High',
        due: '2026-02-24',
        owner: 'M. Rossi',
        last: '2026-02-17',
        notes: [
          { time: '2026-02-10 13:35', by: 'M. Rossi', text: 'Legal hold approved by outside counsel.' }
        ]
      }
    ],
    leaveRequests: [
      {
        id: 'LR-1204',
        employee: 'N. Weber',
        team: 'Design',
        type: 'PTO',
        status: 'Pending',
        start: '2026-03-03',
        end: '2026-03-07',
        submitted: '2026-02-16',
        balance: 6,
        coverage: 0.64,
        manager: 'S. Koch',
        location: 'DE',
        reason: 'Wedding travel + recovery day.',
        handoff: 'Brand refresh QA handed to S. Patel; typography audit scheduled for 03/08.',
        delegate: 'S. Patel',
        notes: [
          { time: '2026-02-16 09:12', by: 'N. Weber', text: 'Uploaded PTO request and handoff list.' },
          { time: '2026-02-17 13:40', by: 'S. Koch', text: 'Reviewing coverage for the design pod.' }
        ]
      },
      {
        id: 'LR-1211',
        employee: 'M. Khan',
        team: 'Engineering',
        type: 'Training',
        status: 'Needs Info',
        start: '2026-02-25',
        end: '2026-02-28',
        submitted: '2026-02-18',
        balance: 9,
        coverage: 0.58,
        manager: 'T. Velas',
        location: 'UK',
        reason: 'On-site Kubernetes workshop.',
        handoff: 'Release monitoring to be covered by J. Okafor; on-call swap pending.',
        delegate: 'J. Okafor',
        notes: [
          { time: '2026-02-18 08:18', by: 'M. Khan', text: 'Added training agenda; waiting on on-call swap.' }
        ]
      },
      {
        id: 'LR-1217',
        employee: 'A. Garcia',
        team: 'Customer Support',
        type: 'Sick',
        status: 'Approved',
        start: '2026-02-17',
        end: '2026-02-19',
        submitted: '2026-02-17',
        balance: 12,
        coverage: 0.79,
        manager: 'L. Frost',
        location: 'US',
        reason: 'Medical leave (doctor note submitted).',
        handoff: 'Ticket backlog coverage assigned to M. Bello and T. Moss.',
        delegate: 'M. Bello',
        notes: [
          { time: '2026-02-17 07:55', by: 'L. Frost', text: 'Approved sick leave; routing changes applied.' }
        ]
      },
      {
        id: 'LR-1222',
        employee: 'E. Rossi',
        team: 'Finance',
        type: 'PTO',
        status: 'Validated',
        start: '2026-03-11',
        end: '2026-03-15',
        submitted: '2026-02-05',
        balance: 10,
        coverage: 0.66,
        manager: 'V. Hart',
        location: 'DE',
        reason: 'Family travel abroad.',
        handoff: 'Close books handoff to J. Kim; cashflow dashboard automation scheduled.',
        delegate: 'J. Kim',
        notes: [
          { time: '2026-02-06 10:21', by: 'V. Hart', text: 'Approved with quarter-close guardrails.' },
          { time: '2026-02-10 15:40', by: 'HR', text: 'Validated documentation and compliance.' }
        ]
      },
      {
        id: 'LR-1229',
        employee: 'L. Zhao',
        team: 'HR',
        type: 'Parental',
        status: 'Approved',
        start: '2026-04-01',
        end: '2026-04-30',
        submitted: '2026-01-20',
        balance: 28,
        coverage: 0.91,
        manager: 'M. Ober',
        location: 'DE',
        reason: 'Parental leave block.',
        handoff: 'HR onboarding pipeline covered by S. Laurent; policy updates parked until return.',
        delegate: 'S. Laurent',
        notes: [
          { time: '2026-01-20 11:30', by: 'L. Zhao', text: 'Submitted parental leave request with plan.' },
          { time: '2026-01-24 09:08', by: 'M. Ober', text: 'Approved; HR handoff confirmed.' }
        ]
      },
      {
        id: 'LR-1235',
        employee: 'T. Muller',
        team: 'Sales',
        type: 'Unpaid',
        status: 'Pending',
        start: '2026-03-12',
        end: '2026-03-14',
        submitted: '2026-02-10',
        balance: 0,
        coverage: 0.74,
        manager: 'C. Brandt',
        location: 'DE',
        reason: 'Caregiving leave (unpaid).',
        handoff: 'Enterprise renewal calls shifted to A. Voss; pipeline notes updated.',
        delegate: 'A. Voss',
        notes: [
          { time: '2026-02-10 12:44', by: 'T. Muller', text: 'Shared updated pipeline notes and call list.' }
        ]
      },
      {
        id: 'LR-1241',
        employee: 'J. Okafor',
        team: 'Engineering',
        type: 'PTO',
        status: 'Declined',
        start: '2026-02-20',
        end: '2026-02-22',
        submitted: '2026-02-15',
        balance: 2,
        coverage: 0.52,
        manager: 'T. Velas',
        location: 'UK',
        reason: 'Short PTO request.',
        handoff: 'No coverage plan submitted.',
        delegate: '—',
        notes: [
          { time: '2026-02-16 09:11', by: 'T. Velas', text: 'Declined due to low balance + coverage.' }
        ]
      },
      {
        id: 'LR-1246',
        employee: 'S. Laurent',
        team: 'Marketing',
        type: 'PTO',
        status: 'Scheduled',
        start: '2026-03-18',
        end: '2026-03-20',
        submitted: '2026-02-02',
        balance: 14,
        coverage: 0.86,
        manager: 'M. Ober',
        location: 'FR',
        reason: 'Conference attendance + PTO.',
        handoff: 'Campaign launch monitoring delegated to R. Steele.',
        delegate: 'R. Steele',
        notes: [
          { time: '2026-02-03 10:05', by: 'M. Ober', text: 'Approved and passed to payroll.' },
          { time: '2026-02-08 15:22', by: 'Payroll', text: 'Scheduled in payroll system.' }
        ]
      },
      {
        id: 'LR-1253',
        employee: 'D. Novak',
        team: 'Product',
        type: 'PTO',
        status: 'Pending',
        start: '2026-02-28',
        end: '2026-03-02',
        submitted: '2026-02-14',
        balance: 5,
        coverage: 0.69,
        manager: 'E. Brand',
        location: 'DE',
        reason: 'Family commitment during school break.',
        handoff: 'Roadmap review delegated to P. Hassan; sprint planning notes updated.',
        delegate: 'P. Hassan',
        notes: [
          { time: '2026-02-14 16:31', by: 'D. Novak', text: 'Added sprint plan notes and milestones.' }
        ]
      }
    ]
  });

  const clone = (value) => (window.structuredClone ? window.structuredClone(value) : JSON.parse(JSON.stringify(value)));

  function mergeDefaults(data) {
    const base = defaultData();
    if (!data || typeof data !== 'object') return base;
    return {
      ...base,
      ...data,
      accessRequests: Array.isArray(data.accessRequests) ? data.accessRequests : base.accessRequests,
      accessAudit: Array.isArray(data.accessAudit) ? data.accessAudit : base.accessAudit,
      assets: Array.isArray(data.assets) ? data.assets : base.assets,
      assetAudit: data.assetAudit && typeof data.assetAudit === 'object' ? data.assetAudit : base.assetAudit,
      invoices: Array.isArray(data.invoices) ? data.invoices : base.invoices,
      risks: Array.isArray(data.risks) ? data.risks : base.risks,
      holds: Array.isArray(data.holds) ? data.holds : base.holds,
      leaveRequests: Array.isArray(data.leaveRequests) ? data.leaveRequests : base.leaveRequests
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) {
        const seed = defaultData();
        localStorage.setItem(STORE_KEY, JSON.stringify(seed));
        return clone(seed);
      }
      const parsed = JSON.parse(raw);
      return mergeDefaults(parsed);
    } catch (error) {
      const seed = defaultData();
      localStorage.setItem(STORE_KEY, JSON.stringify(seed));
      return clone(seed);
    }
  }

  function save(data) {
    const payload = { ...data, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORE_KEY, JSON.stringify(payload));
    return payload;
  }

  function update(mutator) {
    const data = load();
    mutator(data);
    return save(data);
  }

  function reset() {
    const seed = defaultData();
    localStorage.setItem(STORE_KEY, JSON.stringify(seed));
    return clone(seed);
  }

  window.BackOfficeStore = {
    KEY: STORE_KEY,
    load,
    save,
    update,
    reset,
    defaults: defaultData
  };
})();
