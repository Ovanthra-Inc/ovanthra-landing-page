"use client"
import Image from "next/image";
import { motion, Variants } from "motion/react"
import { cn } from "@/lib/utils"

import BenefitBullet from "./BenefitBullet";
import { IBenefit } from "@/types";
import SectionTitle from "@/components/SectionTitle";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

// Custom child variants for benefit bullets (slides from left)
export const childVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            bounce: 0.2,
            duration: 0.8,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={fadeInUp}
                initial="offscreen"
                whileInView="onscreen"
                viewport={viewportOnce}
            >
                <div
                    className={cn("flex flex-wrap items-center w-full max-w-lg", imageAtRight ? "justify-start" : "lg:order-1 justify-end")}
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cn("mt-5 lg:mt-0", imageAtRight && "lg:order-2")}>
                    <div className={cn("w-fit flex", imageAtRight ? "justify-start" : "justify-end")}>
                        <Image src={imageSrc} alt={title} width="384" height="762" quality={100} className="lg:ml-0" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection