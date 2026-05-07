export type LinkHref = string | null;

export type NamedLink = {
  label: string;
  href: LinkHref;
  isExternal?: boolean;
};

export const contactEmail = "hello@estherbuilds.com";

export const links = {
  home: "/",
  lab: "/#lab",
  subscribe: "/#subscribe",
  manifesto: "/#manifesto",
  about: "/about",
  buildLog: "/build-log",
  email: `mailto:${contactEmail}`,
  x: "https://x.com/tomatoteacher_",
  linkedIn: null,
  appStore: "https://apps.apple.com/app/id6764646313",
} satisfies Record<string, LinkHref>;

export const headerLinks = [
  { label: "The Lab", href: links.lab },
  { label: "Build Log", href: links.buildLog },
  { label: "Manifesto", href: links.manifesto },
  { label: "About", href: links.about },
  { label: "Subscribe", href: links.subscribe },
] satisfies NamedLink[];

export const footerLinks = [
  { label: "Build Log", href: links.buildLog },
  { label: "X", href: links.x, isExternal: true },
  { label: "LinkedIn", href: links.linkedIn, isExternal: true },
  { label: "Email", href: links.email },
  { label: "App Store", href: links.appStore, isExternal: true },
] satisfies NamedLink[];
