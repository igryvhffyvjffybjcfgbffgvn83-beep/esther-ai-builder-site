import AboutShort from "@/components/AboutShort";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lab from "@/components/Lab";
import SubscribeCTA from "@/components/SubscribeCTA";
import TechStack from "@/components/TechStack";
import WorkWithMe from "@/components/WorkWithMe";
import { getDictionary } from "@/data/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return createLocalizedMetadata(lang, "/", dictionary.site.metadata);
}

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <>
      <Header locale={lang} site={dictionary.site} />
      <main>
        <Hero locale={lang} content={dictionary.home.hero} />
        <TechStack />
        <CurrentlyBuilding
          locale={lang}
          content={dictionary.home.currentlyBuilding}
          entries={dictionary.buildLog.entries.slice(0, 2)}
        />
        <Lab locale={lang} content={dictionary.home.lab} lab={dictionary.lab} />
        <SubscribeCTA content={dictionary.home.subscribe} />
        <AboutShort locale={lang} content={dictionary.home.aboutShort} />
        <WorkWithMe content={dictionary.home.workWithMe} />
      </main>
      <Footer locale={lang} site={dictionary.site} />
    </>
  );
}
