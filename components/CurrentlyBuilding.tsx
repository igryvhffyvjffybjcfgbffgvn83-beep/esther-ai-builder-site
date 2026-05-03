import { site } from "@/data/site";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = site;

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl border-y border-[#E5DFD6] py-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A]">
            {currentlyBuilding.title}
          </h2>
          <p className="text-sm font-medium text-[#C84B31]">
            {currentlyBuilding.week}
          </p>
        </div>
        <div className="mt-8 space-y-4 text-base leading-7 text-[#3B3732]">
          <p className="font-medium text-[#1A1A1A]">{currentlyBuilding.intro}</p>
          <div className="space-y-2">
            {currentlyBuilding.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="pt-4 text-[#5F5952]">{currentlyBuilding.ongoing}</p>
        </div>
      </div>
    </section>
  );
}
