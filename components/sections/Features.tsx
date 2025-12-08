'use client';

import { Telescope, Smartphone, FileSearch, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Telescope,
    title: 'Discover core features',
    description: 'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
  },
  {
    icon: Smartphone,
    title: 'Make responsive pages',
    description: 'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
  },
  {
    icon: FileSearch,
    title: 'Access to source code',
    description: 'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
  },
  {
    icon: Gauge,
    title: 'SEO optimized',
    description: 'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:min-h-screen md:flex md:items-center bg-gray-50">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything is Possible!
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            From logo design to video animation, web development to website copy, expert designers
            developers and digital talent are ready to complete your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <feature.icon className="w-16 h-16 text-orange-500 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
          >
            <a href="#cta">AUTOMATE YOUR THOUGHT</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
