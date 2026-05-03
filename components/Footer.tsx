import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#E4D9CB] px-0 py-10">
      <div className="shell flex flex-col gap-6 text-sm text-[#686057] md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-[#191714]">{site.footer.microcopy}</p>
          <div className="flex flex-wrap gap-4">
            {site.footer.links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer" : undefined}
                  className="text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={link.label}
                  className="text-[#8A8278]"
                  title="Coming soon"
                  aria-label={`${link.label} coming soon`}
                >
                  {link.label}
                </span>
              ),
            )}
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
