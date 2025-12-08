'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { tiers } from '@/data/pricing';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your growth.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`relative p-8 rounded-3xl border flex flex-col ${index === 1 ? 'border-orange-500 shadow-xl bg-orange-50/30' : 'border-gray-200 bg-white'}`}>
                            {index === 1 && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</span>
                            )}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                                    </span>
                                    {typeof tier.price === 'number' && <span className="text-gray-500">/mo</span>}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-orange-500 shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full rounded-full ${index === 1 ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-900 hover:bg-gray-800'}`}>
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pricing;