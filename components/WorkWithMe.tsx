import { site } from "@/data/site";

export default function WorkWithMe() {
  return (
    <section className="px-0 py-12 sm:py-20">
      <div className="shell max-w-3xl">
        <h2 className="font-serif text-4xl font-semibold text-[#191714]">
          {site.workWithMe.title}
        </h2>
        <div className="mt-7 space-y-4 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
          <p>{site.workWithMe.intro}</p>
          <div className="space-y-2">
            {site.workWithMe.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p>{site.workWithMe.closing}</p>
        </div>
        <a
          href={site.workWithMe.cta.href}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#191714] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#C84B31]"
        >
          {site.workWithMe.cta.label}
        </a>
      </div>
    </section>
  );
}
