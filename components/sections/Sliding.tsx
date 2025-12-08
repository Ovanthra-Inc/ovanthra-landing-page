'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SLIDER_CONFIG, A11Y_CONFIG } from '@/config/constants';

const slides = [
  {
    title: 'Most Advanced Tools',
    subtitle: 'From logo design to website designs, we are ready.',
    buttonText: 'Purchase MegaPack',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Professional Design Services',
    subtitle: 'Creating stunning visuals for your business.',
    buttonText: 'Get Started',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Build Your Dream Website',
    subtitle: 'Expert developers ready to bring your vision to life.',
    buttonText: 'Start Building',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function Sliding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDER_CONFIG.AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === A11Y_CONFIG.KEYBOARD_KEYS.ARROW_LEFT) prevSlide();
      if (e.key === A11Y_CONFIG.KEYBOARD_KEYS.ARROW_RIGHT) nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] mt-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md shadow-lg transition-all hover:scale-105"
              >
                <a href="#cta">{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
