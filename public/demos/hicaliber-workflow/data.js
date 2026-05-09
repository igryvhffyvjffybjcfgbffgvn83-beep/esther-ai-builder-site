// ===== ENTITIES =====
const ENTITIES = [
  { id:'properties', icon:'🏠', name:'Properties', desc:'Core listing records', badge:'Primary',
    rels:['1:N → Images','N:1 → Agents','1:N → Approvals','N:N → Channels','1:N → Tasks'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'address',type:'String',note:'Required'},
      {name:'suburb',type:'String',note:'Indexed'},
      {name:'state',type:'Enum',note:'AU states'},
      {name:'price',type:'Decimal',note:'Required'},
      {name:'previousPrice',type:'Decimal',note:'Auto-tracked'},
      {name:'priceChangePercent',type:'Computed',note:'|new-old|/old'},
      {name:'bedrooms',type:'Integer',note:''},
      {name:'bathrooms',type:'Integer',note:''},
      {name:'parking',type:'Integer',note:''},
      {name:'landSize',type:'Integer',note:'sqm'},
      {name:'status',type:'Enum',note:'State machine'},
      {name:'agentId',type:'FK → Agents',note:'Required'},
      {name:'channelIds',type:'FK[] → Channels',note:'Multi-select'},
      {name:'createdAt',type:'Timestamp',note:'Auto'},
      {name:'updatedAt',type:'Timestamp',note:'Auto'},
      {name:'publishedAt',type:'Timestamp',note:'Nullable'},
      {name:'soldAt',type:'Timestamp',note:'Nullable'}
    ]},
  { id:'agents', icon:'👤', name:'Agents', desc:'Team members managing listings', badge:'Lookup',
    rels:['1:N → Properties','1:N → Tasks','1:N → Notifications'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'name',type:'String',note:''},
      {name:'email',type:'String',note:'Unique'},
      {name:'phone',type:'String',note:''},
      {name:'role',type:'Enum',note:'Agent / Senior / Manager'}
    ]},
  { id:'approvals', icon:'✓', name:'Approvals', desc:'Review decisions for listings', badge:'Workflow',
    rels:['N:1 → Properties','N:1 → Agents (reviewer)'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'propertyId',type:'FK → Properties',note:'Required'},
      {name:'reviewerId',type:'FK → Agents',note:'Manager+'},
      {name:'status',type:'Enum',note:'Pending/Approved/Rejected/Escalated'},
      {name:'submittedAt',type:'Timestamp',note:'Auto'},
      {name:'decidedAt',type:'Timestamp',note:'Nullable'},
      {name:'notes',type:'Text',note:''},
      {name:'escalationReason',type:'String',note:'Nullable'}
    ]},
  { id:'channels', icon:'📡', name:'Channels', desc:'Publication destinations', badge:'Integration',
    rels:['N:N → Properties'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'name',type:'String',note:'REA / Domain / Website / Social'},
      {name:'autoPublish',type:'Boolean',note:''},
      {name:'syncStatus',type:'Enum',note:'Synced / Pending / Error'}
    ]},
  { id:'tasks', icon:'📋', name:'Tasks', desc:'Auto-generated action items', badge:'Automation',
    rels:['N:1 → Properties','N:1 → Agents (assignee)'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'propertyId',type:'FK → Properties',note:''},
      {name:'type',type:'Enum',note:'Review/Complete/Followup/Verify'},
      {name:'assigneeId',type:'FK → Agents',note:''},
      {name:'status',type:'Enum',note:'Open / Done'},
      {name:'dueDate',type:'Date',note:'Auto-calculated'},
      {name:'createdBy',type:'Enum',note:'System / Manual'}
    ]},
  { id:'notifications', icon:'🔔', name:'Notifications', desc:'Triggered communications', badge:'Automation',
    rels:['N:1 → Agents (recipient)','N:1 → Tasks'],
    fields:[
      {name:'id',type:'UUID',note:'PK'},
      {name:'recipientId',type:'FK → Agents',note:''},
      {name:'type',type:'Enum',note:'NewReview/Escalation/Published/Sold'},
      {name:'channel',type:'Enum',note:'Email / Slack / SMS'},
      {name:'sentAt',type:'Timestamp',note:'Auto'}
    ]}
];

