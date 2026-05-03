import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { LabItem } from "@/data/lab";

type LabCardProps = {
  item: LabItem;
};

function hasLocalScreenshot(screenshot: string | null) {
  if (!screenshot) {
    return false;
  }

  return existsSync(join(process.cwd(), "public", screenshot.replace(/^\//, "")));
}

export default function LabCard({ item }: LabCardProps) {
  const shouldRenderScreenshot = hasLocalScreenshot(item.screenshot);

  return (
    <article className="warm-card flex h-full min-w-0 flex-col rounded-lg p-4 sm:p-5">
      {shouldRenderScreenshot ? (
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-md border border-[#E4D9CB] bg-[#FBF7EF]">
          <Image
            src={item.screenshot ?? ""}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#F3D7BF] px-3 py-1 text-xs font-semibold text-[#7D2F1F]">
          {item.status}
        </span>
        <span className="rounded-full border border-[#E4D9CB] px-3 py-1 text-xs font-medium text-[#686057]">
          {item.type}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-wrap font-serif text-2xl font-semibold leading-tight text-[#191714]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-[#C84B31]">{item.tagline}</p>
      </div>

      {item.description ? (
        <p className="mt-4 text-sm leading-6 text-[#3B3630]">{item.description}</p>
      ) : null}

      <div className="mt-5 space-y-3 border-t border-[#E4D9CB] pt-5 text-sm leading-6 text-[#3B3630]">
        <p>
          <span className="font-semibold text-[#191714]">Problem → </span>
          {item.problem}
        </p>
        <p>
          <span className="font-semibold text-[#191714]">Tool → </span>
          {item.tool}
        </p>
      </div>

      <div className="mt-auto pt-6">
        {item.href ? (
          <a
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#191714] px-4 py-2 text-sm font-semibold text-[#FFFDF8] transition-colors hover:bg-[#C84B31]"
          >
            {item.ctaLabel}
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E4D9CB] px-4 py-2 text-sm font-semibold text-[#686057]">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
