import type { HomeDictionary } from "@/data/i18n";

type ManifestoProps = {
  content: HomeDictionary["manifesto"];
};

export default function Manifesto({ content }: ManifestoProps) {
  return (
    <section id="manifesto" className="px-0 py-12 sm:py-20">
      <div className="shell max-w-3xl text-center">
        <h2 className="text-balance font-serif text-4xl font-semibold text-[#191714] sm:text-5xl">
          {content.title}
        </h2>
        <div className="mt-8 space-y-5 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