// ===== STATE MACHINE =====
const STATES = [
  {id:'DRAFT',label:'Draft',sub:'Agent creates listing',color:'#4a4f5e',
   entry:'Agent submits new listing form', exit:'Auto-validation triggered',
   actions:['Record createdAt timestamp','Assign to listing agent']},
  {id:'VALIDATING',label:'Validating',sub:'Auto-checking fields',color:'#50c8dc',
   entry:'Listing submitted from Draft', exit:'Pass → Under Review / Fail → Incomplete',
   actions:['Check: address present','Check: price > 0','Check: ≥1 image','Check: agent assigned','Check: ≥1 channel selected']},
  {id:'INCOMPLETE',label:'Incomplete',sub:'Missing required data',color:'#fb923c',
   entry:'Validation failed', exit:'Agent fixes data → re-validate',
   actions:['Create Task: "Complete listing info"','Notify agent: missing fields list']},
  {id:'UNDER_REVIEW',label:'Under Review',sub:'Awaiting manager approval',color:'#fbbf24',
   entry:'Validation passed OR price change >10%', exit:'Approved / Rejected / Escalated',
   actions:['Create Task: "Review listing"','Notify manager via Email','Start 24h escalation timer']},
  {id:'APPROVED',label:'Approved',sub:'Ready for publication',color:'#34d399',
   entry:'Manager approves listing', exit:'Auto-publish triggered',
   actions:['Record approval decision','Clear escalation timer']},
  {id:'PUBLISHING',label:'Publishing',sub:'Syncing to channels',color:'#50c8dc',
   entry:'Approval granted, channels selected', exit:'All syncs complete → Live / Any fail → retry',
   actions:['API sync to each channel','Update syncStatus per channel','Retry on failure (3x)']},
  {id:'LIVE',label:'Live',sub:'Active on market',color:'#34d399',
   entry:'All channels synced', exit:'Sold / Price change >10% / Manual withdrawal',
   actions:['Record publishedAt','Notify agent: "Listing is live"']},
  {id:'SOLD',label:'Sold',sub:'Transaction complete',color:'#a78bfa',
   entry:'Agent marks as sold', exit:'Auto-archive after 30 days',
   actions:['Remove from all channels','Generate performance report','Create Task: "Post-sale follow-up"']},
  {id:'ARCHIVED',label:'Archived',sub:'End of lifecycle',color:'#3a3f4e',
   entry:'30 days after sold OR manual archive', exit:'—',
   actions:['Record final state','Data retained for reporting']}
];

const SM_FLOW = [
  ['DRAFT'],['→'],['VALIDATING'],['↓ pass','↓ fail'],
  ['UNDER_REVIEW','INCOMPLETE'],['↓ approved'],
  ['APPROVED'],['↓'],['PUBLISHING'],['↓'],['LIVE'],
  ['↓ sold','↙ price Δ>10%'],['SOLD'],['↓ 30d'],['ARCHIVED']
];

