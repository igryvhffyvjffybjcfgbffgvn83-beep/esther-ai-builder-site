"use client";

import { useState } from "react";
import type { Dictionary } from "@/data/i18n";
import type { Locale } from "@/lib/i18n";

type VideoId = "en" | "zh";

type JobRadarDemoProps = {
  content: Dictionary["jobRadarDemo"];
  locale: Locale;
};

const videoSources: Record<VideoId, { src: string; poster: string }> = {
  en: {
    src: "/demos/job-radar/job-radar-en.mp4",
    poster: "/demos/job-radar/poster-en.jpg",
  },
  zh: {
    src: "/demos/job-radar/job-radar-zh.mp4",
    poster: "/demos/job-radar/poster-zh.jpg",
  },
};

export default function JobRadarDemo({ content, locale }: JobRadarDemoProps) {
  const [activeVideoId, setActiveVideoId] = useState<VideoId>(
    locale === "zh" ? "zh" : "en",
  );
  const activeVideo = videoSources[activeVideoId];
  const activeCopy =
    content.videos.find((video) => video.id === activeVideoId) ?? content.videos[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.46fr)] lg:items-stretch">
      <section className="warm-card min-w-0 overflow-hidden rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
              {content.artifactLabel}
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-[#191714] sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#686057]">
              {activeCopy.summary}
            </p>
          </div>

          <div
            className="flex w-fit rounded-md border border-[#E4D9CB] bg-[#FFFDF8] p-1"
            aria-label={content.videoLabel}
          >
            {content.videos.map((video) => {
              const isActive = video.id === activeVideoId;

              return (
                <button
                  key={video.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveVideoId(video.id)}
                  className={`min-h-10 rounded-[0.35rem] px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#191714] text-[#FFFDF8]"
                      : "text-[#686057] hover:bg-[#F6E8D8] hover:text-[#191714]"
                  }`}
                >
                  {video.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 min-w-0 overflow-hidden rounded-md border border-[#E4D9CB] bg-[#FBF7EF] p-3 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#686057]">
            <span>{content.outputLabel}</span>
            <span>{activeCopy.duration}</span>
          </div>
          <video
            key={activeVideoId}
            className="aspect-[16/10] w-full rounded-md border border-[#E4D9CB] bg-[#191714] object-cover"
            src={activeVideo.src}
            poster={activeVideo.poster}
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <aside
        className="warm-card min-w-0 overflow-hidden rounded-lg p-4 sm:p-5"
        aria-label={content.asideLabel}
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
          {content.workflowLabel}
        </p>
        <h3 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-[#191714]">
          {content.workflowTitle}
        </h3>

        <ol className="mt-5 space-y-3">
          {content.steps.map((step) => (
            <li
              key={step.number}
              className="grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)] gap-3 rounded-md border border-[#E4D9CB] bg-[#FFFDF8] p-3"
            >
              <span className="font-mono text-xs font-semibold text-[#C84B31]">
                {step.number}
              </span>
              <div>
                <h4 className="text-sm font-semibold leading-5 text-[#191714]">
                  {step.title}
                </h4>
                <p className="mt-1 text-sm leading-6 text-[#686057]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
