"use client";

import React from "react";
import { MoveRight, ShieldCheck, Wifi, Database, UserCheck, BarChart3, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button"; // Fixed typo

export default function GuestWiFiPage() {
    return (
        <div className="relative min-h-screen bg-brand-base overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative w-full pt-32 pb-20 px-4 container mx-auto flex flex-col items-center text-center">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-brand-accent2/10 rounded-full blur-[80px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6"
                >
                    <Wifi className="w-3 h-3" />
                    Powered by Purple.ai
                </motion.div>

                <AnimatedHeading
                    text="The Engine for Intelligent Spaces"
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
                />

                <p className="text-brand-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Secure, scalable, and compliant Guest WiFi. We build the <span className="text-white font-medium">vehicle</span> for your digital strategy using the world's most powerful <span className="text-brand-accent2 font-medium">engine</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <button className="px-8 py-3 rounded-full bg-brand-primary text-brand-base font-bold text-base hover:shadow-[0_0_20px_rgba(20,216,204,0.4)] transition-all flex items-center gap-2 group">
                        Get Connected
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-3 rounded-full border border-brand-text/10 text-brand-text font-medium text-base hover:bg-white/5 transition-all">
                        View Coverage Map
                    </button>
                </div>

                {/* Hero Visual */}
                <ScrollAnimatedSection className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-[#0c0e1a]">
                    <Image
                        src="/Images/solutions/Venue WiFi.jpg"
                        alt="Intelligent Venue WiFi"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent" />

                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                            <UserCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-brand-text/60">Uptime Assurance</div>
                        </div>
                    </div>
                </ScrollAnimatedSection>
            </section>

            {/* --- The Tiers Section (Engine & Vehicle) --- */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scalable Tiers for Every Venue</h2>
                    <p className="text-brand-text/60 max-w-2xl mx-auto">
                        From basic compliance to advanced hyper-personalization, our platform grows with you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tier 1: Connect */}
                    <ScrollAnimatedSection delay={0.1}>
                        <GlassCard className="h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent2/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100" />
                            <div className="p-2 w-fit rounded-lg bg-brand-accent2/20 text-brand-accent2 mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Connect</h3>
                            <p className="text-sm text-brand-primary font-medium mb-4">The Foundation</p>
                            <p className="text-brand-text/70 text-sm mb-6">
                                Secure, compliant guest access. Fully branded splash pages that protect your liability and get users online instantly.
                            </p>
                            <ul className="space-y-2 text-sm text-brand-text/60 mb-6">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent2" /> Social Login</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent2" /> Legal Compliance</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent2" /> Bandwidth Management</li>
                            </ul>
                        </GlassCard>
                    </ScrollAnimatedSection>

                    {/* Tier 2: Capture */}
                    <ScrollAnimatedSection delay={0.2}>
                        <GlassCard className="h-full relative overflow-hidden group border-brand-primary/30">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100" />
                            <div className="p-2 w-fit rounded-lg bg-brand-primary/20 text-brand-primary mb-4">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Capture</h3>
                            <p className="text-sm text-brand-secondary font-medium mb-4">The Growth Engine</p>
                            <p className="text-brand-text/70 text-sm mb-6">
                                Turn anonymous visitors into known profiles. Collect first-party data securely and pipe it directly into your CRM.
                            </p>
                            <ul className="space-y-2 text-sm text-brand-text/60 mb-6">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> CRM Integration</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Demographic Data</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Sentiment Surveys</li>
                            </ul>
                        </GlassCard>
                    </ScrollAnimatedSection>

                    {/* Tier 3: Engage */}
                    <ScrollAnimatedSection delay={0.3}>
                        <GlassCard className="h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent1/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100" />
                            <div className="p-2 w-fit rounded-lg bg-brand-accent1/20 text-brand-accent1 mb-4">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Engage</h3>
                            <p className="text-sm text-brand-accent1 font-medium mb-4">The Magic Layer</p>
                            <p className="text-brand-text/70 text-sm mb-6">
                                Real-time logic. If a VIP walks in, notify the manager. If a customer dwells in Aisle 4, send a coupon.
                            </p>
                            <ul className="space-y-2 text-sm text-brand-text/60 mb-6">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent1" /> Proximity Marketing</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent1" /> Automated Flows</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent1" /> Presence Triggers</li>
                            </ul>
                        </GlassCard>
                    </ScrollAnimatedSection>
                </div>
            </section>

            {/* --- Integration Feature Highlight --- */}
            <section className="py-24 bg-black/20 relative">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <ScrollAnimatedSection>
                            <div className="inline-block text-brand-primary text-sm font-bold tracking-widest mb-2 uppercase">Purple.ai Certified</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on a Global Standard</h2>
                            <p className="text-brand-text/70 text-lg mb-8">
                                We utilize the Purple.ai platform—trusted by 98% of the world's top venues—to ensure your infrastructure is rock-solid.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">90+</div>
                                    <div className="text-sm text-brand-text/60">Countries Deployed</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">100M+</div>
                                    <div className="text-sm text-brand-text/60">Users Connected</div>
                                </div>
                            </div>
                        </ScrollAnimatedSection>
                    </div>
                    <div className="flex-1 relative">
                        <ScrollAnimatedSection delay={0.2} className="relative z-10">
                            {/* Abstract 'Map' representation */}
                            <div className="bg-[#1a1f3c] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <Globe className="w-full h-full text-brand-primary/5 absolute top-0 left-0 scale-150 rotate-12" />
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">Global Reach, Local Support</h3>
                                <p className="text-sm text-brand-text/70 mb-0 relative z-10">
                                    Whether you operate a single boutique or a multi-national franchise, our infrastructure scales instantly without hardware replacement.
                                </p>
                            </div>
                        </ScrollAnimatedSection>
                    </div>
                </div>
            </section>

        </div>
    );
}
