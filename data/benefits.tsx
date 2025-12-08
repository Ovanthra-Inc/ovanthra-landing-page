import { FiBarChart2, FiBriefcase, FiLock, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Intelligent Automation",
        description: "Automate workflows, tasks, and data processes with AI that adapts to your unique business needs.",
        bullets: [
            {
                title: "Smart Workflows",
                description: "Streamline repetitive operations using Ovanthra’s adaptive automation engine.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Custom AI Actions",
                description: "Design automation flows tailored to your goals and trigger them instantly.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Predictive Insights",
                description: "Stay ahead with real-time AI forecasts that help you make smarter decisions.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "OneLearn Platform",
        description: "Empower your team with AI-guided learning paths, content generation, and smart collaboration tools.",
        bullets: [
            {
                title: "Personalized Learning",
                description: "Adaptive AI models curate content based on user goals and performance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Collaborative AI Agents",
                description: "Work with intelligent agents that brainstorm, automate, and organize your workflow.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Analytics",
                description: "Monitor engagement and learning outcomes with dynamic dashboards.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Enterprise-Grade Security",
        description: "Your data deserves the best protection. Ovanthra employs cutting-edge, AI-enhanced security measures.",
        bullets: [
            {
                title: "End-to-End Encryption",
                description: "Your information is protected with advanced encryption at every layer.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Secure access with fingerprint or facial recognition options.",
                icon: <FiUser size={26} />
            },
            {
                title: "AI Threat Detection",
                description: "Continuous monitoring for unusual activity to keep your operations safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]