import type { Metadata } from "next";
import Link from "next/link";
import AutoPromoDemo from "@/components/AutoPromoDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Promo Video Pipeline Demo - Esther AI Builder Lab",
  description:
    "A developer prototype that uses Codex and HyperFrames to turn real app recordings into reproducible promo videos.",
};

export default function AutoPromoRecorderPage() {
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

            <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-end">
              <div className="min-w-0 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                  Developer Prototype
                  <span className="hidden sm:inline"> / Video Automation</span>
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-none text-[#191714] sm:text-7xl">
                  Promo Video Pipeline
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#3B3630]">
                  A Codex and HyperFrames workflow that turns real product
                  recordings into reproducible launch videos.
                </p>
              </div>

              <div className="min-w-0 rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-4">
                <p className="text-sm font-semibold text-[#191714]">
                  Plugin workflow demo
                </p>
                <p className="mt-2 text-sm leading-6 text-[#686057]">
                  The demo shows the pipeline as a compact portfolio artifact:
                  recording, direction, composition, review, and render.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 sm:pb-20">
          <div className="shell">
            <AutoPromoDemo />
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-12 sm:py-16">
          <div className="shell grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                Input
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                A real app recording with product behavior already captured.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
                Process
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                Codex translates the product constraints into a reusable video plan.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C98B34]">
                Output
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#191714]">
                HyperFrames renders a short-form draft that can be reviewed and revised.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
