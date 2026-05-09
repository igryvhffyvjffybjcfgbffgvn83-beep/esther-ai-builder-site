import type { HomeDictionary, LabItem } from "@/data/i18n";

type ProductMapProps = {
  content: HomeDictionary["productMap"];
  items: readonly LabItem[];
};

export default function ProductMap({ content, items }: ProductMapProps) {
  const productItems = items.filter((item) => item.id !== "next");

  return (
    <section className="px-0 py-12 sm:py-18">
      <div className="shell">
        <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold text-[#191714] sm:text-5xl">
          {content.title}
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {productItems.map((item) => (
            <article
              key={item.id}
              className="warm-card rounded-lg p-4 sm:p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[#191714]">
                  {item.title}
                </h3>
                <span className="w-fit shrink-0 rounded-full bg-[#F3D7BF] px-3 py-1 text-xs font-semibold text-[#7D2F1F]">
                  {item.category}
                </span>
              </div>
              <div className="mt-4 space-y-2.5 text-sm leading-6 text-[#3B3630]">
                <p>
                  <span className="font-semibold text-[#191714]">{content.problemLabel} → </span>
                  {item.problem}
                </p>
                <p>
                  <span className="font-semibold text-[#191714]">{content.toolLabel} → </span>
                  {item.tool}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
