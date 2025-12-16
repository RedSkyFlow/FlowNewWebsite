"use client";

import React from "react";
import {
    ShieldCheck,
    Zap,
    Globe,
    Lock,
    Smartphone,
    BarChart3,
    CheckCircle2,
    Users
} from "lucide-react";

export function BenefitsGridSection() {
    const benefits = [
        {
            title: "98% Validated Data",
            description: "Our proprietary filtering engine eliminates ghost logins and MAC randomization noise, giving you pristine datasets.",
            icon: CheckCircle2,
        },
        {
            title: "Instant Integration",
            description: "Deploy in minutes with our universal API that plays nicely with Cisco, Aruba, Meraki, and Ruckus setuos.",
            icon: Zap,
        },
        {
            title: "Global Scalability",
            description: "Built on a serverless edge network that handles millions of daily concurrent sessions without breaking a sweat.",
            icon: Globe,
        },
        {
            title: "Privacy First Identity",
            description: "Fully GDPR & CCPA compliant. We hash all PII instantly and offer granular consent management controls.",
            icon: Lock,
        },
        {
            title: "Seamless Mobile Onboarding",
            description: "Reduce friction with one-tap social logins and Passpoint™ automated roaming authentication.",
            icon: Smartphone,
        },
        {
            title: "Real-Time Actionable Insights",
            description: "Don't wait for weekly reports. See live dwell times, heatmaps, and conversion funnels as they happen.",
            icon: BarChart3,
        },
    ];

    return (
        <section className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Why Leading Venues <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC145] to-[#FF4E00]">Trust Flow Networks</span>
                    </h2>
                    <p className="text-lg text-[#F5F0F6]/70">
                        Stop guessing. Start knowing. Transform your WiFi from a cost center into your most valuable data asset.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#131629]/60 border border-white/5 rounded-2xl p-8 hover:bg-[#131629]/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                        >
                            {/* Gold Glow Hover Effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-[#FFC145]/0 via-[#FFC145]/0 to-[#FFC145]/0 rounded-2xl group-hover:from-[#FFC145]/20 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-[#FFC145]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#FFC145]/20">
                                    <benefit.icon className="w-6 h-6 text-[#FFC145] drop-shadow-[0_0_8px_rgba(255,193,69,0.5)]" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC145] transition-colors">
                                    {benefit.title}
                                </h3>

                                <p className="text-[#F5F0F6]/60 leading-relaxed font-light">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
