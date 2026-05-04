import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 px-0 py-16 sm:py-24">
        <section className="shell max-w-3xl">
          <p className="text-5xl" aria-hidden="true">
            🍅
          </p>
          <h1 className="mt-7 font-serif text-5xl font-semibold text-[#191714] sm:text-6xl">
            Looks like this page got squished.
          </h1>
          <div className="mt-7 space-y-5 text-base leading-7 text-[#3B3630] sm:text-lg sm:leading-8">
            <p>
              Probably my fault. While I figure out where it went, here are
              some real things:
            </p>
            <div className="space-y-2">
              <p>
                <Link
                  href="/#lab"
                  className="font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                >
                  → The Lab
                </Link>{" "}
                <span className="text-[#686057]">
                  (5 products in different stages)
                </span>
              </p>
              <p>
                <Link
                  href="/#manifesto"
                  className="font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                >
                  → The Manifesto
                </Link>{" "}
                <span className="text-[#686057]">
                  (why I build these)
                </span>
              </p>
              <p>
                <Link
                  href="/#subscribe"
                  className="font-medium text-[#C84B31] underline decoration-[#F4D8C0] underline-offset-4 hover:decoration-[#C84B31]"
                >
                  → Latest update
                </Link>{" "}
                <span className="text-[#686057]">
                  (what I am working on this week)
                </span>
              </p>
            </div>
            <p className="font-serif text-2xl text-[#191714]">— Esther</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
