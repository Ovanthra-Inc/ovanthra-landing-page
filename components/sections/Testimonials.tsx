'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Loved by Innovators</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                            <div className="flex-1">
                                <p className="text-gray-600 leading-relaxed italic">"{item.message}"</p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                                    <p className="text-orange-500 text-xs font-medium">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;