import type { Metadata } from "next";
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import AboutSection from '@/components/sections/AboutSection';
import TeamSection from '@/components/sections/TeamSection';
import CTA from '@/components/sections/CTA';
import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
  title: `About Us - ${siteDetails.siteName}`,
  description: 'Learn about Ovanthra\'s mission, values, and the talented team building the future of AI-powered automation and intelligent learning.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="bg-orange-50 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Ovanthra</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">Innovating for a better tomorrow.</p>
        </div>
        <AboutSection />
        <TeamSection />
        <div className="px-24">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
