import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Comparison } from "@/sections/Comparison";
import { Contact } from "@/sections/Contact";
import { EmotionalHook } from "@/sections/EmotionalHook";
import { ExtraServices } from "@/sections/ExtraServices";
import { FinalCta } from "@/sections/FinalCta";
import { Gallery } from "@/sections/Gallery";
import { Hero } from "@/sections/Hero";
import { InstagramFeed } from "@/sections/InstagramFeed";
import { PerfectFor } from "@/sections/PerfectFor";
import { Pricing } from "@/sections/Pricing";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function App() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <EmotionalHook />
        <PerfectFor />
        <WhyChooseUs />
        <Pricing />
        <Comparison />
        <Process />
        <Gallery />
        <Testimonials />
        <ExtraServices />
        <InstagramFeed />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
