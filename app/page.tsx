"use client";

import Sliding from "@/components/sections/Sliding";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import CTA from "@/components/sections/CTA";
import Benefits from "@/components/sections/Benefits/Benefits";
import Container from "@/components/Container";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-0 md:px-10 lg:px-25">
        <Hero/>
        <Logos/>
              <Container>
        <Features />
        <Benefits />
        </Container>

        <Sliding />
        <AboutSection />
        <TeamSection />
        <Gallery />
        <FAQ />
        <ContactSection />
        <CTA/>
      </main>
      <Footer />
    </div>
  );
}
