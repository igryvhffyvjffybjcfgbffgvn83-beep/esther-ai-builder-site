import { site } from "@/data/site";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#C84B31]">
            {hero.title}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] font-semibold text-[#1A1A1A] sm:text-7xl">
            {hero.thesis}
          </h1>
          <div className="mt-10 flex flex-col gap-3 text-lg leading-8 text-[#3B3732]">
            {hero.productLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="border-l-0 border-[#E5DFD6] lg:border-l lg:pl-10">
          <p className="font-serif text-3xl leading-tight text-[#1A1A1A]">
            {hero.proof}
          </p>
          <p className="mt-6 whitespace-pre-line text-lg leading-8 text-[#3B3732]">
            {hero.builderLines.join("\n")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FAF8F5] transition-colors hover:bg-[#A93D27]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E5DFD6] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-8 text-sm text-[#5F5952]">
            {hero.contactLine}{" "}
            <a
              href={hero.contactCta.href}
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
