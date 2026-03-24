import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Changelog", href: "#changelog" },
        ]
    },
    {
        title: "Use Cases",
        links: [
            { name: "Instagram Ads", href: "#" },
            { name: "TikTok Ads", href: "#" },
            { name: "Facebook Ads", href: "#" },
            { name: "Google Ads", href: "#" },
            { name: "Reels & Shorts", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About us", href: "#about" },
            { name: "Blog", href: "#blog" },
            { name: "Careers", href: "#careers" },
            { name: "Contact", href: "#contact" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Terms of Service", href: "#terms" },
            { name: "Cookie Policy", href: "#cookies" },
        ]
    }
];