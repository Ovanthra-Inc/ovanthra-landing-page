"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOnce } from '@/lib/animations';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
                <motion.div 
                    variants={staggerContainer(0.2)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            variants={fadeInUp}
                            className={`border rounded-lg p-6 flex flex-col ${plan.title === 'Pro' ? 'scale-105 border-orange-500 shadow-lg shadow-orange-500/20 glowing-border' : 'border-gray-200'}`}
                        >
                            <div className="relative z-10 bg-card p-6 rounded-lg h-full flex flex-col">
                                <h3 className="text-2xl font-bold">{plan.title}</h3>
                                <p className="text-gray-500">{plan.description}</p>
                                <div className="my-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-500">{plan.priceDetail}</span>
                                </div>
                                <Button className={`${plan.title === 'Pro' ? 'bg-primary-gradient' : ''}`}>{plan.buttonText}</Button>
                                <ul className="mt-4 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
