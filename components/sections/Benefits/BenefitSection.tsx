"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

type BenefitSectionProps = {
  benefit: {
    title: string;
    description: string;
    icon: LucideIcon;
    colSpan: number;
  };
};

const colSpanClasses = {
  4: "md:col-span-4",
  7: "md:col-span-7",
};

const BenefitSection: React.FC<BenefitSectionProps> = ({ benefit }) => {
  const colSpanClass = colSpanClasses[benefit.colSpan as keyof typeof colSpanClasses] || "md:col-span-11";

  return (
    <motion.div
      variants={fadeInUp}
      viewport={viewportOnce}
      className={`glass-card p-6 rounded-lg col-span-11 ${colSpanClass}`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary-gradient p-2 rounded-full">
          <benefit.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{benefit.title}</h3>
      </div>
      <p className="mt-4">{benefit.description}</p>
    </motion.div>
  );
};

export default BenefitSection;
