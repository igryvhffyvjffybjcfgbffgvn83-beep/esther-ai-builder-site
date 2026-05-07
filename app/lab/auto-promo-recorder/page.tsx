import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import AutoPromoDemo from "@/components/AutoPromoDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const demoRoot = "/demos/auto-promo-recorder";
const rawVideoSrc = `${demoRoot}/raw-recording.mp4`;
const promoVideoSrc = `${demoRoot}/promo-output.mp4`;

export const metadata: Metadata = {
  title: "Auto Promo Recorder Demo — Esther AI Builder Lab",
  description:
    "A developer prototype that uses Codex and HyperFrames to turn raw app screen recordings into structured product promo videos.",
};

function hasDemoAsset(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

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

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.45fr)] lg:items-end">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                  Developer Prototype / Video Automation
                </p>
                <h1 className="mt-4 text-balance font-serif text-5xl font-semibold leading-none text-[#191714] sm:text-7xl">
                  Auto Promo Recorder
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[#3B3630]">
                  A Codex + HyperFrames workflow that turns raw app recordings into
                  structured short-form product promo videos.
                </p>
              </div>

              <aside className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-4">
                <p className="text-sm font-semibold text-[#191714]">Built today</p>
                <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                  Today · May 7, 2026
                </p>
                <p className="mt-3 text-sm leading-6 text-[#3B3630]">
                  Built an automatic screen-recording promo plugin for my own software
                  using Codex + HyperFrames.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-0 pb-14 sm:pb-20">
          <div className="shell">
            <AutoPromoDemo
              rawVideoAvailable={hasDemoAsset(rawVideoSrc)}
              promoVideoAvailable={hasDemoAsset(promoVideoSrc)}
            />
          </div>
        </section>

        <section className="border-y border-[#E4D9CB] bg-[#FFFDF8] px-0 py-12 sm:py-16">
          <div className="shell grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
                Prototype note
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#191714]">
                Built for solo product demos.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#3B3630]">
              The goal is to close the gap between a rough product recording and a
              useful demo video without turning every launch into a manual editing
              project.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
