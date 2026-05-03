import { getLabItemsByGroup, labGroupLabels, labGroupOrder } from "@/data/lab";
import LabCard from "./LabCard";

export default function Lab() {
  return (
    <section id="lab" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#C84B31]">
            The Lab
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#1A1A1A] sm:text-5xl">
            Products, prototypes, and experiments.
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          {labGroupOrder.map((group) => {
            const items = getLabItemsByGroup(group);

            return (
              <div key={group}>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="font-mono text-sm font-semibold tracking-[0.18em] text-[#C84B31]">
                    {labGroupLabels[group]}
                  </h3>
                  <div className="h-px flex-1 bg-[#E5DFD6]" />
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
