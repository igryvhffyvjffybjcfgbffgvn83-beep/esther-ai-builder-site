export type BuildLogEntry = {
  id: string;
  date: string;
  label: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

export const buildLogEntries: BuildLogEntry[] = [
  {
    id: "2026-05-07-auto-promo-recorder",
    date: "2026-05-07",
    label: "Today",
    title: "Built an automatic screen-recording promo plugin for my own software.",
    summary:
      "Used Codex + HyperFrames to turn raw app recordings into structured short-form product promo videos.",
    tags: ["Codex", "HyperFrames", "Video Automation"],
    href: "/lab/auto-promo-recorder",
  },
  {
    id: "2026-05-06-tailorcv-demo",
    date: "2026-05-06",
    label: "Yesterday",
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
];

export const latestBuildLogEntries = buildLogEntries.slice(0, 3);
