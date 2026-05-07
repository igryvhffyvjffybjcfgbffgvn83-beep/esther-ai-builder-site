"use client";

import { useState } from "react";

const rawVideoSrc = "/demos/auto-promo-recorder/raw-recording.mp4";
const promoVideoSrc = "/demos/auto-promo-recorder/promo-output.mp4";

const workflowSteps = [
  {
    id: "recording",
    label: "Upload recording",
    title: "Upload recording",
    body: "Drop in the screen recording that already exists after testing or demoing the product.",
    detail: "Input: unedited app capture",
  },
  {
    id: "moments",
    label: "Detect product moments",
    title: "Detect product moments",
    body: "Codex reads the workflow and helps identify the moments that explain what the software actually does.",
    detail: "Signal: onboarding, action, result",
  },
  {
    id: "structure",
    label: "Generate promo structure",
    title: "Generate promo structure",
    body: "The workflow converts product moments into a short-form video structure with hook, proof, and payoff.",
    detail: "Output: timeline + captions + scenes",
  },
  {
    id: "render",
    label: "Render short-form video",
    title: "Render short-form video",
    body: "HyperFrames assembles the layout, captions, timing, and final video format so the demo can be reused.",
    detail: "Format: product promo draft",
  },
];

function VideoSlot({
  src,
  title,
  variant,
  isAvailable,
}: {
  src: string;
  title: string;
  variant: "raw" | "promo";
  isAvailable: boolean;
}) {
  const [showPlaceholder, setShowPlaceholder] = useState(!isAvailable);

  if (!showPlaceholder) {
    return (
      <video
        className="h-full w-full rounded-md object-cover"
        controls
        preload="metadata"
        onError={() => setShowPlaceholder(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-md p-4 ${
        variant === "raw"
          ? "border border-dashed border-[#D8C8B7] bg-white/70"
          : "bg-[#18221E] text-white"
      }`}
    >
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            variant === "raw" ? "text-[#8A8278]" : "text-[#9FE0C7]"
          }`}
        >
          {title}
        </p>
        <div className="mt-3 h-2 w-24 rounded-full bg-current opacity-20" />
        <div className="mt-3 h-2 w-36 rounded-full bg-current opacity-20" />
      </div>
      <div className="space-y-2">
        <div className={variant === "raw" ? "h-20 rounded-md bg-[#F1E8DA]" : "h-16 rounded-md bg-white/12"} />
        <div className={variant === "raw" ? "h-20 rounded-md bg-[#F1E8DA]" : "h-16 rounded-md bg-white/18"} />
        <div className={variant === "raw" ? "h-20 rounded-md bg-[#F1E8DA]" : "h-16 rounded-md bg-[#1F7A5C]"} />
      </div>
      <p className="break-all text-sm font-semibold opacity-80">{src}</p>
    </div>
  );
}

export default function AutoPromoDemo({
  rawVideoAvailable,
  promoVideoAvailable,
}: {
  rawVideoAvailable: boolean;
  promoVideoAvailable: boolean;
}) {
  const [activeId, setActiveId] = useState(workflowSteps[0].id);
  const activeStep = workflowSteps.find((step) => step.id === activeId) ?? workflowSteps[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            Before
          </p>
          <div className="mt-4 aspect-[9/16] rounded-md border border-[#E4D9CB] bg-[#FBF7EF] p-4">
            <VideoSlot
              src={rawVideoSrc}
              title="Raw screen recording"
              variant="raw"
              isAvailable={rawVideoAvailable}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-[#686057]">
            Raw screen recording with natural pauses, repeated actions, and no edit structure yet.
          </p>
        </div>

        <div className="rounded-lg border border-[#B9D8CA] bg-[#EEF7F2] p-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            After
          </p>
          <div className="mt-4 aspect-[9/16] rounded-md border border-[#B9D8CA] bg-[#F7F8F5] p-4">
            <VideoSlot
              src={promoVideoSrc}
              title="Structured promo video"
              variant="promo"
              isAvailable={promoVideoAvailable}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-[#3F4A43]">
            Structured promo video with selected moments, captions, pacing, and render format.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8] p-4 shadow-[0_18px_45px_rgb(82_53_34_/_8%)] sm:p-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {workflowSteps.map((step) => {
            const isActive = step.id === activeStep.id;

            return (
              <button
                key={step.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(step.id)}
                className={`min-h-11 rounded-md border px-3 py-2 text-left text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[#191714] bg-[#191714] text-white"
                    : "border-[#E4D9CB] bg-[#FBF7EF] text-[#3B3630] hover:border-[#C84B31]"
                }`}
              >
                {step.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 min-h-64 rounded-md border border-[#E4D9CB] bg-[#FBF7EF] p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
            Workflow
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-[#191714]">
            {activeStep.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#3B3630] sm:text-base">
            {activeStep.body}
          </p>
          <p className="mt-6 rounded-md border border-[#E4D9CB] bg-white px-4 py-3 text-sm font-semibold text-[#686057]">
            {activeStep.detail}
          </p>
        </div>
      </section>
    </div>
  );
}
