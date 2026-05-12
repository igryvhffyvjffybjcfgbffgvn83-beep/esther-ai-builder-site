import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/data/i18n";
import { localizeHref, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";

type ProcessImprovementTrackerPageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};

const demoHref = "/demos/process-improvement-tracker/index.html";

export async function generateMetadata({
  params,
}: ProcessImprovementTrackerPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return createLocalizedMetadata(
    lang,
    "/lab/process-improvement-tracker",
    dictionary.processImprovementPage.metadata,
  );
}

export default async function ProcessImprovementTrackerPage({
  params,
}: ProcessImprovementTrackerPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const { processImprovementPage } = dictionary;

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
              {processImprovementPage.backLabel}
            </Link>

            <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.45fr)] lg:items-end">
              <div className="min-w-0 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                  {processImprovementPage.eyebrow}
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-none text-[#191714] sm:text-7xl">
                  {processImprovementPage.title}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#3B3630]">
                  {processImprovementPage.description}
                </p>
              </div>

              <div className="min-w-0 rounded-lg border border-[#B9D8CA] bg-[#EEF7F2] p-4">
                <p className="text-sm font-semibold text-[#18221E]">
                  {processImprovementPage.noteTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#3F4A43]">
                  {processImprovementPage.noteBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-10 sm:py-12">
          <div className="shell grid gap-6 md:grid-cols-3">
            {processImprovementPage.summary.map((item, index) => (
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
          <div className="shell grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                {processImprovementPage.contextEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#191714]">
                {processImprovementPage.contextTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#3B3630]">
                {processImprovementPage.contextBody}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {processImprovementPage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E4D9CB] bg-[#FFFDF8] px-3 py-1 text-xs font-semibold text-[#686057]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {processImprovementPage.demonstrates.map((item) => (
                <article key={item.title} className="warm-card rounded-lg p-4">
                  <h3 className="text-lg font-semibold leading-6 text-[#191714]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#686057]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-12 sm:py-16">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                {processImprovementPage.methodEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#191714]">
                {processImprovementPage.methodTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#3B3630]">
                {processImprovementPage.methodBody}
              </p>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {processImprovementPage.stages.map((stage) => (
                <article key={stage.label} className="rounded-lg border border-[#E4D9CB] bg-white p-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                    {stage.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-[#191714]">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#686057]">{stage.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-0 py-12 sm:py-18">
          <div className="shell grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                {processImprovementPage.portfolioEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#191714]">
                {processImprovementPage.portfolioTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#3B3630]">
                {processImprovementPage.portfolioBody}
              </p>
            </div>

            <div className="grid gap-3">
              {processImprovementPage.portfolioItems.map((item) => (
                <article key={item.title} className="warm-card rounded-lg p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-[#191714]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#686057]">{item.body}</p>
                  {item.href ? (
                    <Link
                      href={localizeHref(lang, item.href) ?? item.href}
                      className="mt-4 inline-flex min-h-10 items-center rounded-full border border-[#E4D9CB] px-4 text-sm font-semibold text-[#191714] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
                    >
                      {item.ctaLabel}
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 sm:pb-20">
          <div className="shell">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                  {processImprovementPage.demoEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold text-[#191714]">
                  {processImprovementPage.demoTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#686057]">
                  {processImprovementPage.demoBody}
                </p>
              </div>
              <a
                href={demoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-[#191714] px-4 py-2 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#C84B31]"
              >
                {processImprovementPage.openDemoLabel}
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] shadow-[0_18px_45px_rgb(82_53_34_/_8%)]">
              <iframe
                src={demoHref}
                title={processImprovementPage.iframeTitle}
                className="h-[780px] w-full bg-white sm:h-[840px]"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={lang} site={dictionary.site} />
    </>
  );
}
