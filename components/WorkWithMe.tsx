import type { HomeDictionary } from "@/data/i18n";

type WorkWithMeProps = {
  content: HomeDictionary["workWithMe"];
};

export default function WorkWithMe({ content }: WorkWithMeProps) {
  return (
    <section className="px-0 py-12 sm:py-20">
      <div className="shell max-w-3xl">
        <h2 className="font-serif text-4xl font-semibold text-[#191714]">
          {content.title}
        </h2>
        <div className="mt-7 space-y-4 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
          <p>{content.intro}</p>
          <div className="space-y-2">
            {content.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p>{content.closing}</p>
        </div>
        <a
          href={content.cta.href}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#191714] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#C84B31]"
        >
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}
