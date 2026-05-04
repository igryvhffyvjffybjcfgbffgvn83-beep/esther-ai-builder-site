export type LabGroup = "LIVE" | "DEMO" | "NEXT";

export type LabStatus =
  | "Live Product"
  | "Building"
  | "Experiment"
  | "Functional Prototype"
  | "Developer Prototype"
  | "Coming Soon";

export type LabItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  group: LabGroup;
  status: LabStatus;
  statusLabel: string;
  domainLabel: string;
  type: string;
  problem: string;
  tool: string;
  href: string | null;
  ctaLabel: string;
  isFeatured: boolean;
  isExternal: boolean;
  screenshot: string | null;
};

export const labGroupOrder = ["LIVE", "DEMO", "NEXT"] as const;

export const labGroupLabels: Record<LabGroup, string> = {
  LIVE: "LIVE",
  DEMO: "DEMO",
  NEXT: "NEXT",
};

export const labItems: LabItem[] = [
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
    description: "Started because I couldn't get my own resume to match the jobs I wanted. Live on the App Store.",
    href: null,
    ctaLabel: "Coming soon",
    isFeatured: true,
    isExternal: true,
    screenshot: "/images/lab/tailorcv.png",
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
    description: "Less judging, more guiding. The vibe is closer to a friend behind the camera than an AI critic.",
    href: null,
    ctaLabel: "Coming soon",
    isFeatured: true,
    isExternal: false,
    screenshot: "/images/lab/justphoto.png",
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
    tool: "An AI feedback simulator that reproduces realistic user decisions and returns structured signals.",
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
    tool: "A local visual loop that holds requirements, implementation, on-device testing, and delivery in one place.",
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
];

export function getLabItemsByGroup(group: LabGroup) {
  return labItems.filter((item) => item.group === group);
}
