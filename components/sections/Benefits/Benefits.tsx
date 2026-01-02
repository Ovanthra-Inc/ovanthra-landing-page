"use client";

import React from "react";
import { motion } from "framer-motion";
import { benefits } from "@/data/benefits";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import BenefitSection from "./BenefitSection";

const Benefits: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer(0.4)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportOnce}
      className="grid grid-cols-11 gap-8"
    >
      {benefits.map((benefit, index) => (
        <BenefitSection key={index} benefit={benefit} />
      ))}
    </motion.div>
  );
};

export default Benefits;