// ===== RULES =====
const RULES = [
  { id:1, title:'Auto-Validate on Submit', desc:'Checks listing completeness before review',
    trigger:'Listing submitted (status → DRAFT)',
    conditions:['address is not empty','price > 0','at least 1 image uploaded','agent is assigned','at least 1 channel selected'],
    actions:['IF all pass → status → UNDER_REVIEW','Create Task: "Review listing" → Manager','Notify Manager via Email','IF any fail → status → INCOMPLETE','Create Task: "Complete listing" → Agent','Notify Agent with missing fields']},
  { id:2, title:'Approval Timeout Escalation', desc:'Escalates if review pending >24h',
    trigger:'Approval pending > 24 hours',
    conditions:['Current reviewer role = Manager','Approval status = Pending'],
    actions:['Escalate to Senior Manager','Notify Senior Manager via Slack','Set escalationReason = "Timeout (24h)"','If >48h → escalate to Director, mark Critical']},
  { id:3, title:'Price Change Re-Approval', desc:'Triggers re-review on significant price changes',
    trigger:'Price field updated on LIVE listing',
    conditions:['|priceChange| > 10%','Current status = LIVE'],
    actions:['status → UNDER_REVIEW','Create Task: "Re-approve price change" → Manager','Notify Manager with old/new price','Log price change in history']},
  { id:4, title:'Auto Multi-Channel Publish', desc:'Syncs listing to all selected channels',
    trigger:'status → APPROVED',
    conditions:['channelIds[] is not empty','All required media uploaded'],
    actions:['For each channel: API sync call','Update channel.syncStatus per result','On all success → status → LIVE','On failure → retry 3x (5m/15m/60m)','Notify Agent: "Listing live on [channels]"']},
  { id:5, title:'Sold Archive Workflow', desc:'Handles post-sale cleanup and reporting',
    trigger:'status → SOLD',
    conditions:['Always execute (no conditions)'],
    actions:['Remove from all channels (API)','Generate performance report','Create Task: "Post-sale follow-up" (due: 7d)','Notify Agent with report','After 30 days → status → ARCHIVED']},
  { id:6, title:'Duplicate Listing Detection', desc:'Flags potential duplicate addresses',
    trigger:'New listing created',
    conditions:['Same address exists in system','Existing listing status ≠ ARCHIVED'],
    actions:['Flag as potential duplicate','Create Task: "Verify duplicate" → Agent','Block auto-validation until resolved']}
];

