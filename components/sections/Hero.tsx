"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroDetails } from '@/data/hero';
import { fadeInDown, fadeInUp, scaleIn, viewportOnce } from '@/lib/animations';
import MeshGradient from '../ui/MeshGradient';
import MagneticButton from '../ui/MagneticButton';

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <MeshGradient />

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <motion.h1 
                    className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto tracking-tighter"
                    variants={fadeInDown}
                    initial="offscreen"
                    animate="onscreen"
                    viewport={viewportOnce}
                >
                    Smarter, Faster, AI-Driven <span className="text-transparent bg-clip-text bg-primary-gradient">Productivity</span>
                </motion.h1>
                <motion.p 
                    className="mt-4 text-foreground max-w-lg mx-auto"
                    variants={fadeInUp}
                    initial="offscreen"
                    animate="onscreen"
                    viewport={viewportOnce}
                    transition={{ delay: 0.2 }}
                >
                    {heroDetails.subheading}
                </motion.p>
                <motion.div
                    variants={scaleIn}
                    initial="offscreen"
                    animate="onscreen"
                    viewport={viewportOnce}
                    transition={{ delay: 0.4 }}
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                >
                    <MagneticButton>
                        Get Started
                    </MagneticButton>
                    <motion.div
                        style={{ y }}
                        className='relative mt-12 md:mt-16 mx-auto z-10'
                    >
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={384}
                            height={340}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority={true}
                            unoptimized={true}
                            alt="Ovanthra AI platform mockup showcasing intelligent automation features"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
