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
  about: null,
  email: `mailto:${contactEmail}`,
  x: null,
  linkedIn: null,
  appStore: null,
} satisfies Record<string, LinkHref>;

export const headerLinks = [
  { label: "The Lab", href: links.lab },
  { label: "Manifesto", href: links.manifesto },
  { label: "About", href: links.about },
] satisfies NamedLink[];

export const footerLinks = [
  { label: "X", href: links.x, isExternal: true },
  { label: "LinkedIn", href: links.linkedIn, isExternal: true },
  { label: "Email", href: links.email },
  { label: "App Store", href: links.appStore, isExternal: true },
] satisfies NamedLink[];
