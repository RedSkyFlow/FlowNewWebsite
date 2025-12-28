"use client";

import React from "react";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreviewSection";
import { ParticleBackground } from "@/components/shared/ParticleBackground";


export default function AnalyticsPage() {
    return (
        <main className="relative min-h-screen bg-brand-base overflow-x-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">
            <ParticleBackground
                className="fixed inset-0 z-0"
                particleCount={30}
                speed={0.1}
                lineDistance={180}
            />

            <div className="relative z-10">
                {/* Hero / Intro specifically for the Analytics view */}
                <section className="pt-32 pb-12 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Nervous System</span>
                    </h1>
                    <p className="text-xl text-brand-text/70 max-w-3xl mx-auto">
                        We don't just capture data; we preserve connection. Get absolute visibility
                        into your physical space with the depth of web analytics and the soul of
                        human experience.
                    </p>
                </section>

                <DashboardPreviewSection />

                {/* Additional detailed sections can be added here later */}
                <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Real-Time Intelligence</h2>
                                <p className="text-lg text-brand-text/70 mb-8">
                                    Our platform acts as the bridge between digital insight and physical presence.
                                    Monitor your venue's health, guest flow, and marketing ROI in a single,
                                    beautifully orchestrated dashboard.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Presence & Dwell Metrics",
                                        "1st Party Data Capture",
                                        "Automated CRM Triggers",
                                        "DNS-Level Network Security"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-brand-primary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#14D8CC]" />
                                            <span className="text-white/90 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/30 font-mono text-sm uppercase tracking-widest">Neural Map Visualization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </main>
    );
}
