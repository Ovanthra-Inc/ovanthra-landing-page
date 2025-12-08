import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import FAQ from '@/components/sections/FAQ';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="bg-orange-50 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">We are here to help and answer any question you might have.</p>
        </div>
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}