"use client";

import React from "react";
import { Check, Shield, TrendingUp, Sparkles, Zap, Lock, DollarSign, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// --- CORE PLANS ---
const plans = [
    {
        name: "Connect",
        subtitle: "The Secure Foundation",
        price: "Free",
        period: "Forever",
        icon: Shield,
        description: "The zero-risk way to start. Secure your network and start building your database today.",
        features: [
            "Includes 30-Day 'Capture' Trial",
            "Branded Captive Portal",
            "Legal Compliance (GDPR/POPIA)",
            "Basic Network Analytics",
            "Bandwidth Management"
        ],
        highlight: false,
        cta: "Start Free",
        style: "glass-card"
    },
    {
        name: "Capture",
        subtitle: "The Growth Engine",
        price: "License",
        period: "Per AP / Year",
        icon: TrendingUp,
        description: "Turn WiFi into a data channel. Capture validated first-party data.",
        features: [
            "All 'Connect' Features",
            "Social Login & SMS Auth",
            "CRM Integration (400+)",
            "Automated Marketing Triggers",
            "Presence Analytics & Heatmaps"
        ],
        highlight: true, // Recommended
        cta: "Request Quote",
        style: "perspex-card border-2 border-[#FFC145]/50 shadow-[0_0_40px_rgba(255,193,69,0.2)]"
    },
    {
        name: "Engage",
        subtitle: "The AI Magic Layer",
        price: "Custom",
        period: "Volume Based",
        icon: Sparkles,
        description: "Hyper-personalization with Flow Sense AI and SecurePass context.",
        features: [
            "All 'Capture' Features",
            "SecurePass™ Auto-Reconnection",
            "Flow Sense AI Concierge",
            "Custom User Journeys",
            "Micro-Location Targeting"
        ],
        highlight: false,
        cta: "Contact Sales",
        style: "glass-card"
    }
];

// --- ADD-ON MODULES ---
const addons = [
    {
        name: "Shield",
        description: "DNS-Level Content Filtering for family-friendly browsing.",
        icon: Lock
    },
    {
        name: "Paid WiFi",
        description: "Monetize your network with premium high-speed access tiers.",
        icon: DollarSign
    },
    {
        name: "Surveys",
        description: "Real-time micro-surveys with high conversion rates.",
        icon: MessageSquare
    },
    {
        name: "Verify",
        description: "Advanced SMS/Email identity verification.",
        icon: Check
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

import { ParticleThemeTrigger } from "@/components/shared/ParticleThemeTrigger";
import { StandardIcon } from "@/components/shared/StandardIcon";

export function PricingSection() {
    return (
        <section className="w-full py-24 relative z-10 overflow-hidden" id="pricing">
            <ParticleThemeTrigger colors={["#FFC145", "#FFD700", "#F4A261"]} className="absolute inset-0 pointer-events-none" />

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#0496FF]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-20">

                {/* 1. PLANS HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Intelligent Venue <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent2">Licensing</span>
                    </h2>
                    <p className="text-[#F5F0F6]/60 text-lg">
                        Powered by <b>Purple.ai</b>. Orchestrated by <b>Flow Networks</b>.
                    </p>
                </motion.div>

                {/* 2. PLANS GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto mb-24"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col ${plan.style} ${plan.highlight ? "z-10 scale-105" : "hover:border-white/20"}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFC145] text-[#1c203c] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 text-center lg:text-left">
                                <div className="mb-6 flex justify-center lg:justify-start">
                                    <StandardIcon
                                        icon={plan.icon}
                                        variant={plan.highlight ? "accent" : "primary"}
                                        size="md"
                                    />
                                </div>
                                <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? "text-[#FFC145]" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <p className="text-sm font-medium text-brand-accent2 uppercase tracking-wide mb-6">
                                    {plan.subtitle}
                                </p>

                                {/* Price Display */}
                                <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-[#F5F0F6]/50 text-sm">{plan.period}</span>
                                    )}
                                </div>

                                <p className="text-[#F5F0F6]/60 leading-relaxed min-h-[60px]">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#F5F0F6]/90">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-[#FFC145]" : "text-brand-primary"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${plan.highlight
                                ? "bg-[#FFC145] text-[#1c203c] hover:shadow-[0_0_20px_rgba(255,193,69,0.4)] hover:brightness-110"
                                : "btn-tertiary"
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 3. ADD-ONS SECTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">Available Power Add-Ons</h3>
                        <p className="text-[#F5F0F6]/60">Customize your stack with specialized modules.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {addons.map((addon, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card rounded-xl p-6 group cursor-default"
                            >
                                <div className="mb-4 text-brand-primary group-hover:text-brand-accent2 transition-colors">
                                    <addon.icon size={28} className="icon-glow-primary group-hover:icon-glow-accent" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{addon.name}</h4>
                                <p className="text-sm text-[#F5F0F6]/60 leading-relaxed">{addon.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
