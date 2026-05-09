"use client";

import { usePathname } from "next/navigation";
import {
  localeLabels,
  localeStorageKey,
  locales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  ariaLabel: string;
};

export default function LanguageSwitcher({ currentLocale, ariaLabel }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${currentLocale}`;

  function handleSelect(locale: Locale) {
    window.localStorage.setItem(localeStorageKey, locale);
    window.location.assign(switchLocalePath(pathname, locale, window.location.hash));
  }

  return (
    <div
      className="flex rounded-full border border-[#E4D9CB] bg-[#FFFDF8]/80 p-0.5 text-xs font-semibold text-[#686057]"
      aria-label={ariaLabel}
      role="group"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <button
            key={locale}
            type="button"
            aria-pressed={isActive}
            onClick={() => handleSelect(locale)}
            className={`min-h-8 rounded-full px-2.5 transition-colors ${
              isActive
                ? "bg-[#191714] text-[#FFFDF8]"
                : "text-[#686057] hover:bg-[#F3D7BF] hover:text-[#7D2F1F]"
            }`}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </div>
  );
}
