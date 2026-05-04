import { contactEmail, footerLinks, headerLinks, links } from "./links";

export const site = {
  name: "Esther",
  domain: "estherbuilds.com",
  lastUpdated: "2026-05-03",
  links,
  header: {
    links: headerLinks,
  },
  hero: {
    title: "Esther.",
    headline: "Building in public.",
    thesis: "I turn real friction into tools.",
    productLines: [
      "Job applications I couldn't get right → a resume AI.",
      "Photos I couldn't pose for → a photography app.",
      "User feedback I couldn't get → a simulation plugin.",
    ],
    proof: "Five products. Different domains. Same method.",
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
  },
  currentlyBuilding: {
    title: "Currently Building",
    week: "Week of 2026-05-03",
    intro: "This week:",
    items: [
      "→ Shipping the web demo for Just Photo.",
      "→ Refining TailorCV's match score after first user feedback.",
      "→ Writing the first essay for this site.",
    ],
    ongoing: "Ongoing: turning every real friction into a small public tool.",
    stats: [
      { value: "5", label: "Products" },
      { value: "1", label: "Live" },
      { value: "3", label: "Demos" },
      { value: "Public", label: "Build mode" },
    ],
  },
  manifesto: {
    title: "What I'm building toward",
    paragraphs: [
      "Most of my products started the same way.",
      "I'd run into a problem.\nGet frustrated.\nTry to fix it with what already exists.\nFail.\nThen quietly think:\nsomeone should make a tool for this.",
      "Eventually I realized —\nthat someone could be me.",
      "I'm not a traditional developer.\nI don't have a CS background.\nBut I have AI now,\nand I have problems —\nmy own and other people's.",
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
  },
  aboutPage: {
    title: "About Esther",
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
  footer: {
    microcopy: "Made by Esther, with AI, tomatoes, and too many open tabs.",
    links: footerLinks,
    lastUpdatedLabel: "Last updated:",
    copyright: "© 2026 Esther · estherbuilds.com",
  },
} as const;
