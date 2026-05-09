import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TailorCVDemo from "@/components/TailorCVDemo";
import { getDictionary } from "@/data/i18n";
import { localizeHref, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";

type TailorCVPageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata({ params }: TailorCVPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return createLocalizedMetadata(lang, "/lab/tailorcv", dictionary.tailorcvPage.metadata);
}

export default async function TailorCVPage({ params }: TailorCVPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { tailorcvPage } = dictionary;

  return (
    <>
      <Header locale={lang} site={dictionary.site} />
      <main>
        <section className="px-0 py-12 sm:py-18">
          <div className="shell">
            <Link
              href={localizeHref(lang, "/#lab") ?? "#"}
              className="inline-flex min-h-10 items-center rounded-full border border-[#E4D9CB] px-4 text-sm font-semibold text-[#686057] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              {tailorcvPage.backLabel}
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                  {tailorcvPage.eyebrow}
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-none text-[#191714] sm:text-7xl">
                  {tailorcvPage.title}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#3B3630]">
                  {tailorcvPage.description}
                </p>
              </div>

              <div className="rounded-lg border border-[#B9D8CA] bg-[#EEF7F2] p-4">
                <p className="text-sm font-semibold text-[#18221E]">{tailorcvPage.noteTitle}</p>
                <p className="mt-2 text-sm leading-6 text-[#3F4A43]">
                  {tailorcvPage.noteBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 sm:pb-20">
          <div className="shell">
            <TailorCVDemo content={dictionary.tailorcvDemo} />
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-12 sm:py-16">
          <div className="shell grid gap-6 md:grid-cols-3">
            {tailorcvPage.summary.map((item, index) => (
              <div key={item.label}>
                <p
                  className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${
                    index === 1 ? "text-[#1F7A5C]" : index === 2 ? "text-[#C98B34]" : "text-[#C84B31]"
                  }`}
                >
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-0 py-12 sm:py-18">
          <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#191714]">
                {tailorcvPage.ctaTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#686057]">
                {tailorcvPage.ctaBody}
              </p>
            </div>
            {dictionary.site.links.appStore ? (
              <a
                href={dictionary.site.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#191714] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#1F7A5C]"
              >
                {tailorcvPage.appStoreLabel}
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <Footer locale={lang} site={dictionary.site} />
    </>
  );
}
