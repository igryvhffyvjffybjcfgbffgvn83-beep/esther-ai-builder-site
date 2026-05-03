import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4D9CB]/85 bg-[#FBF7EF]/92 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between sm:h-16">
        <a
          href={site.links.home}
          className="font-serif text-xl font-semibold text-[#191714]"
          aria-label="Esther home"
        >
          Esther
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#686057] sm:flex">
          {site.header.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#C84B31]"
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-[#8A8278]" title="Coming soon">
                {link.label}
              </span>
            ),
          )}
        </nav>
        <a
          href={site.header.cta.href}
          className="hidden rounded-full border border-[#C84B31]/70 px-4 py-2 text-sm font-medium text-[#C84B31] transition-colors hover:bg-[#C84B31] hover:text-[#FFFDF8] sm:inline-flex"
        >
          {site.header.cta.label}
        </a>
        <a
          href={site.links.subscribe}
          className="inline-flex rounded-full bg-[#C84B31] px-3.5 py-2 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27] sm:hidden"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
