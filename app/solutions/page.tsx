import type { Metadata } from "next";
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
  title: `Solutions - ${siteDetails.siteName}`,
  description: 'Tailored AI-powered solutions for enterprises, small businesses, startups, and individuals. Discover how Ovanthra can transform your workflow.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Solutions for Every Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tailored financial and AI solutions designed to meet the unique needs of your organization, 
                from startups to enterprise-level operations.
              </p>
            </div>
          </Container>
        </section>

        <Container>
          {/* Enterprise Solutions */}
          <section id="enterprise" className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Enterprise Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive AI-powered platforms for large organizations requiring advanced automation, 
                  security, and scalability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Security</h3>
                  <p className="text-gray-600">
                    Enterprise-grade encryption, compliance management, and AI-powered threat detection 
                    to protect your sensitive data.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Infrastructure</h3>
                  <p className="text-gray-600">
                    Cloud-native architecture that grows with your business, handling millions of 
                    transactions and users seamlessly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Integration</h3>
                  <p className="text-gray-600">
                    Seamless integration with your existing systems and workflows through robust APIs 
                    and dedicated support.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
                  <p className="text-gray-600">
                    24/7 priority support with dedicated account managers and custom training programs 
                    for your team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Small Business */}
          <section id="small-business" className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Small Business Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Affordable, powerful tools designed for growing businesses to streamline operations 
                  and drive efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect for Growing Teams</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Automated workflow management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Team collaboration tools</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Budget-friendly pricing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Easy onboarding and setup</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Everything You Need</h3>
                    <p className="text-gray-600 mb-6">
                      Our small business package includes all the essential features to get you started 
                      with AI automation and intelligent workflows. No complex setup required.
                    </p>
                    <a 
                      href="mailto:ovanthra@gmail.com" 
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Startups */}
          <section id="startups" className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Startup Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Launch faster with AI-powered tools designed specifically for startups and early-stage companies.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Prototyping</h3>
                  <p className="text-gray-600 text-sm">
                    Build and test ideas quickly with our intuitive automation tools.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                  <p className="text-gray-600 text-sm">
                    Special pricing and flexible plans for early-stage companies.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Start small and scale seamlessly as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Individuals */}
          <section id="individuals" className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Individual Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Personal finance management and productivity tools powered by AI, designed for individuals 
                  and freelancers.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Personal AI Assistant</h3>
                  <p className="text-orange-50 text-lg mb-8">
                    Manage your personal projects, automate daily tasks, and organize your digital life 
                    with intelligent automation designed for individuals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:ovanthra@gmail.com" 
                      className="inline-block bg-white text-orange-500 font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
                    >
                      Start Free Trial
                    </a>
                    <a 
                      href="/#pricing" 
                      className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all hover:bg-white/10"
                    >
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

