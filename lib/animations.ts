import { Variants } from "motion/react";

/**
 * Shared animation variants for consistent animations across the app
 */

// Fade in from bottom - used for sections appearing on scroll
export const fadeInUp: Variants = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

// Fade in from top - for hero elements
export const fadeInDown: Variants = {
  offscreen: {
    opacity: 0,
    y: -40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

// Fade in - simple fade animation
export const fadeIn: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Scale in - for images and cards
export const scaleIn: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  offscreen: {
    opacity: 0,
    x: -60,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  offscreen: {
    opacity: 0,
    x: 60,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

// Stagger container - for lists with staggered children
export const staggerContainer: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger child - for use with staggerContainer
export const staggerChild: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Common viewport settings
export const viewportOnce = {
  once: true,
  amount: 0.3,
} as const;

export const viewportAlways = {
  once: false,
  amount: 0.3,
} as const;