// ===== SCENARIOS =====
const SCENARIOS = [
  { id:'happy', icon:'✅', name:'Happy Path', desc:'Normal listing to publication flow',
    steps:[
      {state:'DRAFT',log:[{type:'trigger',msg:'Agent Sarah creates listing: 42 Coral Ave, Surfers Paradise'},{type:'action',msg:'Property record created, agentId=A001'}]},
      {state:'VALIDATING',log:[{type:'check',msg:'Validating: address ✓ price ✓ images(3) ✓ agent ✓ channels(2) ✓'},{type:'action',msg:'All fields valid — moving to review'}]},
      {state:'UNDER_REVIEW',log:[{type:'action',msg:'Task created: "Review listing" → Manager Tom'},{type:'notify',msg:'Email sent to tom@agency.com.au'}],tasks:[{label:'Review listing: 42 Coral Ave',meta:'Assigned to Tom · Due in 24h'}],notifs:[{label:'New listing needs review',meta:'Email → Tom · Just now'}]},
      {state:'APPROVED',log:[{type:'trigger',msg:'Manager Tom approves listing'},{type:'action',msg:'Approval recorded, escalation timer cleared'}]},
      {state:'PUBLISHING',log:[{type:'action',msg:'Syncing to realestate.com.au... ✓'},{type:'action',msg:'Syncing to domain.com.au... ✓'}]},
      {state:'LIVE',log:[{type:'action',msg:'All channels synced successfully'},{type:'notify',msg:'Email sent to sarah@agency.com.au: "Your listing is live"'}],notifs:[{label:'Listing is live on 2 channels',meta:'Email → Sarah · Just now'}]}
    ]},
  { id:'incomplete', icon:'❌', name:'Incomplete Data', desc:'Validation catches missing fields',
    steps:[
      {state:'DRAFT',log:[{type:'trigger',msg:'Agent Mike creates listing: 7 Beach Rd, Broadbeach'},{type:'action',msg:'Property record created, agentId=A003'}]},
      {state:'VALIDATING',log:[{type:'check',msg:'Validating: address ✓ price ✗ (empty) images(0) ✗ agent ✓ channels ✓'},{type:'error',msg:'Validation FAILED — 2 missing fields'}]},
      {state:'INCOMPLETE',log:[{type:'action',msg:'Task created: "Complete listing" → Agent Mike'},{type:'notify',msg:'Email sent: "Missing: price, images"'}],tasks:[{label:'Complete listing: 7 Beach Rd',meta:'Assigned to Mike · Missing: price, images'}],notifs:[{label:'Listing incomplete — action required',meta:'Email → Mike · Just now'}]},
      {state:'VALIDATING',log:[{type:'trigger',msg:'Mike updates: price=$850,000, uploads 4 images'},{type:'check',msg:'Re-validating: all fields ✓'}]},
      {state:'UNDER_REVIEW',log:[{type:'action',msg:'Task created: "Review listing" → Manager Tom'},{type:'notify',msg:'Email sent to Manager'}],tasks:[{label:'Review listing: 7 Beach Rd',meta:'Assigned to Tom · Due in 24h'}]}
    ]},
  { id:'price', icon:'💰', name:'Price Change', desc:'Live listing price triggers re-approval',
    steps:[
      {state:'LIVE',log:[{type:'trigger',msg:'Listing 42 Coral Ave is LIVE at $1,200,000'},{type:'check',msg:'Agent Sarah updates price to $980,000'}]},
      {state:'LIVE',log:[{type:'check',msg:'Price change: -18.3% (exceeds 10% threshold)'},{type:'trigger',msg:'Rule 3 triggered: Price Change Re-Approval'}]},
      {state:'UNDER_REVIEW',log:[{type:'action',msg:'Status reverted to UNDER_REVIEW'},{type:'action',msg:'Task: "Re-approve price change" → Manager Tom'},{type:'notify',msg:'Email to Tom: "$1.2M → $980K (-18.3%)"'}],tasks:[{label:'Re-approve price: 42 Coral Ave',meta:'$1,200,000 → $980,000 (-18.3%)'}],notifs:[{label:'Price change needs re-approval',meta:'Email → Tom · Just now'}]},
      {state:'APPROVED',log:[{type:'trigger',msg:'Manager Tom approves new price'},{type:'action',msg:'Price change logged in history'}]},
      {state:'PUBLISHING',log:[{type:'action',msg:'Re-syncing to realestate.com.au... ✓'},{type:'action',msg:'Re-syncing to domain.com.au... ✓'}]},
      {state:'LIVE',log:[{type:'action',msg:'Listing re-published at $980,000'},{type:'notify',msg:'Email: "Price updated across all channels"'}]}
    ]},
  { id:'timeout', icon:'⏰', name:'Approval Timeout', desc:'24h escalation to senior manager',
    steps:[
      {state:'UNDER_REVIEW',log:[{type:'trigger',msg:'Listing 15 Palm St submitted for review'},{type:'action',msg:'Assigned to Manager Tom, timer started'}]},
      {state:'UNDER_REVIEW',log:[{type:'check',msg:'⏱ 24 hours elapsed — no response from Tom'},{type:'trigger',msg:'Rule 2 triggered: Escalation'}]},
      {state:'UNDER_REVIEW',log:[{type:'action',msg:'Escalated to Senior Manager Diana'},{type:'notify',msg:'Slack → Diana: "Escalated: 15 Palm St (24h timeout)"'}],tasks:[{label:'ESCALATED: Review 15 Palm St',meta:'Reassigned to Diana · Was: Tom'}],notifs:[{label:'Listing escalated (timeout)',meta:'Slack → Diana · Just now'}]},
      {state:'APPROVED',log:[{type:'trigger',msg:'Diana approves listing'},{type:'action',msg:'Escalation resolved, normal flow resumes'}]}
    ]},
  { id:'duplicate', icon:'🔁', name:'Duplicate Detection', desc:'Same address flagged before validation',
    steps:[
      {state:'DRAFT',log:[{type:'trigger',msg:'Agent Jake creates listing: 42 Coral Ave, Surfers Paradise'},{type:'check',msg:'Checking for duplicates...'}]},
      {state:'DRAFT',log:[{type:'error',msg:'DUPLICATE FOUND: 42 Coral Ave already exists (status: LIVE, agent: Sarah)'},{type:'trigger',msg:'Rule 6 triggered: Duplicate Detection'}]},
      {state:'DRAFT',log:[{type:'action',msg:'Auto-validation BLOCKED until resolved'},{type:'action',msg:'Task: "Verify duplicate listing" → Agent Jake'}],tasks:[{label:'Verify duplicate: 42 Coral Ave',meta:'Existing listing by Sarah · Status: LIVE'}],notifs:[{label:'Potential duplicate flagged',meta:'Email → Jake · Just now'}]},
      {state:'DRAFT',log:[{type:'trigger',msg:'Jake confirms: this is a duplicate — listing deleted'},{type:'action',msg:'Duplicate record removed, audit log updated'}]}
    ]}
];

