import { site } from "@/data/site";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = site;

  return (
    <section className="px-0 py-12 sm:py-18">
      <div className="shell border-y border-[#E4D9CB] py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:block">
              <h2 className="font-serif text-3xl font-semibold text-[#191714]">
                {currentlyBuilding.title}
              </h2>
              <p className="text-sm font-medium text-[#C84B31] lg:mt-3">
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

          <dl className="grid grid-cols-2 gap-3">
            {currentlyBuilding.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8]/70 p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C84B31]">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-serif text-3xl font-semibold leading-none text-[#191714]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
