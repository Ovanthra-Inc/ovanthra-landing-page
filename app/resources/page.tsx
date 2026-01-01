import type { Metadata } from "next";
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
  title: `Resources - ${siteDetails.siteName}`,
  description: 'Comprehensive guides, tutorials, documentation, and learning resources to help you get the most out of Ovanthra.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Learning Center
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive guides, tutorials, and documentation to help you master Ovanthra and 
                unlock the full potential of AI-driven automation.
              </p>
            </div>
          </Container>
        </section>

        <Container>
          {/* Documentation */}
          <section id="documentation" className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Documentation
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Complete API references, guides, and technical documentation for developers and power users.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Reference</h3>
                  <p className="text-gray-600 mb-4">
                    Complete API documentation with code examples, endpoints, and authentication guides.
                  </p>
                  <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                    View API Docs →
                  </a>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step tutorials to help you set up and start using Ovanthra effectively.
                  </p>
                  <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                    Read Guide →
                  </a>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>
                  <p className="text-gray-600 mb-4">
                    Learn industry best practices and tips from our experts to optimize your workflows.
                  </p>
                  <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                    Learn More →
                  </a>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">FAQ & Support</h3>
                  <p className="text-gray-600 mb-4">
                    Find answers to common questions and get help from our support team.
                  </p>
                  <a href="/contact" className="text-orange-500 font-semibold hover:text-orange-600">
                    Contact Support →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Blog */}
          <section id="blog" className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Blog
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Latest insights, tips, and updates on AI automation, productivity, and digital transformation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">January 15, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      10 Ways AI Automation Can Transform Your Business
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how intelligent automation can streamline your operations and boost productivity.
                    </p>
                    <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                      Read Article →
                    </a>
                  </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">January 10, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Getting Started with OneLearn Platform
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive guide to setting up personalized learning paths for your team.
                    </p>
                    <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                      Read Article →
                    </a>
                  </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">January 5, 2025</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Security Best Practices for Enterprise AI
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to protect your data and ensure compliance with enterprise security standards.
                    </p>
                    <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                      Read Article →
                    </a>
                  </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">December 28, 2024</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Case Study: How a Startup Scaled with Ovanthra
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Real-world example of how AI automation helped a growing company increase efficiency by 300%.
                    </p>
                    <a href="#" className="text-orange-500 font-semibold hover:text-orange-600">
                      Read Article →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Support */}
          <section id="support" className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
                <p className="text-orange-50 text-lg mb-8 max-w-2xl mx-auto">
                  Our support team is here to help you succeed. Get in touch for personalized assistance, 
                  technical support, or general inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-block bg-white text-orange-500 font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:support@ovanthra.com" 
                    className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all hover:bg-white/10"
                  >
                    Email Us
                  </a>
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

