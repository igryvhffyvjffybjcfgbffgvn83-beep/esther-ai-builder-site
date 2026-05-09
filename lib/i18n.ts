export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeStorageKey = "esther-ai-builder-locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

const internalAssetPrefixes = [
  "/demos/",
  "/images/",
  "/_next/",
  "/favicon",
  "/og-image",
  "/file.svg",
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
  "/window.svg",
];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromLanguages(languages: readonly string[] | undefined): Locale {
  const normalized = languages?.map((language) => language.toLowerCase()) ?? [];

  if (normalized.some((language) => language === "zh" || language.startsWith("zh-"))) {
    return "zh";
  }

  return defaultLocale;
}

export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function localizeHref(locale: Locale, href: string | null): string | null {
  if (!href) {
    return href;
  }

  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  if (isExternalHref(href)) {
    return href;
  }

  if (internalAssetPrefixes.some((prefix) => href.startsWith(prefix))) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  const segments = href.split("/");
  const firstSegment = segments[1];

  if (isLocale(firstSegment)) {
    segments[1] = locale;
    return segments.join("/");
  }

  return `/${locale}${href}`;
}

export function switchLocalePath(pathname: string, locale: Locale, hash = "") {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}${hash}`;
}
