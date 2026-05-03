import { site } from "@/data/site";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = site;

  return (
    <section className="px-0 py-12 sm:py-18">
      <div className="shell max-w-3xl border-y border-[#E4D9CB] py-10 sm:py-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="font-serif text-3xl font-semibold text-[#191714]">
            {currentlyBuilding.title}
          </h2>
          <p className="text-sm font-medium text-[#C84B31]">
            {currentlyBuilding.week}
          </p>
        </div>
        <div className="mt-7 space-y-4 text-base leading-7 text-[#3B3630]">
          <p className="font-medium text-[#191714]">{currentlyBuilding.intro}</p>
          <div className="space-y-2">
            {currentlyBuilding.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="pt-3 text-[#686057]">{currentlyBuilding.ongoing}</p>
        </div>
      </div>
    </section>
  );
}
