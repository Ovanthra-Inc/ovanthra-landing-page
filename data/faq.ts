import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. Ovanthra uses enterprise-grade encryption, continuous threat monitoring, and AI-driven anomaly detection to ensure your data is always safe.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Yes. Your Ovanthra account syncs seamlessly across web, desktop, and mobile devices for a unified experience.',
    },
    {
        question: 'Does Ovanthra integrate with my existing tools?',
        answer: `Yes. ${siteDetails.siteName} connects easily with your favorite productivity, data, and communication platforms.`,
    },
    {
        question: 'What is OneLearn?',
        answer: 'OneLearn is Ovanthra’s AI-powered platform for intelligent learning, automation, and team collaboration — built to help you grow faster with AI.',
    },
    {
        question: 'What if I need help using the platform?',
        answer: 'Our support team is available via chat or email. We also offer a rich knowledge base and AI assistant to help you every step of the way.',
    }
];