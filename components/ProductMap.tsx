import { labItems } from "@/data/lab";
import { site } from "@/data/site";

const productItems = labItems.filter((item) => item.id !== "next");

export default function ProductMap() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-[#1A1A1A] sm:text-5xl">
          {site.productMap.title}
        </h2>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {productItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-[#E5DFD6] bg-[#FFFDF9] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <span className="shrink-0 rounded-full bg-[#F4D8C0] px-3 py-1 text-xs font-medium text-[#7D2F1F]">
                  {item.category}
                </span>
              </div>
              <div className="mt-5 space-y-3 text-sm leading-6 text-[#3B3732]">
                <p>
                  <span className="font-semibold text-[#1A1A1A]">Problem → </span>
                  {item.problem}
                </p>
                <p>
                  <span className="font-semibold text-[#1A1A1A]">Tool → </span>
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
