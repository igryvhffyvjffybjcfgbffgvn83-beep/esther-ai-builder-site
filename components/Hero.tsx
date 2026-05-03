import { site } from "@/data/site";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="relative px-0 pt-14 pb-12 sm:pt-24 sm:pb-20">
      <div className="shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            {hero.title}
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-[3rem] leading-[1.02] font-semibold text-[#191714] sm:text-7xl lg:text-[5.4rem]">
            {hero.thesis}
          </h1>
          <div className="mt-8 flex flex-col gap-2.5 text-base leading-7 text-[#3B3630] sm:mt-10 sm:text-lg sm:leading-8">
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
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E4D9CB] px-5 py-3 text-sm font-semibold text-[#191714] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-7 text-sm leading-6 text-[#686057]">
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
