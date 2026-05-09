import type { SiteDictionary } from "@/data/i18n";
import { localizeHref, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  site: SiteDictionary;
};

export default function Footer({ locale, site }: FooterProps) {
  return (
    <footer className="border-t border-[#E4D9CB] px-0 py-10">
      <div className="shell flex flex-col gap-6 text-sm text-[#686057] md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-[#191714]">{site.footer.microcopy}</p>
          <div className="flex flex-wrap gap-4">
            {site.footer.links.map((link) => {
              const isExternal = "isExternal" in link && link.isExternal;

              return link.href ? (
                <a
                  key={link.label}
                  href={localizeHref(locale, link.href) ?? undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={link.label}
                  className="text-[#8A8278]"
                  title={site.footer.comingSoonLabel}
                  aria-label={`${link.label} ${site.footer.comingSoonLabel}`}
                >
                  {link.label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="space-y-2 md:text-right">
          <p>
            {site.footer.lastUpdatedLabel} {site.lastUpdated}
          </p>
          <p>{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
