import type { Dictionary } from "@/data/i18n";
import type { Locale } from "@/lib/i18n";
import LabCard from "./LabCard";

type LabProps = {
  locale: Locale;
  content: Dictionary["home"]["lab"];
  lab: Dictionary["lab"];
};

export default function Lab({ locale, content, lab }: LabProps) {
  return (
    <section id="lab" className="px-0 py-12 sm:py-20">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-[#191714] sm:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 space-y-10 sm:space-y-12">
          {lab.groupOrder.map((group) => {
            const items = lab.items.filter((item) => item.group === group);

            return (
              <div key={group}>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-mono text-sm font-semibold tracking-[0.16em] text-[#C84B31]">
                    {lab.groupLabels[group]}
                  </h3>
                  <div className="h-px flex-1 bg-[#E4D9CB]" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <LabCard key={item.id} item={item} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
