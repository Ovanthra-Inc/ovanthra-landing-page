import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 0,
        features: [
            'Access to OneLearn basic tools',
            'Single-user dashboard',
            'Cloud sync support',
            'Community support',
        ],
    },
    {
        name: 'Pro',
        price: 49,
        features: [
            'Full AI automation access',
            'Up to 10 team members',
            'Priority API integrations',
            'Email & chat support',
            'Advanced analytics dashboard',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Custom AI model integration',
            'Unlimited team members',
            'Dedicated support manager',
            'On-premise deployment options',
            'Custom automation workflows',
            'Advanced security controls',
        ],
    },
];