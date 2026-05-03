import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DFD6]/80 bg-[#FAF8F5]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href={site.links.home}
          className="font-serif text-xl font-semibold text-[#1A1A1A]"
          aria-label="Esther home"
        >
          Esther
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#5F5952] sm:flex">
          {site.header.links.map((link) => (
            <a
              key={link.label}
              href={link.href ?? undefined}
              className="transition-colors hover:text-[#C84B31]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.header.cta.href}
          className="rounded-full border border-[#C84B31] px-4 py-2 text-sm font-medium text-[#C84B31] transition-colors hover:bg-[#C84B31] hover:text-[#FAF8F5]"
        >
          {site.header.cta.label}
        </a>
      </div>
    </header>
  );
}
