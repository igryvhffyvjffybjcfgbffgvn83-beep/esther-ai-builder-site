import { defaultLocale, type Locale } from "@/lib/i18n";
import { en } from "./en";
import { zh } from "./zh";

export const dictionaries = {
  en,
  zh,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
export type SiteDictionary = Dictionary["site"];
export type HomeDictionary = Dictionary["home"];
export type LabItem = Dictionary["lab"]["items"][number];
export type LabGroup = Dictionary["lab"]["groupOrder"][number];
export type BuildLogEntry = Dictionary["buildLog"]["entries"][number];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
