'use client';

import Image from 'next/image';
import { IMAGE_CONFIG } from '@/config/constants';

export default function Gallery() {
  const galleryItems = IMAGE_CONFIG.GALLERY_ITEMS;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery is Here!
          </h2>
          <p className="text-orange-500 text-lg max-w-3xl mx-auto">
            This is just a simple text made for this unique and awesome template, you can replace it with any text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={image}
                alt={`Gallery item ${index + 1}`}
                fill
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes={IMAGE_CONFIG.RESPONSIVE_SIZES}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
