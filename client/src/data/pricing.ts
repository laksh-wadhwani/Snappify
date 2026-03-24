import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 19,
        period: "month",
        features: [
            "30 ad generations per month",
            "3 platforms (Instagram, Facebook, Google)",
            "3 tone presets",
            "Basic copy variations",
            "Email support",
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 49,
        period: "month",
        features: [
            "Unlimited ad generations",
            "All platforms incl. TikTok & Reels",
            "Custom tone & brand voice",
            "A/B copy variations",
            "Ad performance tips",
            "Priority support",
            "Export to CSV / clipboard",
        ],
        mostPopular: true
    },
    {
        name: "Agency",
        price: 129,
        period: "month",
        features: [
            "Everything in Pro",
            "Up to 20 client workspaces",
            "Team collaboration",
            "White-label exports",
            "Dedicated account manager",
        ],
        mostPopular: false
    }
];