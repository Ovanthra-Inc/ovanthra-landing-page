'use client';

import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Contact Us',
    description: 'We provides you with a full user management functionality that results in faster development.',
    buttonText: 'Get in Touch',
    cta: true,
  },
  {
    title: 'Product',
    links: ['Meet our team', 'Help Center', 'terms of use', 'Privacy'],
  },
  {
    title: 'Company',
    links: ['Purchase', 'Templates', 'How it works', 'Sales'],
  },
  {
    title: 'Stay Connected',
    description: 'Find us on social network',
    social: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {section.title}
              </h3>

              {section.cta && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <a href="mailto:ovanthra@gmail.com" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all hover:scale-105 cursor-pointer">
                    {section.buttonText}
                  </a>
                </>
              )}

              {section.social && (
                <>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </Link>
                  </div>
                </>
              )}

              {section.links && (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            Ovanthra Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
