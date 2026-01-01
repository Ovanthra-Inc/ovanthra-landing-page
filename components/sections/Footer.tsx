'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { footerDetails } from '@/data/footer';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {footerDetails.subheading}
            </p>
            <a 
              href={`mailto:${footerDetails.email}`} 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all hover:scale-105 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Product
            </h3>
            <ul className="space-y-3">
              {footerDetails.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">Find us on social networks</p>
            <div className="flex items-center space-x-4">
              {footerDetails.socials.facebook && (
                <Link
                  href={footerDetails.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              )}
              {footerDetails.socials.twitter && (
                <Link
                  href={footerDetails.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              )}
              {footerDetails.socials.instagram && (
                <Link
                  href={footerDetails.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              )}
              {footerDetails.socials.linkedin && (
                <Link
                  href={footerDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              )}
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>
                <a href={`mailto:${footerDetails.email}`} className="hover:text-orange-500 transition-colors">
                  {footerDetails.email}
                </a>
              </p>
              <p>
                <a href={`tel:${footerDetails.telephone.replace(/\s/g, '')}`} className="hover:text-orange-500 transition-colors">
                  {footerDetails.telephone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            {footerDetails.subheading.split('.')[0]}. Copyright © {new Date().getFullYear()} Ovanthra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
