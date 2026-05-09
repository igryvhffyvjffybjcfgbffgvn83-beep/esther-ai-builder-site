"use client";

import { useEffect } from "react";
import {
  getLocaleFromLanguages,
  isLocale,
  localeStorageKey,
  type Locale,
} from "@/lib/i18n";

type LocalizedRedirectProps = {
  targetPath?: string;
};

function getPreferredLocale(): Locale {
  const savedLocale = window.localStorage.getItem(localeStorageKey);

  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  return getLocaleFromLanguages(window.navigator.languages);
}

function buildTarget(locale: Locale, targetPath: string) {
  const path = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;

  if (path === "/") {
    return `/${locale}${window.location.hash}`;
  }

  return `/${locale}${path}${window.location.hash}`;
}

export default function LocalizedRedirect({ targetPath = "/" }: LocalizedRedirectProps) {
  useEffect(() => {
    window.location.replace(buildTarget(getPreferredLocale(), targetPath));
  }, [targetPath]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="font-serif text-3xl font-semibold text-[#191714]">Esther Builds</p>
        <p className="mt-3 text-sm leading-6 text-[#686057]">Opening the right language version...</p>
        <div className="mt-5 flex justify-center gap-3 text-sm font-semibold">
          <a className="text-[#C84B31] underline" href={`/en${targetPath === "/" ? "" : targetPath}`}>
            English
          </a>
          <a className="text-[#C84B31] underline" href={`/zh${targetPath === "/" ? "" : targetPath}`}>
            中文
          </a>
        </div>
      </div>
    </main>
  );
}
