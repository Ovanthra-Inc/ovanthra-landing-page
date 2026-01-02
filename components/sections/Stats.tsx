'use client';

import React from 'react';
import { motion } from 'motion/react';
import Container from '@/components/Container';
import { stats } from '@/data/stats';
import { staggerContainer, staggerChild, viewportOnce } from '@/lib/animations';

const Stats: React.FC = () => {
    return (
        <section className="py-10 bg-orange-500 text-white">
            <Container>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20"
                    variants={staggerContainer}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={viewportOnce}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className="p-4 flex flex-col items-center justify-center"
                            variants={staggerChild}
                        >
                            <motion.div 
                                className="mb-2 p-3 bg-white/20 rounded-full text-white"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {React.cloneElement(stat.icon, { className: "text-white w-6 h-6" })}
                            </motion.div>
                            <h3 className="text-4xl font-bold mb-1">{stat.title}</h3>
                            <p className="text-white/80 text-sm max-w-[200px]">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Stats;
