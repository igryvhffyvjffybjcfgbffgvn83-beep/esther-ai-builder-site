import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Esther — AI Builder Lab",
  description:
    "About Esther and the products, demos, and builder principles behind Esther AI Builder Lab.",
};

export default function AboutPage() {
  const { aboutPage } = site;

  return (
    <>
      <Header />
      <main>
        <section className="px-0 pt-14 pb-12 sm:pt-24 sm:pb-16">
          <div className="shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                Esther Builds
              </p>
              <h1 className="max-w-sm font-serif text-5xl leading-[1.02] font-semibold text-[#191714] sm:text-6xl">
                {aboutPage.title}
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.links.lab}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C84B31] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#A93D27]"
                >
                  Explore the Lab
                </a>
                <a
                  href={site.links.email}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E4D9CB] px-5 py-3 text-sm font-semibold text-[#191714] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
                >
                  Say hi
                </a>
              </div>
            </div>

            <div className="space-y-6 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-0 py-12 sm:py-20">
          <div className="shell">
            <div className="warm-card rounded-lg p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
                <h2 className="font-serif text-4xl font-semibold text-[#191714]">
                  {aboutPage.principles.title}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  {aboutPage.principles.items.map((principle, index) => (
                    <article
                      key={principle.title}
                      className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-5"
                    >
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 text-lg font-semibold text-[#191714]">
                        {principle.title}
                      </h3>
                      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-[#3B3630] sm:text-base sm:leading-7">
                        {principle.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
