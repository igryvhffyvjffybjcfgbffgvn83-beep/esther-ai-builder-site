import Link from "next/link";
import { latestBuildLogEntries } from "@/data/build-log";
import { site } from "@/data/site";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = site;

  return (
    <section className="px-0 py-12 sm:py-18">
      <div className="shell border-y border-[#E4D9CB] py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:block">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                  {currentlyBuilding.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-[#191714]">
                  {currentlyBuilding.title}
                </h2>
              </div>
              <p className="text-sm leading-6 text-[#686057] lg:mt-3">
                {currentlyBuilding.intro}
              </p>
            </div>

            <div className="mt-7 space-y-3">
              {latestBuildLogEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8]/75 p-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                      {entry.label}
                    </p>
                    <time className="text-xs font-semibold text-[#686057]" dateTime={entry.date}>
                      {entry.date}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-[#191714]">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#3B3630]">{entry.summary}</p>
                  {entry.href ? (
                    <Link
                      href={entry.href}
                      className="mt-3 inline-flex text-sm font-semibold text-[#C84B31] transition-colors hover:text-[#A93D27]"
                    >
                      Open related demo →
                    </Link>
                  ) : null}
                </article>
              ))}
              <Link
                href={currentlyBuilding.cta.href}
                className="inline-flex min-h-11 items-center rounded-full border border-[#E4D9CB] px-4 text-sm font-semibold text-[#191714] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
              >
                {currentlyBuilding.cta.label}
              </Link>
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
