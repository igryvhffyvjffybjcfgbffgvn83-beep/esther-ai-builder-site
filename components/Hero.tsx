import type { HomeDictionary } from "@/data/i18n";
import { localizeHref, type Locale } from "@/lib/i18n";

type HeroProps = {
  content: HomeDictionary["hero"];
  locale: Locale;
};

export default function Hero({ content: hero, locale }: HeroProps) {
  return (
    <section className="relative px-0 pt-12 pb-12 sm:pt-20 sm:pb-18">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="shell grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            {hero.title}
          </p>
          <h1 className="max-w-2xl text-balance font-serif text-[3.25rem] leading-[1.02] font-semibold text-[#191714] sm:text-7xl lg:text-[5.35rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-2xl leading-snug text-[#3B3630] sm:text-[2rem] sm:leading-tight">
            {hero.thesis}
          </p>
          <div className="mt-7 flex flex-col gap-2 text-base leading-7 text-[#3B3630] sm:mt-8 sm:text-xl sm:leading-8">
            {hero.productLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8]/78 p-5 shadow-[0_18px_45px_rgb(82_53_34_/_7%)] sm:p-7 lg:border-l-4 lg:border-l-[#C84B31]">
          <p className="font-serif text-2xl leading-tight text-[#191714] sm:text-3xl">
            {hero.proof}
          </p>
          <p className="mt-5 whitespace-pre-line text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
            {hero.builderLines.join("\n")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={localizeHref(locale, hero.primaryCta.href) ?? undefined}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={localizeHref(locale, hero.secondaryCta.href) ?? undefined}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E4D9CB] px-5 py-3 text-sm font-semibold text-[#191714] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-7 text-sm leading-6 text-[#686057]">
            {hero.contactLine}{" "}
            <a
              href={localizeHref(locale, hero.contactCta.href) ?? undefined}
              className="font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
            >
              → {hero.contactCta.label}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
