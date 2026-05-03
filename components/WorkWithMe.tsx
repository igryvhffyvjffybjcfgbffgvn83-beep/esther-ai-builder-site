import { site } from "@/data/site";

export default function WorkWithMe() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-4xl font-semibold text-[#1A1A1A]">
          {site.workWithMe.title}
        </h2>
        <div className="mt-8 space-y-4 text-lg leading-8 text-[#3B3732]">
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
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1A1A1A] px-5 py-3 text-sm font-semibold text-[#FAF8F5] transition-colors hover:bg-[#C84B31]"
        >
          {site.workWithMe.cta.label}
        </a>
      </div>
    </section>
  );
}
