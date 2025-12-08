import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import Container from '@/components/Container';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">
        <Container>
            <div className="max-w-3xl mx-auto prose prose-orange">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last updated: December 08, 2025</p>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">1. Introduction</h2>
                    <p>
                        Welcome to Ovanthra. We respect your privacy and are committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                    </ul>
                </section>

                <section className="mb-8 space-y-4 text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-800">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>
                </section>
                
                <p className="text-sm text-gray-500 mt-12">
                    If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@ovanthra.com" className="text-orange-500 underline">privacy@ovanthra.com</a>.
                </p>
            </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}