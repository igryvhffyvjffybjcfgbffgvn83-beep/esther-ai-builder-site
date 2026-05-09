import type { SiteDictionary } from "@/data/i18n";
import { localizeHref, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  site: SiteDictionary;
};

export default function Header({ locale, site }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4D9CB]/85 bg-[#FBF7EF]/92 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between sm:h-16">
        <a
          href={localizeHref(locale, site.links.home) ?? `/${locale}`}
          className="font-serif text-xl font-semibold text-[#191714]"
          aria-label={site.header.ariaHome}
        >
          Esther
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#686057] md:flex">
          {site.header.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={localizeHref(locale, link.href) ?? undefined}
                className="transition-colors hover:text-[#C84B31]"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-[#8A8278]"
                title={site.footer.comingSoonLabel}
              >
                {link.label}
              </span>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} ariaLabel={site.header.languageLabel} />
          <a
            href={localizeHref(locale, site.links.subscribe) ?? undefined}
            className="hidden rounded-full bg-[#C84B31] px-3.5 py-2 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27] sm:inline-flex md:hidden"
          >
            {site.header.mobileCtaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
