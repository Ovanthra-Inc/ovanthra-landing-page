
import { Variants } from 'framer-motion';

export const viewportOnce = {
    once: true,
    margin: "0px 0px -100px 0px",
};

export const staggerContainer = (staggerChildren: number): Variants => ({
    offscreen: {},
    onscreen: {
        transition: {
            staggerChildren: staggerChildren,
        },
    },
});

export const fadeInUp: Variants = {
    offscreen: {
        y: 30,
        opacity: 0,
        scale: 0.95,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const staggerChild: Variants = {
    offscreen: {
        y: 30,
        opacity: 0,
        scale: 0.95,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const fadeInDown: Variants = {
    offscreen: {
        y: -30,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const scaleIn: Variants = {
    offscreen: {
        scale: 0.5,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};