// ===== DASHBOARD DATA =====
const KPI_DATA = [
  {icon:'🏠',value:47,label:'Active Listings',change:'+3 this week',dir:'up'},
  {icon:'⏳',value:8,label:'Pending Approvals',change:'2 escalated',dir:'down'},
  {icon:'📊',value:'1.4d',label:'Avg. Days to Approve',change:'-0.3d vs last month',dir:'up'},
  {icon:'✅',value:'96%',label:'Channel Sync Rate',change:'+2% this week',dir:'up'}
];

const STATUS_CHART = [
  {label:'Live',count:23,pct:49,color:'#34d399'},
  {label:'Under Review',count:8,pct:17,color:'#fbbf24'},
  {label:'Draft',count:6,pct:13,color:'#4a4f5e'},
  {label:'Publishing',count:4,pct:9,color:'#50c8dc'},
  {label:'Sold (30d)',count:4,pct:9,color:'#a78bfa'},
  {label:'Incomplete',count:2,pct:4,color:'#fb923c'}
];

const BOTTLENECKS = [
  {rank:'critical',name:'Approval Queue',detail:'8 listings waiting, 2 escalated',metric:'8'},
  {rank:'warning',name:'Incomplete Listings',detail:'2 listings missing images/price',metric:'2'},
  {rank:'ok',name:'Channel Sync',detail:'All channels operational',metric:'OK'}
];

const CHANNELS = [
  {name:'realestate.com.au',status:'synced',count:23},
  {name:'domain.com.au',status:'synced',count:21},
  {name:'Agency Website',status:'pending',count:18},
  {name:'Social Media',status:'error',count:12}
];

// ===== OVERVIEW CAPABILITIES =====
const CAPABILITIES = [
  {num:'01',title:'Business Process Breakdown',desc:'Decompose complex real estate operations into clear, structured logic.'},
  {num:'02',title:'Relational Data Modelling',desc:'Design table structures with proper relationships, foreign keys, and data integrity.'},
  {num:'03',title:'Lifecycle State Design',desc:'Map every listing through a defined state machine with entry/exit conditions.'},
  {num:'04',title:'Trigger / Condition / Action Automation',desc:'Build rule-based automations that handle real-world workflow logic.'},
  {num:'05',title:'Platform Mapping',desc:'Translate system designs into Airtable bases and Monday.com boards.'},
  {num:'06',title:'Client-Ready Handover Documentation',desc:'Prepare systems for handover with clear docs, checklists, and training notes.'}
];

// ===== PLATFORM MAPPING =====
const AIRTABLE_TABLES = [
  {icon:'🏠',name:'Properties',map:'Primary table'},
  {icon:'👤',name:'Agents',map:'Linked records'},
  {icon:'✓',name:'Approvals',map:'Linked to Properties'},
  {icon:'📋',name:'Tasks',map:'Kanban view'},
  {icon:'📡',name:'Channels',map:'Lookup field'},
  {icon:'🔔',name:'Notifications',map:'Automations log'}
];
const MONDAY_BOARDS = [
  {icon:'📊',name:'Listing Pipeline',map:'Status column + Timeline'},
  {icon:'✅',name:'Approval Queue',map:'Person + Status columns'},
  {icon:'📡',name:'Channel Publishing',map:'Integration column'},
  {icon:'📋',name:'Task Ownership',map:'Subitems + Assignee'},
  {icon:'⚠️',name:'Escalations',map:'Priority + Date column'}
];
const PLATFORM_AUTOMATIONS = [
  {trigger:'New Airtable record created',action:'Monday.com task auto-created in Listing Pipeline'},
  {trigger:'Approval status changed → Approved',action:'Notify manager via Slack + update Monday status'},
  {trigger:'Channel sync returns error',action:'Create escalation task in Monday.com Escalations board'},
  {trigger:'Price change > 10% on live listing',action:'Trigger re-approval workflow in Airtable + Monday'},
  {trigger:'Listing marked as Sold',action:'Archive in Airtable, generate report, remove from channels'},
  {trigger:'Approval pending > 24 hours',action:'Auto-escalate in Monday.com + Slack notification'}
];

