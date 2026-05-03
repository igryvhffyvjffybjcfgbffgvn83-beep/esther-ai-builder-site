import { site } from "@/data/site";

export default function AboutShort() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-serif text-4xl font-semibold text-[#1A1A1A]">
          {site.aboutShort.title}
        </h2>
        <div className="space-y-6 text-lg leading-8 text-[#3B3732]">
          {site.aboutShort.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
          <a
            href={site.aboutShort.cta.href}
            className="inline-flex font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
          >
            {site.aboutShort.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
