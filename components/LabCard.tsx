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
    <article className="flex h-full flex-col rounded-lg border border-[#E5DFD6] bg-[#FFFDF9] p-5">
      {shouldRenderScreenshot ? (
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-md border border-[#E5DFD6] bg-[#FAF8F5]">
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
        <span className="rounded-full bg-[#F4D8C0] px-3 py-1 text-xs font-semibold text-[#7D2F1F]">
          {item.status}
        </span>
        <span className="rounded-full border border-[#E5DFD6] px-3 py-1 text-xs font-medium text-[#5F5952]">
          {item.type}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-[#1A1A1A]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-[#C84B31]">{item.tagline}</p>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#3B3732]">{item.description}</p>

      <div className="mt-5 space-y-3 border-t border-[#E5DFD6] pt-5 text-sm leading-6 text-[#3B3732]">
        <p>
          <span className="font-semibold text-[#1A1A1A]">Problem → </span>
          {item.problem}
        </p>
        <p>
          <span className="font-semibold text-[#1A1A1A]">Tool → </span>
          {item.tool}
        </p>
      </div>

      <div className="mt-auto pt-6">
        {item.href ? (
          <a
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A1A1A] px-4 py-2 text-sm font-semibold text-[#FAF8F5] transition-colors hover:bg-[#C84B31]"
          >
            {item.ctaLabel}
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E5DFD6] px-4 py-2 text-sm font-semibold text-[#5F5952]">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