// ===== HANDOVER NOTES =====
const HANDOVER_SECTIONS = [
  {icon:'📌',title:'Workflow Purpose',
   content:'This system automates the complete lifecycle of a real estate property listing — from initial creation by an agent through validation, manager approval, multi-channel publication, price changes, sale completion, and archival. It replaces manual spreadsheet tracking with structured, rule-based automation.'},
  {icon:'🗂️',title:'Tables / Boards Used',
   items:['Airtable: Properties, Agents, Approvals, Tasks, Channels, Notifications','Monday.com: Listing Pipeline, Approval Queue, Channel Publishing, Task Ownership, Escalations','Data synced via Malcolm middleware between Airtable ↔ Monday.com']},
  {icon:'⚡',title:'Automation Rules Summary',
   items:['Rule 1: Auto-validate listing completeness on submit','Rule 2: Escalate approval after 24h timeout','Rule 3: Re-trigger approval on price change >10%','Rule 4: Auto-publish to selected channels on approval','Rule 5: Post-sale cleanup, reporting, and archival','Rule 6: Duplicate listing detection and blocking']},
  {icon:'👥',title:'Owner Responsibilities',
   items:['Agent: Create listings, upload media, update prices, mark as sold','Manager: Review and approve listings within 24h','Senior Manager: Handle escalated approvals','Admin: Monitor dashboard, resolve sync errors, manage channel integrations'],
   tags:[{text:'Agent',cls:'owner'},{text:'Manager',cls:'owner'},{text:'Admin',cls:'owner'}]},
  {icon:'⚠️',title:'Known Edge Cases',
   items:['Price change <10% on live listing: auto-syncs without re-approval','Price change >10% on live listing: requires re-approval','Approval timeout at 24h: escalates to Senior Manager','Approval timeout at 48h: escalates to Director (Critical)','Duplicate address detection: blocks validation until manually resolved','Agent departure: all active listings auto-reassigned to team Manager','Channel API failure: 3 retries at 5min / 15min / 60min intervals','Buyer withdrawal after Sold: status reverts to Live, channels re-synced'],
   tags:[{text:'Edge case',cls:'edge'},{text:'Edge case',cls:'edge'}]},
  {icon:'✅',title:'Testing Checklist',
   items:['Happy path: Draft → Live in under 2 minutes','Incomplete listing correctly blocked from review','Price change >10% triggers re-approval','Price change <10% auto-syncs without approval','24h escalation fires correctly','Duplicate detection blocks validation','Channel sync failures retry correctly','Sold workflow removes from all channels','Archived listings excluded from active dashboards'],
   tags:[{text:'QA',cls:'test'}]},
  {icon:'📚',title:'Client Training Notes',
   items:['Agents only need to learn the listing creation form — validation is automatic','Managers receive email/Slack notifications when reviews are needed','The dashboard shows real-time bottleneck analysis — check it weekly','If a channel shows "Error" status, contact admin — do not re-publish manually','Price changes on live listings will pause publication until re-approved','The system auto-archives sold listings after 30 days — no manual cleanup needed'],
   tags:[{text:'Training',cls:'train'}]}
];

