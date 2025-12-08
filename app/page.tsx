"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Benefits from "@/components/sections/Benefits/Benefits";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Container from "@/components/Container";
import Stats from "@/components/sections/Stats";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col gap-0">
        <Hero />

        <Logos />

        <Container className="py-10 md:py-20">
          <Benefits />
        </Container>

        <Stats />
        <FAQ />

        <Container className="py-10 md:py-20">
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
