import type { Metadata } from "next";
import { localeHtmlLang, type Locale } from "./i18n";

type PageMeta = {
  title: string;
  description: string;
};

export function createLocalizedMetadata(locale: Locale, path: string, meta: PageMeta): Metadata {
  const normalizedPath = path === "/" ? "" : path;

  return {
    ...meta,
    alternates: {
      canonical: `/${locale}${normalizedPath}`,
      languages: {
        en: `/en${normalizedPath}`,
        [localeHtmlLang.zh]: `/zh${normalizedPath}`,
      },
    },
    openGraph: {
      ...meta,
      url: `/${locale}${normalizedPath}`,
      locale: localeHtmlLang[locale].replace("-", "_"),
      alternateLocale: locale === "en" ? [localeHtmlLang.zh.replace("-", "_")] : ["en"],
    },
    twitter: {
      card: "summary_large_image",
      ...meta,
    },
  };
}