// ===== CRM MOCK DATA =====
const CRM_PROPERTIES = [
  {id:'P-001',address:'42 Coral Ave',suburb:'Surfers Paradise',price:'$1,250,000',beds:4,baths:2,status:'Live',agent:'Sarah K.',channels:'REA, Domain',updated:'2h ago'},
  {id:'P-002',address:'7 Beach Rd',suburb:'Broadbeach',price:'$850,000',beds:3,baths:2,status:'Under Review',agent:'Mike T.',channels:'REA',updated:'5h ago'},
  {id:'P-003',address:'15 Palm St',suburb:'Burleigh Heads',price:'$1,680,000',beds:5,baths:3,status:'Approved',agent:'Sarah K.',channels:'REA, Domain, Web',updated:'1d ago'},
  {id:'P-004',address:'88 Riverside Dr',suburb:'Robina',price:'$720,000',beds:3,baths:1,status:'Draft',agent:'Jake L.',channels:'—',updated:'3h ago'},
  {id:'P-005',address:'3/21 Marine Pde',suburb:'Coolangatta',price:'$595,000',beds:2,baths:1,status:'Live',agent:'Emma W.',channels:'REA, Domain',updated:'3d ago'},
  {id:'P-006',address:'9 Harbour View',suburb:'Main Beach',price:'$2,100,000',beds:5,baths:4,status:'Sold',agent:'Sarah K.',channels:'—',updated:'1w ago'},
  {id:'P-007',address:'45 Hinterland Way',suburb:'Mudgeeraba',price:'$980,000',beds:4,baths:2,status:'Incomplete',agent:'Mike T.',channels:'—',updated:'6h ago'},
  {id:'P-008',address:'12 Ocean Blvd',suburb:'Mermaid Beach',price:'$1,450,000',beds:4,baths:3,status:'Publishing',agent:'Emma W.',channels:'REA (syncing)',updated:'10m ago'}
];

const CRM_TASKS = [
  {id:'T-001',task:'Review listing: 7 Beach Rd',status:'Open',priority:'High',assignee:'Tom D.',due:'Today',type:'Review'},
  {id:'T-002',task:'Complete listing: 45 Hinterland Way',status:'Open',priority:'Medium',assignee:'Mike T.',due:'Today',type:'Fix'},
  {id:'T-003',task:'Re-approve price: 42 Coral Ave',status:'Done',priority:'High',assignee:'Tom D.',due:'Yesterday',type:'Review'},
  {id:'T-004',task:'Post-sale follow-up: 9 Harbour View',status:'Open',priority:'Low',assignee:'Sarah K.',due:'In 5 days',type:'Follow-up'},
  {id:'T-005',task:'Verify duplicate: 12 Ocean Blvd',status:'Open',priority:'High',assignee:'Emma W.',due:'Today',type:'Verify'},
  {id:'T-006',task:'Review listing: 15 Palm St',status:'Done',priority:'Medium',assignee:'Tom D.',due:'2 days ago',type:'Review'},
  {id:'T-007',task:'Upload photos: 88 Riverside Dr',status:'Open',priority:'Medium',assignee:'Jake L.',due:'Tomorrow',type:'Fix'}
];

const CRM_AUTO_LOG = [
  {time:'09:42',rule:'Auto-Validate',trigger:'P-008 submitted',result:'✓ Pass',detail:'All fields valid → moved to Publishing',type:'success'},
  {time:'09:38',rule:'Price Change Re-Approval',trigger:'P-001 price updated',result:'⚠ Triggered',detail:'$1.4M → $1.25M (−10.7%) → sent to review',type:'warning'},
  {time:'09:15',rule:'Auto-Validate',trigger:'P-007 submitted',result:'✗ Fail',detail:'Missing: images (0), price empty',type:'error'},
  {time:'08:50',rule:'Auto Multi-Channel Publish',trigger:'P-003 approved',result:'✓ Syncing',detail:'REA ✓ Domain ✓ Website ⏳',type:'success'},
  {time:'08:30',rule:'Approval Timeout',trigger:'P-002 pending 26h',result:'⚠ Escalated',detail:'Escalated from Tom to Senior Manager Diana',type:'warning'},
  {time:'Yesterday',rule:'Sold Archive',trigger:'P-006 marked sold',result:'✓ Processed',detail:'Removed from channels, report generated',type:'success'},
  {time:'Yesterday',rule:'Duplicate Detection',trigger:'P-008 created',result:'✓ Clear',detail:'No duplicate found at 12 Ocean Blvd',type:'success'}
];
