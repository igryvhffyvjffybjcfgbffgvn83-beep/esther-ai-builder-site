import { contactEmail, links } from "../links";

export const en = {
  site: {
    name: "Esther",
    domain: "estherbuilds.com",
    lastUpdated: "2026-05-14",
    links,
    metadata: {
      title: "Esther — AI Builder Lab",
      description:
        "I just turn the problems I run into into tools. A public lab of AI products, demos, and experiments built by a non-coder learning by shipping.",
    },
    header: {
      ariaHome: "Esther home",
      languageLabel: "Choose language",
      mobileCtaLabel: "Subscribe",
      links: [
        { label: "The Lab", href: links.lab },
        { label: "Build Log", href: links.buildLog },
        { label: "Manifesto", href: links.manifesto },
        { label: "About", href: links.about },
        { label: "Subscribe", href: links.subscribe },
      ],
    },
    footer: {
      microcopy: "Made by Esther, with AI and too many open tabs.",
      lastUpdatedLabel: "Last updated:",
      copyright: "© 2026 Esther · estherbuilds.com",
      comingSoonLabel: "Coming soon",
      links: [
        { label: "Build Log", href: links.buildLog },
        { label: "X", href: links.x, isExternal: true },
        { label: "LinkedIn", href: links.linkedIn, isExternal: true },
        { label: "Email", href: links.email },
        { label: "App Store", href: links.appStore, isExternal: true },
      ],
    },
  },
  home: {
    hero: {
      title: "Esther.",
      headline: "Building in public.",
      thesis: "I turn real friction into tools.",
      productLines: [
        "Job applications I couldn't get right → a resume AI.",
        "Photos I couldn't pose for → a photography app.",
        "User feedback I couldn't get → a simulation plugin.",
      ],
      proof: "Nine projects. Different domains. Same method.",
      builderLines: [
        "I'm a non-coder learning by shipping —",
        "building in public, occasionally panicking,",
        "but always shipping.",
      ],
      primaryCta: {
        label: "Subscribe to the Build",
        href: links.subscribe,
      },
      secondaryCta: {
        label: "Explore the Lab →",
        href: links.lab,
      },
      contactLine: "Open to AI product collaborations.",
      contactCta: {
        label: "Get in touch",
        href: links.email,
      },
    },
    productMap: {
      title: "Same method, different problems.",
      problemLabel: "Problem",
      toolLabel: "Tool",
    },
    currentlyBuilding: {
      title: "Currently Building",
      eyebrow: "Latest builder log",
      intro: "A lightweight running log of what I shipped, tested, and learned.",
      relatedDemoLabel: "Open related demo →",
      cta: {
        label: "View full build log →",
        href: links.buildLog,
      },
      stats: [
        { value: "10", label: "Projects" },
        { value: "1", label: "Live" },
        { value: "8", label: "Demos" },
        { value: "Public", label: "Build mode" },
      ],
    },
    lab: {
      eyebrow: "The Lab",
      title: "Products, prototypes, and experiments.",
    },
    manifesto: {
      title: "What I'm building toward",
      paragraphs: [
        "Most of my products start with a problem.",
        "First, I try to solve it the normal way.\nThen I notice the same problem keeps coming back —\nfor me, or for other people.",
        "At that point, it stops being just a problem.\nIt becomes a pattern.",
        "And once something becomes a pattern,\nI start thinking about how to turn the solution into a tool —\nso the next time, it takes less effort,\nless time,\nand fewer repeated decisions.",
        "I'm not a traditional developer.\nI don't have a CS background.",
        "But I have AI now,\nand I pay attention to problems.",
        "That turns out to be enough.",
      ],
    },
    subscribe: {
      title: "Newsletter coming soon — say hi by email for now.",
      email: contactEmail,
      href: links.email,
    },
    aboutShort: {
      title: "About Esther",
      paragraphs: [
        "I'm Esther, a non-coder builder from China, currently building between places.",
        "Most of what I build started as something I personally got stuck on:\na resume I couldn't tailor, a photo I couldn't pose for,\na product loop I couldn't debug.",
        "The pattern keeps repeating, so I keep building.",
      ],
      cta: {
        label: "→ Read the longer version",
        href: links.about,
      },
      comingSoonLabel: "Coming soon",
    },
    workWithMe: {
      title: "Work with me",
      intro: "I'm open to thoughtful conversations around:",
      items: [
        "→ AI product collaborations",
        "→ early-stage product experiments",
        "→ practical AI workflows",
        "→ career tools",
        "→ photography and self-expression products",
      ],
      closing: "If something here resonates, say hi.",
      cta: {
        label: "Say hi",
        href: links.email,
      },
    },
  },
  about: {
    metadata: {
      title: "About Esther — AI Builder Lab",
      description:
        "About Esther and the products, demos, and builder principles behind Esther AI Builder Lab.",
    },
    eyebrow: "Esther Builds",
    title: "About Esther",
    ctas: [
      { label: "Explore the Lab", href: links.lab },
      { label: "Say hi", href: links.email },
    ],
    paragraphs: [
      "I'm Esther — a non-coder builder from China,\nlearning product, code, and distribution by shipping real things.",
      "I used to think building software was something only engineers did.\nThen AI changed the distance between having a problem\nand making a tool for it.",
      "So I started building. Mostly from things that personally annoyed me —\nresumes I couldn't tailor, photos I couldn't pose for,\nastrology reports I couldn't decode, AI workflows that kept breaking.",
      "I'm not trying to build a clean startup arc.\nI'm just building from things that actually bothered me.",
      "Some of these turned into products.\nSome are still rough demos.\nA few will probably never go anywhere —\nand that's fine, because each one taught me how to take\nsomething messy and make it slightly more usable.",
      "This site is where I keep the receipts:\nthe products that worked,\nthe demos that are still rough,\nthe ideas I'm still testing,\nand the notes I'm collecting along the way.",
    ],
    principles: {
      title: "How I build",
      items: [
        {
          title: "Start from real friction.",
          body: "I don't begin with market maps. I begin with something\nthat bothered me enough to make a tool for it.",
        },
        {
          title: "Make the first version visible.",
          body: "A working demo teaches me more than a perfect idea.",
        },
        {
          title: "Keep the human feeling.",
          body: "The best AI tools shouldn't feel like machines judging people.\nThey should feel like someone helping you move forward.",
        },
        {
          title: "Ship before it feels ready.",
          body: "That's the whole point. Confusion turns into clarity faster\nwhen something is already in front of you.",
        },
      ],
    },
  },
  buildLog: {
    metadata: {
      title: "Build Log — Esther AI Builder Lab",
      description:
        "A running log of what Esther is building, shipping, testing, and learning in public.",
    },
    eyebrow: "Build Log",
    title: "Daily notes from the lab.",
    intro:
      "Lightweight receipts from what I shipped, tested, and learned while turning real friction into tools.",
    relatedDemoLabel: "Open related demo",
    entries: [
      {
        id: "2026-05-14-job-radar-demo",
        date: "2026-05-14",
        label: "Today",
        title: "Built an automated job hunting client.",
        summary:
          "Added a desensitized product demo for a client that scans job boards, scores role fit, and generates tailored application materials.",
        tags: ["Career AI", "Job Search", "Product Demo"],
        href: "/lab/job-radar",
      },
      {
        id: "2026-05-12-process-improvement-tracker-demo",
        date: "2026-05-12",
        label: "Today",
        title: "Added a closed-loop process improvement tracker case study.",
        summary:
          "Imported the Business Process Improvement Tracker demo and framed it as a BA portfolio project: intake scoring, stage-gate governance, As-Is and To-Be mapping, delivery evidence, benefits realisation, and post-implementation review.",
        tags: ["Business Analysis", "Process Improvement", "Stage-Gate Governance"],
        href: "/lab/process-improvement-tracker",
      },
      {
        id: "2026-05-12-employment-dashboard-demo",
        date: "2026-05-12",
        label: "Today",
        title: "Added an employment services KPI and data governance dashboard demo.",
        summary:
          "Imported a working BI prototype into the Lab and wrapped it with a project page that explains the BA lifecycle behind it: stakeholder mapping, requirements traceability, journey funnel, data quality monitoring, regional drilldown, UAT, and DEWR reporting.",
        tags: ["Business Analysis", "BI Dashboard", "Data Governance"],
        href: "/lab/employment-dashboard",
      },
      {
        id: "2026-05-09-auto-promo-current-cut-review",
        date: "2026-05-09",
        label: "Today",
        title: "Reframed the promo video pipeline demo as a current cut review workflow.",
        summary:
          "Updated the demo to show how a generated 45-second cut moves through review, QA frames, and editorial iteration. A useful automation demo should show what the system produced and what still needs human judgment.",
        tags: ["Video Automation", "Review Workflow", "HyperFrames"],
        href: "/demos/auto-promo-recorder/index.html",
      },
      {
        id: "2026-05-09-real-estate-workflow-demo",
        date: "2026-05-09",
        label: "Today",
        title: "Built a workflow automation demo around a real estate listing process.",
        summary:
          "Designed structured data, lifecycle states, and automation rules to replace a messy spreadsheet-driven operation. Workflow automation is less about AI and more about making operations clear enough for a team to actually use.",
        tags: ["Workflow Automation", "Systems Design", "Operations"],
        href: "/demos/hicaliber-workflow/index.html",
      },
      {
        id: "2026-05-07-auto-promo-recorder",
        date: "2026-05-07",
        label: "This week",
        title: "Built an automatic screen-recording promo plugin for my own software.",
        summary:
          "Used Codex + HyperFrames to turn raw app recordings into structured short-form product promo videos.",
        tags: ["Codex", "HyperFrames", "Video Automation"],
        href: "/lab/auto-promo-recorder",
      },
      {
        id: "2026-05-06-tailorcv-demo",
        date: "2026-05-06",
        label: "This week",
        title: "Shipped the TailorCV web demo page.",
        summary:
          "Turned a 9:16 product recording into a web walkthrough so visitors can understand the iOS product before opening the App Store.",
        tags: ["TailorCV", "Web Demo", "Career AI"],
        href: "/lab/tailorcv",
      },
      {
        id: "2026-05-03-builder-site",
        date: "2026-05-03",
        label: "This week",
        title: "Launched the first version of this builder site.",
        summary:
          "Set up the personal brand hub, Lab structure, demo imports, About page, and the public building rhythm.",
        tags: ["Builder Site", "The Lab", "Personal Brand"],
        href: "/#lab",
      },
    ],
  },
  lab: {
    groupOrder: ["LIVE", "DEMO", "NEXT"],
    groupLabels: {
      LIVE: "LIVE",
      DEMO: "DEMO",
      NEXT: "NEXT",
    },
    items: [
      {
        id: "tailorcv",
        title: "TailorCV",
        tagline: "A resume AI for role-specific self-presentation.",
        status: "Live Product",
        statusLabel: "Live",
        domainLabel: "Career",
        group: "LIVE",
        type: "Product",
        category: "Career AI",
        problem: "Job applications are hard to tailor for each role.",
        tool: "An AI that matches your real experience to the JD and rewrites your resume to fit.",
        description:
          "Started because I couldn't get my own resume to match the jobs I wanted. Live on the App Store.",
        href: "/lab/tailorcv",
        ctaLabel: "View the demo →",
        isFeatured: true,
        isExternal: false,
        screenshot: "/demos/tailorcv/poster.jpg",
      },
      {
        id: "job-radar",
        title: "Automated Job Hunting Client",
        tagline: "Finds roles, scores fit, and generates tailored applications.",
        status: "Product Demo",
        statusLabel: "Product Demo",
        domainLabel: "Career",
        group: "DEMO",
        type: "Product Demo",
        category: "Career AI / Automation",
        problem:
          "Job hunting turns into a spreadsheet of tabs, repeated screening, and rewritten applications.",
        tool:
          "A desktop client that scans job boards, scores each role, and generates a tailored application package.",
        description:
          "Built as a real workflow for searching and applying with more focus and less repetitive rewriting.",
        href: "/lab/job-radar",
        ctaLabel: "Watch the demo →",
        isFeatured: false,
        isExternal: false,
        screenshot: "/demos/job-radar/poster-en.jpg",
      },
      {
        id: "justphoto",
        title: "JustPhoto",
        tagline: "A camera that coaches you through the shot.",
        status: "Building",
        statusLabel: "Building",
        domainLabel: "Camera",
        group: "NEXT",
        type: "Product",
        category: "Camera / Self-expression",
        problem: "I never know how to pose or direct a photo.",
        tool: "A camera that coaches you through the shot — how to stand, turn, and move — in real time.",
        description:
          "Less judging, more guiding. The vibe is closer to a friend behind the camera than an AI critic.",
        href: null,
        ctaLabel: "Coming soon",
        isFeatured: true,
        isExternal: false,
        screenshot: "/images/lab/justphoto.png",
      },
      {
        id: "auto-promo-recorder",
        title: "Promo Video Pipeline",
        tagline: "A current-cut review workflow for generated product videos.",
        status: "Current Cut Review",
        statusLabel: "Current Cut Review",
        domainLabel: "Video Review",
        group: "DEMO",
        type: "Demo",
        category: "Video Automation",
        problem:
          "Generated product videos still need a clear review surface before they are ready to publish.",
        tool:
          "A review-ready workflow that shows the 45-second cut, QA frames, generated scene notes, and remaining editorial issues.",
        description:
          "Reframed from a final-output showcase into a current cut review: what was generated, what is inspectable, and what still needs judgment.",
        href: "/demos/auto-promo-recorder/index.html",
        ctaLabel: "Review the cut →",
        isFeatured: false,
        isExternal: false,
        screenshot: null,
      },
      {
        id: "real-estate-workflow",
        title: "Real Estate Workflow Automation",
        tagline: "A systems demo for turning listing operations into a clear workflow.",
        status: "Workflow Demo",
        statusLabel: "Workflow Demo",
        domainLabel: "Operations",
        group: "DEMO",
        type: "Demo",
        category: "Workflow Automation",
        problem:
          "Real estate listing operations can sprawl across spreadsheets, approvals, channel updates, and exception handling.",
        tool:
          "An interactive demo that models the data, lifecycle states, automation rules, edge cases, and operational dashboard.",
        description:
          "Built around a property listing process to show how messy operations become structured, usable workflows.",
        href: "/demos/hicaliber-workflow/index.html",
        ctaLabel: "Try the demo →",
        isFeatured: false,
        isExternal: false,
        screenshot: null,
      },
      {
        id: "employment-dashboard",
        title: "Employment Services Outcomes Dashboard",
        tagline: "A closed-loop KPI, data quality, and compliance reporting demo.",
        status: "BA Dashboard Demo",
        statusLabel: "BA Demo",
        domainLabel: "Employment Services",
        group: "DEMO",
        type: "Demo",
        category: "Business Analysis / BI",
        problem:
          "A national employment services team needs governed KPI reporting instead of monthly spreadsheet collation.",
        tool:
          "An interactive dashboard that connects stakeholder needs, BRD traceability, journey funnel analytics, data quality controls, regional drilldowns, and DEWR reporting.",
        description:
          "Built to show how a Business Analyst moves from messy operations to measurable requirements, working BI, UAT, and reporting value.",
        href: "/lab/employment-dashboard",
        ctaLabel: "Open the case study →",
        isFeatured: false,
        isExternal: false,
        screenshot: null,
      },
      {
        id: "process-improvement-tracker",
        title: "Business Process Improvement Tracker",
        tagline: "A closed-loop BA workflow for governed process improvements.",
        status: "BA Process Demo",
        statusLabel: "BA Demo",
        domainLabel: "Process Improvement",
        group: "DEMO",
        type: "Demo",
        category: "Business Analysis / Process Improvement",
        problem:
          "Operational improvement requests are scattered across email, meeting notes, and Slack with no consistent owner, stage, or benefits validation.",
        tool:
          "A stage-gate tracker that captures, scores, governs, documents, delivers, measures, and reviews process improvements.",
        description:
          "Built to show how a Business Analyst turns operational friction into prioritised, measured, reviewed change.",
        href: "/lab/process-improvement-tracker",
        ctaLabel: "Open the case study →",
        isFeatured: false,
        isExternal: false,
        screenshot: null,
      },
      {
        id: "exact-transit",
        title: "Exact Transit",
        tagline: "A transparent transit timeline for self-reflection.",
        status: "Experiment",
        statusLabel: "Experiment",
        domainLabel: "Astrology",
        group: "DEMO",
        type: "Demo",
        category: "Astrology / Timeline",
        problem: "Astrology reports are vague and hard to decode.",
        tool: "A transparent timeline that shows the aspects, orbs, and scores behind each date.",
        description: "Built to make timing signals readable instead of mystical.",
        href: "/demos/exact-transit/index.html",
        ctaLabel: "Try the demo →",
        isFeatured: false,
        isExternal: false,
        screenshot: "/images/lab/exact-transit.png",
      },
      {
        id: "simuser-loop",
        title: "SimUser Loop",
        tagline: "AI feedback simulation for early product builders.",
        status: "Functional Prototype",
        statusLabel: "Prototype",
        domainLabel: "Product Feedback",
        group: "DEMO",
        type: "Prototype",
        category: "Product Feedback",
        problem: "Early products don't have enough real users to learn from.",
        tool:
          "An AI feedback simulator that reproduces realistic user decisions and returns structured signals.",
        description: "For builders who need to learn before they have traction.",
        href: "/demos/simuser-loop/index.html",
        ctaLabel: "Try the demo →",
        isFeatured: false,
        isExternal: false,
        screenshot: "/images/lab/simuser-loop.png",
      },
      {
        id: "orchestrator-telemetry",
        title: "Orchestrator + Telemetry Bridge",
        tagline: "A visible loop for fragmented AI coding workflows.",
        status: "Developer Prototype",
        statusLabel: "Prototype",
        domainLabel: "Dev Tools",
        group: "DEMO",
        type: "Prototype",
        category: "AI Engineering Workflow",
        problem: "AI coding workflows keep breaking between planning, code, test, and fix.",
        tool:
          "A local visual loop that holds requirements, implementation, on-device testing, and delivery in one place.",
        description: "Built for the messy reality of shipping with AI agents.",
        href: "/demos/orchestrator-telemetry/index.html",
        ctaLabel: "Try the demo →",
        isFeatured: false,
        isExternal: false,
        screenshot: "/images/lab/orchestrator.png",
      },
      {
        id: "next",
        title: "What's next?",
        tagline: "The next small tool starts from the next thing that bothers me.",
        status: "Coming Soon",
        statusLabel: "Coming Soon",
        domainLabel: "Lab",
        group: "NEXT",
        type: "Placeholder",
        category: "—",
        problem: "I keep a list of things I run into.",
        tool: "The next one will come from there.",
        description: "",
        href: null,
        ctaLabel: "Coming soon",
        isFeatured: false,
        isExternal: false,
        screenshot: null,
      },
    ],
  },
  employmentDashboardPage: {
    metadata: {
      title: "Employment Services Dashboard Demo — Esther AI Builder Lab",
      description:
        "A working Business Analyst dashboard demo covering stakeholder mapping, requirements traceability, data governance, KPI monitoring, UAT, and DEWR reporting.",
    },
    backLabel: "Back to Lab",
    eyebrow: "Business Analysis / BI Dashboard",
    title: "Employment Services Outcomes Dashboard",
    description:
      "A working prototype for a national employment services organisation, designed to replace spreadsheet-heavy reporting with KPI visibility, data quality controls, and compliance-ready reporting.",
    noteTitle: "Why this belongs in the Lab",
    noteBody:
      "It is not just a chart demo. The prototype shows the BA delivery chain around the dashboard: stakeholders, BRD, data rules, UAT, operating actions, and measurable value.",
    summary: [
      {
        label: "Before",
        body: "Monthly spreadsheet collation across service sites created delay, inconsistency, and reporting risk.",
      },
      {
        label: "Process",
        body: "Map stakeholders, define traceable requirements, model the data, and build operating controls.",
      },
      {
        label: "After",
        body: "A governed dashboard with KPI trends, funnel analytics, quality monitoring, regional actions, and DEWR pack preview.",
      },
    ],
    contextEyebrow: "Project Context",
    contextTitle: "From reporting task to operating system.",
    contextBody:
      "The dashboard is framed around CoAct-style employment services operations: registrations, placements, service regions, priority cohorts, data completeness, exception queues, and quarterly government reporting. It demonstrates how requirements become visible controls rather than static documentation.",
    tags: [
      "Business Analysis",
      "Requirements Gathering",
      "Data Visualisation",
      "Data Governance",
      "Stakeholder Management",
      "Process Improvement",
      "BI Dashboard Design",
      "UAT Planning",
      "Compliance Reporting",
    ],
    demonstrates: [
      {
        title: "Stakeholder Analysis",
        body: "Power and interest mapping connects six stakeholder groups to dashboard controls and reporting needs.",
      },
      {
        title: "Requirements Traceability",
        body: "Functional requirements are linked to stakeholders, priorities, and visible dashboard features.",
      },
      {
        title: "Data Governance",
        body: "Quality score, missing-rate monitoring, duplicate detection, exception queue, and data dictionary are built into the prototype.",
      },
      {
        title: "Interactive BI",
        body: "Global filters, trend charts, journey funnel, regional map, demographic cohorts, and action registers update through live page logic.",
      },
      {
        title: "Compliance Reporting",
        body: "The report pack preview ties dashboard context, risk notes, data readiness, and DEWR-style outputs together.",
      },
      {
        title: "Delivery Framework",
        body: "Roadmap, UAT scenarios, acceptance criteria, and before-after success metrics complete the BA lifecycle.",
      },
    ],
    companionEyebrow: "Companion BA Project",
    companionTitle: "Pair it with the process improvement tracker.",
    companionBody:
      "This dashboard shows Data → Decision. The companion project shows Problem → Governed Change: intake, prioritisation, stage gates, implementation evidence, benefits tracking, and PIR.",
    companionCtaLabel: "Open companion case",
    demoEyebrow: "Live Prototype",
    demoTitle: "Explore the dashboard below.",
    demoBody:
      "The embedded demo is the original BI prototype. Use the filters, navigation, funnel stages, regional map, and report preview directly inside the page.",
    openDemoLabel: "Open full demo",
    iframeTitle: "Employment Services Outcomes Dashboard interactive demo",
  },
  processImprovementPage: {
    metadata: {
      title: "Business Process Improvement Tracker Demo — Esther AI Builder Lab",
      description:
        "A working Business Analyst process improvement demo covering problem intake, prioritisation, stage-gate governance, process mapping, BA deliverables, benefits realisation, and PIR.",
    },
    backLabel: "Back to Lab",
    eyebrow: "Business Analysis / Process Improvement",
    title: "Business Process Improvement Tracker",
    description:
      "A closed-loop BA workflow for capturing, prioritising, delivering, and validating operational process improvements.",
    noteTitle: "Why this belongs in the Lab",
    noteBody:
      "It turns BA method into a working interface: scattered improvement ideas become scored initiatives, governed stage movement, signed deliverables, measured benefits, and reusable lessons.",
    summary: [
      {
        label: "Before",
        body: "Improvement requests lived across email, meeting notes, and Slack with uneven ownership and no reliable benefits validation.",
      },
      {
        label: "Process",
        body: "Capture the issue, score business value, move through stage gates, document the change, test delivery, and review outcomes.",
      },
      {
        label: "After",
        body: "A governed improvement portfolio with visible owners, decisions, BA evidence, delivery risk, benefits, and PIR follow-up.",
      },
    ],
    contextEyebrow: "Project Context",
    contextTitle: "From scattered ideas to governed improvement delivery.",
    contextBody:
      "The tracker is framed around CoAct-style operations managing many core processes across regions. It demonstrates how a BA can run a continuous improvement program from problem intake and prioritisation through As-Is and To-Be mapping, controlled implementation, UAT, and post-implementation review.",
    tags: [
      "Business Analysis",
      "Process Improvement",
      "Stage-Gate Governance",
      "Requirements Documentation",
      "Process Mapping",
      "Benefits Realisation",
      "Stakeholder Management",
      "UAT Planning",
      "Continuous Improvement",
      "PIR",
    ],
    demonstrates: [
      {
        title: "Structured Problem Intake",
        body: "A quantified scoring model balances impact, urgency, risk, and effort before requests enter delivery.",
      },
      {
        title: "Stage-Gate Governance",
        body: "Initiatives move through Identify, Analyse, Design, Implement, Complete, and Review with explicit decision checkpoints.",
      },
      {
        title: "Process Analysis",
        body: "Interactive As-Is and To-Be maps, step detail drawers, and change-type tags make the operational shift visible.",
      },
      {
        title: "BA Deliverables Library",
        body: "Problem statements, BRDs, process maps, UAT plans, solution notes, and PIR documents are tied to stage readiness.",
      },
      {
        title: "Benefits Realisation",
        body: "Target-versus-actual tracking shows whether improvements delivered time saving, quality lift, or risk reduction.",
      },
      {
        title: "Post-Implementation Review",
        body: "The PIR panel captures user feedback, follow-up actions, sign-off status, and reusable improvement patterns.",
      },
    ],
    methodEyebrow: "BA Method",
    methodTitle: "A closed loop instead of a task list.",
    methodBody:
      "The workflow is designed around evidence and decision quality. Every initiative has a clear entry point, a prioritisation rationale, a controlled delivery path, and a review step before the change is considered complete.",
    stages: [
      {
        label: "01",
        title: "Capture and prioritise",
        body: "Standardise intake, quantify the problem, and choose which requests deserve BA delivery time.",
      },
      {
        label: "02",
        title: "Analyse and design",
        body: "Map current process pain, define requirements, compare future-state options, and prepare the change case.",
      },
      {
        label: "03",
        title: "Deliver and review",
        body: "Track gates, UAT, benefits validation, PIR outcomes, lessons learned, and reusable patterns.",
      },
    ],
    portfolioEyebrow: "Portfolio Pair",
    portfolioTitle: "Two BA projects, one lifecycle.",
    portfolioBody:
      "The employment dashboard and this process tracker are meant to sit together. One demonstrates Data → Decision. The other demonstrates Problem → Governed Change.",
    portfolioItems: [
      {
        label: "Project 1",
        title: "Employment Services Outcomes Dashboard",
        body: "Shows the analytical and governance side of BA work: KPI definition, stakeholder needs, data quality, reporting readiness, and UAT.",
        href: "/lab/employment-dashboard",
        ctaLabel: "Open dashboard case",
      },
      {
        label: "Project 2",
        title: "Business Process Improvement Tracker",
        body: "Shows the continuous improvement side: intake, prioritisation, stage-gate delivery, process mapping, benefits validation, and PIR.",
        href: null,
        ctaLabel: null,
      },
    ],
    demoEyebrow: "Live Prototype",
    demoTitle: "Explore the tracker below.",
    demoBody:
      "The embedded demo is the original closed-loop BA prototype. Use the overview, stage-gate board, methodology, benefits tracker, document centre, and PIR controls directly inside the page.",
    openDemoLabel: "Open full demo",
    iframeTitle: "Business Process Improvement Tracker interactive demo",
  },
  jobRadarPage: {
    metadata: {
      title: "Automated Job Hunting Client Demo — Esther AI Builder Lab",
      description:
        "A desensitized product demo for a job hunting client that finds roles, scores fit, and generates tailored application materials.",
    },
    backLabel: "Back to Lab",
    eyebrow: "Career AI / Job Search Automation",
    title: "Automated Job Hunting Client",
    description:
      "A real job hunting workflow that finds roles, scores fit, and generates tailored application materials from a private profile.",
    noteTitle: "Why this belongs in the Lab",
    noteBody:
      "It turns a repetitive personal workflow into a product surface: scanning, ranking, evidence matching, review, and application drafting.",
    summary: [
      {
        label: "Before",
        body: "Job search lived across tabs, spreadsheets, repeated screening, and rewritten application materials.",
      },
      {
        label: "Process",
        body: "Scheduled scans bring in roles, fit scoring prioritises the shortlist, and evidence matching grounds the draft.",
      },
      {
        label: "After",
        body: "A focused queue of roles with scores, reasons, and application materials ready for human review.",
      },
    ],
    contextEyebrow: "Product Context",
    contextTitle: "From job board chaos to a repeatable application system.",
    contextBody:
      "The client is framed around a practical job hunting loop: scan job boards, remove weak matches, compare the role against a private profile, and generate materials that can be reviewed before applying. The public demo uses sanitized data and fake candidate details.",
    tags: [
      "Career AI",
      "Job Discovery",
      "Fit Scoring",
      "Application Drafting",
      "Workflow Automation",
      "Privacy-Safe Demo",
    ],
    demonstrates: [
      {
        title: "Job Discovery",
        body: "The client turns recurring job-board checks into a structured scan instead of a manual browsing routine.",
      },
      {
        title: "Fit Scoring",
        body: "Each role gets a visible score and rationale so the user can decide where to spend application energy.",
      },
      {
        title: "Evidence Matching",
        body: "The workflow keeps application drafts tied to real experience instead of generic keyword stuffing.",
      },
      {
        title: "Application Package",
        body: "The output is shaped around the role: summary, resume angle, cover note, and review-ready next steps.",
      },
      {
        title: "Human Review",
        body: "The tool narrows the queue and prepares materials, while the final decision stays with the applicant.",
      },
      {
        title: "Desensitized Recording",
        body: "The video demonstrates the product behavior without exposing private profile details or local paths.",
      },
    ],
  },
  jobRadarDemo: {
    artifactLabel: "Product demo",
    title: "Watch the automated job search loop.",
    videoLabel: "Demo version",
    outputLabel: "Selected cut",
    asideLabel: "Job radar workflow",
    workflowLabel: "Workflow",
    workflowTitle: "What the client does",
    videos: [
      {
        id: "en",
        label: "English",
        duration: "24.5s",
        summary:
          "The English demo shows the product using sanitized SEEK-style job data and a fake candidate profile.",
      },
      {
        id: "zh",
        label: "Chinese",
        duration: "22.9s",
        summary:
          "The Chinese demo shows the same workflow with sanitized Boss Zhipin-style job data.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Scan job boards",
        body: "Scheduled runs collect relevant roles and bring them into one review surface.",
      },
      {
        number: "02",
        title: "Score fit",
        body: "The client ranks roles by requirements, evidence overlap, and practical application value.",
      },
      {
        number: "03",
        title: "Review the shortlist",
        body: "A compact queue makes it easier to choose which roles deserve attention.",
      },
      {
        number: "04",
        title: "Generate materials",
        body: "The selected role becomes a tailored application package ready for final human review.",
      },
    ],
  },
  tailorcvPage: {
    metadata: {
      title: "TailorCV Demo — Esther AI Builder Lab",
      description:
        "A web demo for TailorCV, a resume AI that matches real experience against a target job description and generates a focused, role-specific resume.",
    },
    backLabel: "Back to Lab",
    eyebrow: "Live Product / Career AI",
    title: "TailorCV",
    description:
      "TailorCV matches your real experience against a target job description and generates a focused, role-specific resume.",
    noteTitle: "Why this demo page exists",
    noteBody:
      "The product is live on iOS, but the web page gives people a fast way to understand the workflow before opening the App Store.",
    summary: [
      {
        label: "Before",
        body: "One generic resume sent to every role.",
      },
      {
        label: "Process",
        body: "Parse real experience, compare it with the JD, and choose what to emphasize.",
      },
      {
        label: "After",
        body: "A resume draft shaped around the role.",
      },
    ],
    ctaTitle: "Try TailorCV on iOS.",
    ctaBody: "The web demo is a walkthrough. The product itself is live in the App Store.",
    appStoreLabel: "View on App Store",
  },
  tailorcvDemo: {
    inputLabel: "Input",
    outputLabel: "Output",
    signalsLabel: "Resume signals",
    steps: [
      {
        id: "upload",
        label: "Upload",
        kicker: "Step 01",
        title: "Bring the messy source material together.",
        body: "The user starts with an existing resume, work notes, and the target job description instead of rewriting from a blank page.",
        input: "Old resume + notes + target JD",
        output: "A clean source bank",
        bullets: ["Resume parser", "Work history cards", "JD requirements"],
      },
      {
        id: "bank",
        label: "Extract",
        kicker: "Step 02",
        title: "Turn raw experience into reusable cards.",
        body: "TailorCV separates projects, responsibilities, skills, and measurable outcomes so the same real experience can be reused for different roles.",
        input: "Unstructured resume text",
        output: "Reusable experience cards",
        bullets: ["Project scope", "Role ownership", "Evidence phrases"],
      },
      {
        id: "match",
        label: "Match",
        kicker: "Step 03",
        title: "Compare the job against real experience.",
        body: "The product looks for the overlap between what the role asks for and what the candidate can honestly support.",
        input: "Target role requirements",
        output: "Role-specific emphasis",
        bullets: ["Skills alignment", "Keyword coverage", "Missing proof"],
      },
      {
        id: "draft",
        label: "Draft",
        kicker: "Step 04",
        title: "Generate a focused resume draft.",
        body: "The final draft reshapes the same background around the target role, while keeping the candidate's experience grounded in real material.",
        input: "Selected evidence",
        output: "Tailored resume preview",
        bullets: ["Summary rewrite", "Bullet selection", "Live preview"],
      },
    ],
  },
  autoPromoPage: {
    metadata: {
      title: "Promo Video Pipeline Demo - Esther AI Builder Lab",
      description:
        "A developer prototype that uses Codex and HyperFrames to turn real app recordings into reproducible promo videos.",
    },
    backLabel: "Back to Lab",
    eyebrow: "Developer Prototype",
    eyebrowSuffix: " / Video Automation",
    title: "Promo Video Pipeline",
    description:
      "A Codex and HyperFrames workflow that turns real product recordings into reproducible launch videos.",
    noteTitle: "Plugin workflow demo",
    noteBody:
      "The demo shows the pipeline as a compact portfolio artifact: recording, direction, composition, review, and render.",
    summary: [
      {
        label: "Input",
        body: "A real app recording with product behavior already captured.",
      },
      {
        label: "Process",
        body: "Codex translates the product constraints into a reusable video plan.",
      },
      {
        label: "Output",
        body: "HyperFrames renders a short-form draft that can be reviewed and revised.",
      },
    ],
  },
  autoPromoDemo: {
    artifactLabel: "Live artifact",
    title: "Real recording in, rendered promo out.",
    badgeLabel: "Rendered draft",
    outputLabel: "Demo output: reproducible 9:16 render",
    asideLabel: "Plugin pipeline",
    pipelineLabel: "Pipeline",
    pipelineTitle: "What the plugin demonstrates",
    steps: [
      {
        number: "01",
        title: "Capture real UI",
        body: "Start from an actual product recording, not fake screens.",
      },
      {
        number: "02",
        title: "Codex directs the cut",
        body: "Turn product constraints into a repeatable video plan.",
      },
      {
        number: "03",
        title: "Compose in HyperFrames",
        body: "Build the video as HTML, timing, and reusable layout.",
      },
      {
        number: "04",
        title: "Inspect review frames",
        body: "Use contact sheets to review the render before shipping.",
      },
      {
        number: "05",
        title: "Render variants",
        body: "Export the 9:16 draft and extend it to other platforms.",
      },
    ],
  },
  notFound: {
    title: "Looks like this page got squished.",
    intro:
      "Probably my fault. While I figure out where it went, here are some real things:",
    links: [
      { label: "→ The Lab", href: links.lab, note: "(5 products in different stages)" },
      { label: "→ The Manifesto", href: links.manifesto, note: "(why I build these)" },
      {
        label: "→ Latest update",
        href: links.subscribe,
        note: "(what I am working on this week)",
      },
    ],
    signature: "— Esther",
  },
} as const;
