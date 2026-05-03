import { site } from "@/data/site";

export default function SubscribeCTA() {
  return (
    <section id="subscribe" className="px-0 py-12 sm:py-18">
      <div className="shell warm-card max-w-3xl rounded-lg px-5 py-9 text-center sm:px-10">
        <h2 className="text-balance font-serif text-3xl font-semibold text-[#191714]">
          {site.subscribe.title}
        </h2>
        <a
          href={site.subscribe.href}
          className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27]"
        >
          <span className="truncate">[ {site.subscribe.email} ]</span>
        </a>
      </div>
    </section>
  );
}
