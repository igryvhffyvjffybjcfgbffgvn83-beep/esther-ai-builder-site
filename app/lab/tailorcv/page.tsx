import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TailorCVDemo from "@/components/TailorCVDemo";
import { links } from "@/data/links";

export const metadata: Metadata = {
  title: "TailorCV Demo — Esther AI Builder Lab",
  description:
    "A web demo for TailorCV, a resume AI that matches real experience against a target job description and generates a focused, role-specific resume.",
};

export default function TailorCVPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-0 py-12 sm:py-18">
          <div className="shell">
            <Link
              href="/#lab"
              className="inline-flex min-h-10 items-center rounded-full border border-[#E4D9CB] px-4 text-sm font-semibold text-[#686057] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              Back to Lab
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                  Live Product / Career AI
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-none text-[#191714] sm:text-7xl">
                  TailorCV
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#3B3630]">
                  TailorCV matches your real experience against a target job
                  description and generates a focused, role-specific resume.
                </p>
              </div>

              <div className="rounded-lg border border-[#B9D8CA] bg-[#EEF7F2] p-4">
                <p className="text-sm font-semibold text-[#18221E]">Why this demo page exists</p>
                <p className="mt-2 text-sm leading-6 text-[#3F4A43]">
                  The product is live on iOS, but the web page gives people a fast
                  way to understand the workflow before opening the App Store.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 sm:pb-20">
          <div className="shell">
            <TailorCVDemo />
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-12 sm:py-16">
          <div className="shell grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                Before
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                One generic resume sent to every role.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                Process
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                Parse real experience, compare it with the JD, and choose what to emphasize.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C98B34]">
                After
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                A resume draft shaped around the role.
              </p>
            </div>
          </div>
        </section>

        <section className="px-0 py-12 sm:py-18">
          <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#191714]">
                Try TailorCV on iOS.
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#686057]">
                The web demo is a walkthrough. The product itself is live in the App Store.
              </p>
            </div>
            {links.appStore ? (
              <a
                href={links.appStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#191714] px-5 py-3 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#1F7A5C]"
              >
                View on App Store
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
