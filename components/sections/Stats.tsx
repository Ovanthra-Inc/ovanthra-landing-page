"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { stats } from '@/data/stats';
import { staggerContainer, viewportOnce } from '@/lib/animations';

const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useSpring(0, { damping: 100, stiffness: 100 });

    useEffect(() => {
        motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
            }
        });
    }, [motionValue]);

    useEffect(() => {
        motionValue.set(value);
    }, [motionValue, value]);

    return <span ref={ref} />;
}


const Stats: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="bg-gray-900 py-12" ref={ref}>
            <motion.div
                variants={staggerContainer(0.2)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={viewportOnce}
                className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
                {stats.map((stat, index) => {
                    const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
                    return (
                        <motion.div 
                            key={index}
                            className="text-center p-4 rounded-lg border border-orange-500/50"
                        >
                            <h3 className="text-4xl font-bold text-white">
                                {isInView && <AnimatedNumber value={numericValue} />}
                                {stat.value.replace(/[0-9.]/g, '')}
                            </h3>
                            <p className="text-orange-400">{stat.label}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    );
};

export default Stats;
