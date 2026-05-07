const videoSrc = "/demos/auto-promo-recorder/assets/rendered-promo.mp4";
const posterSrc = "/demos/auto-promo-recorder/assets/poster.jpg";

const pipelineSteps = [
  {
    number: "01",
    title: "Capture real UI",
    body: "Start from an actual product recording, not fake screens.",
  },
  {
    number: "02",
    title: "Codex directs the cut",
    body: "Turn product constraints into a repeatable video plan.",
  },
  {
    number: "03",
    title: "Compose in HyperFrames",
    body: "Build the video as HTML, timing, and reusable layout.",
  },
  {
    number: "04",
    title: "Inspect review frames",
    body: "Use contact sheets to review the render before shipping.",
  },
  {
    number: "05",
    title: "Render variants",
    body: "Export the 9:16 draft and extend it to other platforms.",
  },
];

export default function AutoPromoDemo() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.48fr)] lg:items-stretch">
      <section className="warm-card min-w-0 overflow-hidden rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
              Live artifact
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-[#191714] sm:text-4xl">
              Real recording in, rendered promo out.
            </h2>
          </div>
          <span className="w-fit rounded-full bg-[#F3D7BF] px-3 py-1 text-xs font-semibold text-[#7D2F1F]">
            Rendered draft
          </span>
        </div>

        <div className="mt-5 min-w-0 overflow-hidden rounded-md border border-[#E4D9CB] bg-[#FBF7EF] p-3 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#686057]">
            <span>Demo output: reproducible 9:16 render</span>
            <span>20.0s</span>
          </div>
          <video
            className="mx-auto aspect-[9/16] max-h-[72vh] w-full max-w-[25rem] rounded-md border border-[#E4D9CB] bg-[#191714] object-cover"
            src={videoSrc}
            poster={posterSrc}
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <aside
        className="warm-card min-w-0 overflow-hidden rounded-lg p-4 sm:p-5"
        aria-label="Plugin pipeline"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C84B31]">
          Pipeline
        </p>
        <h3 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-[#191714]">
          What the plugin demonstrates
        </h3>

        <ol className="mt-5 space-y-3">
          {pipelineSteps.map((step) => (
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
