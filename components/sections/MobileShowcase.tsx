'use client';

import { Users, Layers, TrendingUp } from 'lucide-react';

const leftFeatures = [
  {
    icon: Users,
    title: 'Pixel Perfect Templates',
    description: 'Create powerful bootstrap landing pages with megapack and pixfort builder.',
  },
  {
    icon: Layers,
    title: 'High quality pages',
    description: 'Create powerful bootstrap landing pages with megapack and pixfort builder.',
  },
  {
    icon: TrendingUp,
    title: 'SEO optimized',
    description: 'You can create awesome and powerful bootstrap landing pages with megapack and pixfort builder.',
  },
];

export default function MobileShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          <div className="flex-1 space-y-12">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <feature.icon className="w-14 h-14 text-orange-500 stroke-[1.5]" />
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

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-[280px] h-[560px] bg-gradient-to-br from-pink-500 via-red-400 to-orange-400 rounded-[50px] shadow-2xl border-[14px] border-gray-900 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl" />

                <div className="absolute top-3 right-6 flex items-center space-x-1">
                  <div className="w-1 h-3 bg-white/70 rounded-full" />
                  <div className="w-1 h-3 bg-white/70 rounded-full" />
                  <div className="w-1 h-3 bg-white/70 rounded-full" />
                  <div className="w-1 h-3 bg-white/70 rounded-full" />
                  <div className="w-4 h-3 bg-white/70 rounded-sm ml-1" />
                </div>

                <div className="absolute top-3 left-6 text-white text-xs font-semibold">
                  9:41
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <Layers className="w-24 h-24 text-white stroke-[1.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
