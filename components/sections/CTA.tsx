"use client";

import { motion } from "motion/react";
import { ctaDetails } from "@/data/cta"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <motion.div 
                        className="h-full flex flex-col items-center justify-center text-white text-center px-5"
                        variants={fadeInUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={viewportOnce}
                    >
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl"
                            variants={fadeInUp}
                        >
                            {ctaDetails.heading}
                        </motion.h2>

                        <motion.p 
                            className="mx-auto max-w-xl md:px-5"
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            {ctaDetails.subheading}
                        </motion.p>

                        <motion.div 
                            className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Button 
                                asChild
                                size="lg"
                                className={cn("bg-white text-black hover:bg-white/90 rounded-full transition-all")}
                            >
                                <motion.a 
                                    href="mailto:ovanthra@gmail.com"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                </motion.a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CTA
