import { getLabItemsByGroup, labGroupLabels, labGroupOrder } from "@/data/lab";
import LabCard from "./LabCard";

export default function Lab() {
  return (
    <section id="lab" className="px-0 py-12 sm:py-20">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            The Lab
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold text-[#191714] sm:text-5xl">
            Products, prototypes, and experiments.
          </h2>
        </div>

        <div className="mt-10 space-y-10 sm:space-y-12">
          {labGroupOrder.map((group) => {
            const items = getLabItemsByGroup(group);

            return (
              <div key={group}>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-mono text-sm font-semibold tracking-[0.16em] text-[#C84B31]">
                    {labGroupLabels[group]}
                  </h3>
                  <div className="h-px flex-1 bg-[#E4D9CB]" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <LabCard key={item.id} item={item} />
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
