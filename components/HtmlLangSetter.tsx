"use client";

import { useEffect } from "react";
import { localeHtmlLang, type Locale } from "@/lib/i18n";

type HtmlLangSetterProps = {
  locale: Locale;
};

export default function HtmlLangSetter({ locale }: HtmlLangSetterProps) {
  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  return null;
}
