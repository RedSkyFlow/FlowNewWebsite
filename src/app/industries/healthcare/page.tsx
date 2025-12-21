"use client";

import React from "react";
import { HeartPulse, Stethoscope, MapPin, Activity, ShieldPlus, Clock, Users, Smartphone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ShineBorder } from "@/components/shared/ShineBorder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HealthcarePage() {
    return (
        <div className="min-h-screen bg-brand-base overflow-hidden text-white">

            {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
            <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

                {/* 1. Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/industries/healthcare.png"
                        alt="Connected Healthcare and Patient Experience"
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
                            <ShineBorder variant="accent" className="rounded-3xl" />
                            <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent1/30 bg-brand-accent1/10 text-brand-accent1 text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-accent"
                                >
                                    <HeartPulse className="w-3 h-3" />
                                    Healthcare & Hospitals
                                </motion.div>

                                {/* Headline */}
                                <div className="mb-6 w-full">
                                    <AnimatedHeading
                                        text="The Digital Heartbeat of Modern Care"
                                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                                    />
                                </div>

                                {/* Subhead */}
                                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                                    Improve patient outcomes and operational efficiency with <span className="text-brand-accent1 font-medium">Connected Care</span>. From blue-dot navigation to asset tracking, we save minutes that matter.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <EnhancedButton size="lg" className="rounded-full bg-brand-accent1 text-brand-base font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(255,78,0,0.5)] transition-all">
                                        Explore Solutions
                                    </EnhancedButton>
                                    <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                                        Hospital Demo
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
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent1/50 to-transparent" />
                </motion.div>
            </section>

            {/* --- The Concept Section --- */}
            <section className="py-24 container mx-auto px-4 relative z-20">
                <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-6">Patient Experience Meets Clinical Efficiency</h3>
                    <p className="text-brand-text/80">
                        Hospitals are complex mazes. Patients feel lost; clinicians are overworked.
                        Our platform uses the network to guide people, locate assets, and secure data.
                    </p>
                </ScrollAnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollAnimatedSection delay={0.1}>
                        <GlassCard className="p-8 h-full border-brand-primary/30 bg-brand-primary/5">
                            <MapPin className="w-10 h-10 text-brand-primary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Blue-Dot Wayfinding</h4>
                            <p className="text-sm text-brand-text/70">
                                Reduce missed appointments. Guide patients from the parking lot to the X-Ray room with turn-by-turn navigation on their phone.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.2}>
                        <GlassCard className="p-8 h-full border-brand-accent1/30 bg-brand-accent1/5">
                            <Activity className="w-10 h-10 text-brand-accent1 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Asset Tracking</h4>
                            <p className="text-sm text-brand-text/70">
                                Stop searching for wheelchairs and infusion pumps. Tag critical assets and see their real-time location on the network map.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.3}>
                        <GlassCard className="p-8 h-full border-brand-secondary/30 bg-brand-secondary/5">
                            <ShieldPlus className="w-10 h-10 text-brand-secondary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">HIPAA Compliance</h4>
                            <p className="text-sm text-brand-text/70">
                                Secure guest networks keep patient data isolated. Friendly WiFi certification ensures content safety for families.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                </div>
            </section>

            {/* --- Role-Based Experience --- */}
            <section className="py-24 bg-black/20 relative z-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">A Better Day for Everyone</h2>
                        <p className="text-brand-text/60">How Connected Care helps patients and providers.</p>
                    </div>

                    <Tabs defaultValue="patient" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/5 border border-white/10 rounded-full p-2 mb-12">
                            <TabsTrigger value="patient" className="rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-brand-base">Patient / Visitor</TabsTrigger>
                            <TabsTrigger value="clinician" className="rounded-full data-[state=active]:bg-brand-accent1">Clinician / Admin</TabsTrigger>
                        </TabsList>

                        {/* Patient Content */}
                        <TabsContent value="patient">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary"><MapPin size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">"Where do I go?"</h4>
                                            <p className="text-sm text-brand-text/70">Connected to Free WiFi. Link to 'Navigate to Appointment' appears. Turn-by-turn directions provided.</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-secondary/20 text-brand-secondary"><Smartphone size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Bedside Comfort</h4>
                                            <p className="text-sm text-brand-text/70">Order meals, control room temperature (IoT integration), and access entertainment via the patient portal.</p>
                                        </div>
                                    </GlassCard>
                                </div>
                                <div className="relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent z-10" />
                                    {/* Mock Phone UI */}
                                    <div className="w-64 h-full bg-white border-4 border-gray-200 rounded-[30px] p-4 flex flex-col gap-4 relative z-20 shadow-2xl">
                                        <div className="w-full p-4 bg-blue-600 rounded-xl text-white shadow-lg">
                                            <div className="font-bold text-lg mb-1">Turn Right</div>
                                            <div className="text-blue-100 text-sm">in 20 meters</div>
                                            <div className="mt-2 text-3xl opacity-50">↱</div>
                                        </div>
                                        <div className="flex-1 bg-gray-100 rounded-xl relative overflow-hidden">
                                            {/* Fake map */}
                                            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-blue-500 -translate-x-1/2 rotate-45" />
                                            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-pulse shadow-xl" />
                                            <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-bold">Dest: Radiology, 2nd Floor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Clinician Content */}
                        <TabsContent value="clinician">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    {/* Mock Dashboard UI */}
                                    <div className="w-full h-full bg-[#1e2342] rounded-xl border border-white/10 p-4 flex flex-col gap-4 shadow-2xl relative">
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <div className="text-xs text-brand-text/60">ASSET FINDER</div>
                                            <div className="text-xs text-brand-primary">Scanning...</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-2 bg-white/5 rounded hover:bg-white/10 cursor-pointer border border-white/5">
                                                <div className="text-sm text-white">Infusion Pump A42</div>
                                                <div className="text-xs text-brand-accent2">Room 304</div>
                                            </div>
                                            <div className="flex justify-between items-center p-2 bg-white/5 rounded hover:bg-white/10 cursor-pointer border border-white/5">
                                                <div className="text-sm text-white">Wheelchair #12</div>
                                                <div className="text-xs text-brand-accent2">Lobby</div>
                                            </div>
                                            <div className="flex justify-between items-center p-2 bg-white/5 rounded hover:bg-white/10 cursor-pointer border border-white/5 opacity-50">
                                                <div className="text-sm text-white">Crash Cart 2</div>
                                                <div className="text-xs text-red-400">Off Network</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2 space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-accent1/20 text-brand-accent1"><Clock size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Time Saved</h4>
                                            <p className="text-sm text-brand-text/70">Nurses save an average of 45 minutes per shift by locating equipment instantly via the app.</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary"><Stethoscope size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Staff Duress</h4>
                                            <p className="text-sm text-brand-text/70">Wearable tags allow staff to signal for help. Location is pinpointed immediately on security dashboards.</p>
                                        </div>
                                    </GlassCard>
                                </div>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>
        </div>
    );
}
