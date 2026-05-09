import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/data/i18n";
import { defaultLocale, localizeHref } from "@/lib/i18n";
import Link from "next/link";

export default function NotFound() {
  const dictionary = getDictionary(defaultLocale);
  const { notFound } = dictionary;

  return (
    <>
      <Header locale={defaultLocale} site={dictionary.site} />
      <main className="flex-1 px-0 py-16 sm:py-24">
        <section className="shell max-w-3xl">
          <p className="text-5xl" aria-hidden="true">
            🍅
          </p>
          <h1 className="mt-7 font-serif text-5xl font-semibold text-[#191714] sm:text-6xl">
            {notFound.title}
          </h1>
          <div className="mt-7 space-y-5 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
            <p>{notFound.intro}</p>
            <div className="space-y-2">
              {notFound.links.map((link) => (
                <p key={link.label}>
                  <Link
                    href={localizeHref(defaultLocale, link.href) ?? "#"}
                    className="font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                  >
                    {link.label}
                  </Link>{" "}
                  <span className="text-[#686057]">{link.note}</span>
                </p>
              ))}
            </div>
            <p className="font-serif text-2xl text-[#191714]">{notFound.signature}</p>
          </div>
        </section>
      </main>
      <Footer locale={defaultLocale} site={dictionary.site} />
    </>
  );
}
