import { site } from "@/data/site";

export default function SubscribeCTA() {
  return (
    <section id="subscribe" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-lg border border-[#E5DFD6] bg-[#FFFDF9] px-6 py-10 text-center sm:px-10">
        <h2 className="font-serif text-3xl font-semibold text-[#1A1A1A]">
          {site.subscribe.title}
        </h2>
        <a
          href={site.subscribe.href}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FAF8F5] transition-colors hover:bg-[#A93D27]"
        >
          [ {site.subscribe.email} ]
        </a>
      </div>
    </section>
  );
}
