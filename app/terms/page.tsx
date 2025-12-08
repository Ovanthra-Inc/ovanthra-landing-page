import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import Container from '@/components/Container';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">
        <Container>
            <div className="max-w-3xl mx-auto prose prose-orange">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-500 mb-8">Last updated: December 08, 2025</p>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website at Ovanthra, you agree to be bound by these terms of service, all applicable laws and regulations, 
                        and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                </section>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Ovanthra's website 
                        for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">3. Disclaimer</h2>
                    <p>
                        The materials on Ovanthra's website are provided on an 'as is' basis. Ovanthra makes no warranties, expressed or implied, 
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
                        merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">4. Limitations</h2>
                    <p>
                        In no event shall Ovanthra or its suppliers be liable for any damages (including, without limitation, damages for loss of data 
                        or profit, or due to business interruption) arising out of the use or inability to use the materials on Ovanthra's website.
                    </p>
                </section>
                
                <p className="text-sm text-gray-500 mt-12">
                   Contact us at <a href="mailto:legal@ovanthra.com" className="text-orange-500 underline">legal@ovanthra.com</a>.
                </p>
            </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}