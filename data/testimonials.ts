import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Carter',
        role: 'Founder at Innovexa',
        message: `${siteDetails.siteName} has completely transformed our workflow. The AI automation features save us hours every week and let us focus on building great products.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Maya Lin',
        role: 'CTO at FluxAI',
        message: `As a CTO, I appreciate ${siteDetails.siteName}'s seamless integrations and adaptive AI agents. It’s intuitive, powerful, and future-ready.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Arjun Mehta',
        role: 'Product Manager',
        message: `${siteDetails.siteName} makes AI adoption effortless. OneLearn has helped our team upskill faster and automate key processes with ease.`,
        avatar: '/images/testimonial-3.webp',
    },
];