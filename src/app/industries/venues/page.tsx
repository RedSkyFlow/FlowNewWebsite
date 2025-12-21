"use client";

import React from "react";
import { Ticket, Users, Trophy, Smartphone, MapPin, BarChart3, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import { ShineBorder } from "@/components/shared/ShineBorder";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function VenuesPage() {
    return (
        <div className="min-h-screen bg-brand-base overflow-hidden text-white">

            {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
            <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

                {/* 1. Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/industries/stadiums 3.png"
                        alt="Stadium and Arena Connectivity"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* 2. Overlays & Gradients */}
                {/* Lighter overlay to let the image shine */}
                <div className="absolute inset-0 bg-brand-base/20 z-10" />
                {/* Gradient for text readability at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-base/90 via-brand-base/40 to-transparent z-10" />

                {/* 3. Content Panel - Bottom Left */}
                <div className="container relative z-20 px-4 pb-20 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="relative w-full group">
                            <ShineBorder variant="primary" className="rounded-3xl" />
                            <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-primary"
                                >
                                    <Trophy className="w-3 h-3" />
                                    Stadiums & Arenas
                                </motion.div>

                                {/* Headline */}
                                <div className="mb-6 w-full">
                                    <AnimatedHeading
                                        text="The Roar of the Crowd. The Speed of the Network."
                                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                                    />
                                </div>

                                {/* Subhead */}
                                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                                    Turn your stadium into a <span className="text-brand-primary font-medium">Venue OS</span>. Orchestrate fan experiences, optimize operations, and unlock new revenue streams with Intelligent WiFi.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <EnhancedButton size="lg" className="rounded-full bg-brand-primary text-brand-base font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(20,216,204,0.5)] transition-all">
                                        Audit Your Venue
                                    </EnhancedButton>
                                    <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                                        Venue Demo
                                    </EnhancedButton>
                                </div>

                            </GlassCard>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-brand-text/50"
                >
                    <span className="text-xs uppercase tracking-[0.2em] vertical-rl rotate-180">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary/50 to-transparent" />
                </motion.div>
            </section>

            {/* --- The Venue OS Concept --- */}
            <section className="py-24 container mx-auto px-4 relative z-20">
                <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-6">Introducing Venue OS</h3>
                    <p className="text-brand-text/80">
                        Stop treating WiFi as a utility. Start treating it as the central nervous system of your venue.
                        <b>Unified Identity</b> means one profile connects the Fan to the Shop, the Seat, and the Security team.
                    </p>
                </ScrollAnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollAnimatedSection delay={0.1}>
                        <GlassCard className="p-8 h-full border-brand-primary/30 bg-brand-primary/5">
                            <Smartphone className="w-10 h-10 text-brand-primary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Fan Engagement</h4>
                            <p className="text-sm text-brand-text/70">
                                In-seat ordering, exclusive instant replays, and "Flash Upgrades" for unsold VIP seats sent directly to their phone.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.2}>
                        <GlassCard className="p-8 h-full border-brand-accent2/30 bg-brand-accent2/5">
                            <Zap className="w-10 h-10 text-brand-accent2 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Operational Speed</h4>
                            <p className="text-sm text-brand-text/70">
                                Real-time crowd heatmaps allow you to redeploy security and cleaning staff to where the action is happening.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.3}>
                        <GlassCard className="p-8 h-full border-brand-secondary/30 bg-brand-secondary/5">
                            <BarChart3 className="w-10 h-10 text-brand-secondary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Sponsorship ROI</h4>
                            <p className="text-sm text-brand-text/70">
                                Prove the value of physical ads. "Users who stood near the Cola stand were 40% more likely to buy a drink."
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                </div>
            </section>

            {/* --- Role-Based Experience --- */}
            <section className="py-24 bg-black/20 relative z-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">One Network. Infinite Perspectives.</h2>
                        <p className="text-brand-text/60">See how Venue OS adapts to the user.</p>
                    </div>

                    <Tabs defaultValue="fan" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/5 border border-white/10 rounded-full p-2 mb-12">
                            <TabsTrigger value="fan" className="rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-brand-base">The Super Fan</TabsTrigger>
                            <TabsTrigger value="ops" className="rounded-full data-[state=active]:bg-brand-accent2">Venue Ops</TabsTrigger>
                        </TabsList>

                        {/* Fan Content */}
                        <TabsContent value="fan">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary"><Ticket size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Seamless Entry</h4>
                                            <p className="text-sm text-brand-text/70">Phone in pocket. Bio-authentication verified by network presence.</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-secondary/20 text-brand-secondary"><Smartphone size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">In-Seat Delivery</h4>
                                            <p className="text-sm text-brand-text/70">"Hotdog & Beer to Seat 42, Row 12." Ordered and paid via splash portal.</p>
                                        </div>
                                    </GlassCard>
                                </div>
                                <div className="relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent z-10" />
                                    {/* Mock Phone UI */}
                                    <div className="w-64 h-full bg-black border-4 border-gray-800 rounded-[30px] p-4 flex flex-col gap-4 relative z-20 shadow-2xl">
                                        <div className="w-full h-32 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary text-xs font-mono">
                                            [Replay Loading...]
                                        </div>
                                        <div className="text-white text-center font-bold">Exclusive Replay: The Goal</div>
                                        <div className="text-xs text-brand-text/60 text-center">Only available on Stadium WiFi</div>
                                        <div className="mt-auto w-full py-2 bg-brand-primary rounded-full text-center text-brand-base font-bold text-sm">Order Snacks</div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Ops Content */}
                        <TabsContent value="ops">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    {/* Mock Dashboard UI */}
                                    <div className="w-full h-full bg-[#0c0e1a] rounded-xl border border-white/10 p-4 flex flex-col gap-4 shadow-2xl relative">
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <div className="text-xs text-brand-text/60">CROWD DENSITY</div>
                                            <div className="text-xs text-brand-accent1 animate-pulse">CRITICAL: GATE 4</div>
                                        </div>
                                        <div className="flex-1 bg-brand-accent1/10 rounded-lg relative overflow-hidden">
                                            {/* Heatmap blobs */}
                                            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-brand-accent1/40 blur-xl rounded-full" />
                                            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-green-500/20 blur-xl rounded-full" />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 py-1 bg-white/10 rounded text-[10px] text-center text-white">Deploy Staff</div>
                                            <div className="flex-1 py-1 bg-brand-accent1 rounded text-[10px] text-center text-black font-bold">Open Overflow</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2 space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-accent1/20 text-brand-accent1"><Users size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Crowd Control</h4>
                                            <p className="text-sm text-brand-text/70">Heatmaps show bottlenecks in real-time. Direct staff before queues get dangerous.</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-accent2/20 text-brand-accent2"><ShieldCheck size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Asset Tracking</h4>
                                            <p className="text-sm text-brand-text/70">Know exactly where every security team member and medical cart is located.</p>
                                        </div>
                                    </GlassCard>
                                </div>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>

            <CallToActionSection
                title="Fill Every Seat"
                description="Create a world-class fan experience that keeps them coming back season after season."
                ctaText="Get a Venue Audit"
                ctaLink="/contact"
            />

        </div>
    );
}
