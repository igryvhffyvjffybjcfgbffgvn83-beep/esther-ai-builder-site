"use client";

import { useState } from "react";

type Hold = {
  label: string;
  category: string;
  size: "sm" | "md" | "lg";
};

const holds: Hold[] = [
  // Core Languages
  { label: "Swift", category: "Core", size: "lg" },
  { label: "TypeScript", category: "Core", size: "lg" },
  { label: "Python", category: "Core", size: "md" },
  { label: "Node.js", category: "Core", size: "lg" },
  { label: "SQL", category: "Core", size: "md" },

  // iOS / Apple
  { label: "SwiftUI", category: "iOS", size: "lg" },
  { label: "SwiftData", category: "iOS", size: "md" },
  { label: "StoreKit", category: "iOS", size: "md" },
  { label: "Vision", category: "iOS", size: "md" },
  { label: "PDFKit", category: "iOS", size: "sm" },
  { label: "WebKit", category: "iOS", size: "sm" },
  { label: "UIKit", category: "iOS", size: "md" },

  // Web Frontend
  { label: "React", category: "Web", size: "lg" },
  { label: "Next.js", category: "Web", size: "lg" },
  { label: "Tailwind CSS", category: "Web", size: "md" },
  { label: "Zustand", category: "Web", size: "sm" },

  // Backend / API
  { label: "Express.js", category: "Backend", size: "md" },
  { label: "FastAPI", category: "Backend", size: "md" },
  { label: "Cloudflare Workers", category: "Backend", size: "md" },
  { label: "REST APIs", category: "Backend", size: "sm" },

  // Database
  { label: "PostgreSQL", category: "Data", size: "lg" },
  { label: "Prisma", category: "Data", size: "md" },
  { label: "SQLite", category: "Data", size: "md" },
  { label: "Firestore", category: "Data", size: "sm" },
  { label: "Cloudflare R2", category: "Data", size: "sm" },

  // AI / LLM
  { label: "Gemini API", category: "AI", size: "lg" },
  { label: "Prompt Engineering", category: "AI", size: "md" },
  { label: "Zod", category: "AI", size: "sm" },
  { label: "JSON Schema", category: "AI", size: "sm" },

  // Testing
  { label: "Playwright", category: "Testing", size: "md" },
  { label: "Puppeteer", category: "Testing", size: "md" },
  { label: "XCTest", category: "Testing", size: "sm" },
  { label: "Pytest", category: "Testing", size: "sm" },

  // DevOps
  { label: "Docker", category: "DevOps", size: "md" },
  { label: "Sentry", category: "DevOps", size: "sm" },
  { label: "FFmpeg", category: "DevOps", size: "md" },
];

const categoryMeta: Record<
  string,
  { color: string; glow: string; bg: string; label: string }
> = {
  Core: {
    color: "#f97316",
    glow: "rgba(249,115,22,0.4)",
    bg: "rgba(249,115,22,0.12)",
    label: "Core Languages",
  },
  iOS: {
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.4)",
    bg: "rgba(244,63,94,0.12)",
    label: "iOS / Apple",
  },
  Web: {
    color: "#6366f1",
    glow: "rgba(99,102,241,0.4)",
    bg: "rgba(99,102,241,0.12)",
    label: "Web Frontend",
  },
  Backend: {
    color: "#10b981",
    glow: "rgba(16,185,129,0.4)",
    bg: "rgba(16,185,129,0.12)",
    label: "Backend / API",
  },
  Data: {
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    bg: "rgba(6,182,212,0.12)",
    label: "Database / Storage",
  },
  AI: {
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.4)",
    bg: "rgba(245,158,11,0.12)",
    label: "AI / LLM",
  },
  Testing: {
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
    bg: "rgba(168,85,247,0.12)",
    label: "Testing / Automation",
  },
  DevOps: {
    color: "#6b7280",
    glow: "rgba(107,114,128,0.4)",
    bg: "rgba(107,114,128,0.12)",
    label: "DevOps / Tooling",
  },
};

const sizeMap = {
  sm: { px: "px-3", py: "py-1.5", text: "text-[0.65rem]", minW: "min-w-[52px]" },
  md: { px: "px-4", py: "py-2", text: "text-[0.75rem]", minW: "min-w-[64px]" },
  lg: { px: "px-5", py: "py-2.5", text: "text-[0.8125rem]", minW: "min-w-[76px]" },
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Object.entries(categoryMeta);

  return (
    <section className="px-0 py-12 sm:py-16">
      <div className="shell">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
              Tech Stack
            </p>
            <h2 className="font-heading text-2xl font-semibold text-[#2A2520] sm:text-3xl">
              The wall I climb with.
            </h2>
          </div>

          {/* Route legend */}
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, meta]) => (
              <button
                key={key}
                className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  borderColor:
                    activeCategory === key ? meta.color : "rgba(0,0,0,0.08)",
                  background:
                    activeCategory === key ? meta.bg : "transparent",
                  color: activeCategory === key ? meta.color : "#9C8E82",
                  opacity:
                    activeCategory && activeCategory !== key ? 0.4 : 1,
                }}
                onClick={() =>
                  setActiveCategory(activeCategory === key ? null : key)
                }
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: meta.color }}
                />
                {meta.label}
              </button>
            ))}
          </div>
        </div>

        {/* Climbing wall */}
        <div className="climbing-wall relative overflow-hidden rounded-2xl border border-[#E4D9CB] bg-[#FAF6F0] p-6 sm:p-8">
          {/* Wall texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000 0.5px, transparent 0.5px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Holds grid */}
          <div className="relative flex flex-wrap gap-3 sm:gap-4">
            {holds.map((hold) => {
              const meta = categoryMeta[hold.category];
              const size = sizeMap[hold.size];
              const isActive =
                !activeCategory || activeCategory === hold.category;
              const isDimmed = activeCategory && !isActive;

              return (
                <div
                  key={hold.label}
                  className={`hold group relative cursor-default select-none rounded-2xl border-2 font-semibold transition-all duration-300 ${size.px} ${size.py} ${size.text} ${size.minW} text-center`}
                  style={{
                    borderColor: isDimmed
                      ? "rgba(0,0,0,0.04)"
                      : meta.color,
                    background: isDimmed
                      ? "rgba(0,0,0,0.02)"
                      : meta.bg,
                    color: isDimmed ? "#C8C0B8" : meta.color,
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isDimmed ? "scale(0.95)" : "scale(1)",
                    boxShadow: isActive
                      ? `0 2px 8px ${meta.glow}`
                      : "none",
                  }}
                  onMouseEnter={() => {
                    if (!activeCategory) setActiveCategory(hold.category);
                  }}
                  onMouseLeave={() => {
                    if (activeCategory === hold.category)
                      setActiveCategory(null);
                  }}
                >
                  {/* Glow effect on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: `inset 0 0 16px ${meta.glow}, 0 0 20px ${meta.glow}`,
                    }}
                  />
                  <span className="relative z-10">{hold.label}</span>
                </div>
              );
            })}
          </div>

          {/* Chalk marks - decorative */}
          <div className="pointer-events-none absolute right-4 bottom-4 text-[0.6rem] font-medium tracking-wider text-[#D4C9BD] uppercase sm:right-8 sm:bottom-6">
            {holds.length} holds · {categories.length} routes
          </div>
        </div>
      </div>
    </section>
  );
}
