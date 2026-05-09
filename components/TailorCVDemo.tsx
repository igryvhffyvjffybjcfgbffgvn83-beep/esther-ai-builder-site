"use client";

import { useState } from "react";
import type { Dictionary } from "@/data/i18n";

type TailorCVDemoProps = {
  content: Dictionary["tailorcvDemo"];
};

export default function TailorCVDemo({ content }: TailorCVDemoProps) {
  const [activeStepId, setActiveStepId] =
    useState<Dictionary["tailorcvDemo"]["steps"][number]["id"]>(content.steps[0].id);
  const activeStep = content.steps.find((step) => step.id === activeStepId) ?? content.steps[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
      <div className="mx-auto w-full max-w-[24rem]">
        <div className="rounded-[2.3rem] bg-[#18221E] p-3 shadow-[0_24px_80px_rgb(24_34_30_/_20%)]">
          <div className="overflow-hidden rounded-[1.7rem] bg-[#101713]">
            <video
              className="aspect-[9/16] w-full object-cover"
              src="/demos/tailorcv/tailorcv-main-30s-9x16-draft.mp4"
              poster="/demos/tailorcv/poster.jpg"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>

      <section className="min-w-0 rounded-lg border border-[#D8E2D8] bg-[#F7F8F5] p-4 shadow-[0_18px_45px_rgb(24_34_30_/_8%)] sm:p-6">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {content.steps.map((step) => {
            const isActive = step.id === activeStep.id;

            return (
              <button
                key={step.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveStepId(step.id)}
                className={`min-h-11 rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[#1F7A5C] bg-[#1F7A5C] text-white"
                    : "border-[#D8E2D8] bg-white text-[#3F4A43] hover:border-[#1F7A5C]"
                }`}
              >
                {step.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 min-h-[26rem] rounded-md border border-[#D8E2D8] bg-white p-5 sm:p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            {activeStep.kicker}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-[#18221E] sm:text-4xl">
            {activeStep.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#3F4A43] sm:text-base">
            {activeStep.body}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-[#D8E2D8] bg-[#F7F8F5] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#617068]">
                {content.inputLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#18221E]">{activeStep.input}</p>
            </div>
            <div className="rounded-md border border-[#B9D8CA] bg-[#EEF7F2] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F7A5C]">
                {content.outputLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#18221E]">{activeStep.output}</p>
            </div>
          </div>

          <div className="mt-5 rounded-md border border-[#E6D7BF] bg-[#FFF9ED] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A5A16]">
              {content.signalsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeStep.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-[#E6D7BF] bg-white px-3 py-1.5 text-xs font-semibold text-[#5D4522]"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
