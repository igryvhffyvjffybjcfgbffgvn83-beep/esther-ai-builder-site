import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildLogEntries } from "@/data/build-log";

export const metadata: Metadata = {
  title: "Build Log — Esther AI Builder Lab",
  description:
    "A running log of what Esther is building, shipping, testing, and learning in public.",
};

export default function BuildLogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-0 pt-14 pb-12 sm:pt-24 sm:pb-16">
          <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                Build Log
              </p>
              <h1 className="max-w-sm font-serif text-5xl leading-[1.02] font-semibold text-[#191714] sm:text-6xl">
                Daily notes from the lab.
              </h1>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#686057]">
                Lightweight receipts from what I shipped, tested, and learned while
                turning real friction into tools.
              </p>
            </div>

            <div className="space-y-4">
              {buildLogEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-5 shadow-[0_18px_45px_rgb(82_53_34_/_6%)] sm:p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                      {entry.label}
                    </p>
                    <time className="text-sm font-medium text-[#686057]" dateTime={entry.date}>
                      {entry.date}
                    </time>
                  </div>
                  <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-[#191714]">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#3B3630] sm:text-base sm:leading-7">
                    {entry.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E4D9CB] bg-[#FBF7EF] px-3 py-1 text-xs font-semibold text-[#686057]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {entry.href ? (
                    <Link
                      href={entry.href}
                      className="mt-5 inline-flex min-h-10 items-center rounded-full bg-[#191714] px-4 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#C84B31]"
                    >
                      Open related demo
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
