'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import { BadgeCheck, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        {/* Mission Part */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <h4 className="text-orange-500 font-bold tracking-wider uppercase">Who We Are</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              We are building the future of <span className="text-orange-500">Digital Innovation</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Ovanthra, our mission is to empower businesses with intelligent automation and stunning design. 
              We believe that technology should not just solve problems but elevate the human potential to create 
              and innovate.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Target size={24} />
                </div>
                <span className="font-medium text-gray-800">Mission Driven</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Zap size={24} />
                </div>
                <span className="font-medium text-gray-800">Fast Execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <BadgeCheck size={24} />
                </div>
                <span className="font-medium text-gray-800">Quality First</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ovanthra Team Meeting" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative Orange Box */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 rounded-xl -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* Company History / Timeline */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-300 before:to-transparent">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-xs">
                2020
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900">Inception</h4>
                <p className="text-gray-500 text-sm mt-1">Ovanthra was founded with a single laptop and a big vision.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-xs">
                2022
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900">Global Expansion</h4>
                <p className="text-gray-500 text-sm mt-1">Expanded our services to 15+ countries and grew the team to 50.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-xs">
                2025
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900">AI Revolution</h4>
                <p className="text-gray-500 text-sm mt-1">Launching OneLearn and automating workflows for enterprise clients.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;