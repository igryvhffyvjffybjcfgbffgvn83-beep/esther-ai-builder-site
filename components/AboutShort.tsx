import { site } from "@/data/site";

export default function AboutShort() {
  return (
    <section id="about" className="px-0 py-12 sm:py-20">
      <div className="shell grid max-w-5xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-serif text-4xl font-semibold text-[#191714]">
          {site.aboutShort.title}
        </h2>
        <div className="space-y-5 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
          {site.aboutShort.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
          {site.aboutShort.cta.href ? (
            <a
              href={site.aboutShort.cta.href}
              className="inline-flex font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
            >
              {site.aboutShort.cta.label}
            </a>
          ) : (
            <span className="inline-flex rounded-full border border-[#E4D9CB] px-4 py-2 text-sm font-semibold text-[#686057]">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
