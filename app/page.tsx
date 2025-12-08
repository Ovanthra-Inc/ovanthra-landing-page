"use client";

import Sliding from "@/components/sections/Sliding";
import Features from "@/components/sections/Features";
import MobileShowcase from "@/components/sections/MobileShowcase";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import CTA from "@/components/sections/CTA";
import Benefits from "@/components/sections/Benefits/Benefits";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-0 md:px-10 lg:px-25">
        <Hero/>
        <Logos/>
              <Container>
        <Benefits />
        </Container>

        <Sliding />
        <Features />
        <MobileShowcase />
        <Gallery />
        <FAQ />
        <CTA/>
      </main>
      <Footer />
    </div>
  );
}
