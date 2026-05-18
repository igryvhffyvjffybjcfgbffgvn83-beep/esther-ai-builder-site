type TechItem = {
  label: string;
  category: string;
};

const techStack: TechItem[] = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Frontend" },
  { label: "Tailwind CSS", category: "Frontend" },
  { label: "Electron", category: "Desktop" },
  { label: "Node.js", category: "Desktop" },
  { label: "iOS", category: "Mobile" },
  { label: "Swift", category: "Mobile" },
  { label: "App Store", category: "Mobile" },
  { label: "LLM APIs", category: "AI" },
  { label: "Prompt Engineering", category: "AI" },
  { label: "AI Agents", category: "AI" },
  { label: "FFmpeg", category: "Media" },
  { label: "HyperFrames", category: "Media" },
  { label: "Data Visualization", category: "Data" },
  { label: "Dashboard Design", category: "Data" },
  { label: "Vercel", category: "Infra" },
  { label: "Git", category: "Infra" },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: "rgba(99,102,241,0.10)", text: "#6366f1", border: "rgba(99,102,241,0.25)" },
  Desktop: { bg: "rgba(16,185,129,0.10)", text: "#10b981", border: "rgba(16,185,129,0.25)" },
  Mobile: { bg: "rgba(244,63,94,0.10)", text: "#f43f5e", border: "rgba(244,63,94,0.25)" },
  AI: { bg: "rgba(245,158,11,0.10)", text: "#f59e0b", border: "rgba(245,158,11,0.25)" },
  Media: { bg: "rgba(168,85,247,0.10)", text: "#a855f7", border: "rgba(168,85,247,0.25)" },
  Data: { bg: "rgba(6,182,212,0.10)", text: "#06b6d4", border: "rgba(6,182,212,0.25)" },
  Infra: { bg: "rgba(107,114,128,0.10)", text: "#6b7280", border: "rgba(107,114,128,0.25)" },
};

export default function TechStack() {
  return (
    <section className="px-0 py-10 sm:py-14">
      <div className="shell">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((item) => {
            const color = categoryColors[item.category] ?? categoryColors.Infra;
            return (
              <span
                key={item.label}
                className="tech-pill"
                style={{
                  background: color.bg,
                  color: color.text,
                  borderColor: color.border,
                }}
              >
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
