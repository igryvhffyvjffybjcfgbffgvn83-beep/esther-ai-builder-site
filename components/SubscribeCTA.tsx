import type { HomeDictionary } from "@/data/i18n";

type SubscribeCTAProps = {
  content: HomeDictionary["subscribe"];
};

export default function SubscribeCTA({ content }: SubscribeCTAProps) {
  return (
    <section id="subscribe" className="px-0 py-12 sm:py-18">
      <div className="shell warm-card max-w-3xl rounded-lg px-5 py-9 text-center sm:px-10">
        <h2 className="text-balance font-serif text-3xl font-semibold text-[#191714]">
          {content.title}
        </h2>
        <a
          href={content.href}
          className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27]"
        >
          <span className="truncate">[ {content.email} ]</span>
        </a>
      </div>
    </section>
  );
}
