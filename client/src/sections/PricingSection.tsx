'use client'
import { PricingTable } from "@clerk/react";
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Pricing" text2="Simple, transparent pricing" text3="Start free, scale when you're ready. No hidden fees, no long-term contracts — cancel anytime." />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                <PricingTable appearance={{
                    variables: {
                        colorBackground: "none"
                    },
                    elements: {
                        pricingTableCardBody: "bg-pink-950/30 border border-pink-950",
                        pricingTableCardHeader: "bg-pink-950/30 border border-pink-950",
                        pricingTableCard: "",
                    }
                }}/>
            </div>
        </div>
    );
}

