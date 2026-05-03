import AboutShort from "@/components/AboutShort";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lab from "@/components/Lab";
import Manifesto from "@/components/Manifesto";
import ProductMap from "@/components/ProductMap";
import SubscribeCTA from "@/components/SubscribeCTA";
import WorkWithMe from "@/components/WorkWithMe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductMap />
        <CurrentlyBuilding />
        <Lab />
        <Manifesto />
        <SubscribeCTA />
        <AboutShort />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  );
}
