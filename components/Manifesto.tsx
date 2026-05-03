import { site } from "@/data/site";

export default function Manifesto() {
  return (
    <section id="manifesto" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-semibold text-[#1A1A1A] sm:text-5xl">
          {site.manifesto.title}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-8 text-[#3B3732]">
          {site.manifesto.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
