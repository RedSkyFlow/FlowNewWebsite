"use client";

import React from "react";
import { ConciergeBell, BedDouble, Wifi, Key, Coffee, Star, MessageSquare, Utensils } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ShineBorder } from "@/components/shared/ShineBorder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HospitalityPage() {
    return (
        <div className="min-h-screen bg-brand-base overflow-hidden text-white">

            {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
            <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

                {/* 1. Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/industries/Hotel concierge.png"
                        alt="Luxury Hospitality and Digital Concierge"
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
                            <ShineBorder variant="luxury" className="rounded-3xl" />
                            <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-secondary"
                                >
                                    <ConciergeBell className="w-3 h-3" />
                                    Hotels & Hospitality
                                </motion.div>

                                {/* Headline */}
                                <div className="mb-6 w-full">
                                    <AnimatedHeading
                                        text="Your 5-Star Digital Concierge"
                                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                                    />
                                </div>

                                {/* Subhead */}
                                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                                    Delight guests before they even check in. From <span className="text-brand-secondary font-medium">Zero-Friction</span> access to personalized poolside service, Intelligent WiFi is the amenity they actually care about.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <EnhancedButton size="lg" className="rounded-full bg-brand-secondary text-brand-base font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(255,193,69,0.5)] transition-all">
                                        Upgrade Your Network
                                    </EnhancedButton>
                                    <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                                        View Guest Demo
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
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand-secondary/50 to-transparent" />
                </motion.div>
            </section>

            {/* --- The Concept Section --- */}
            <section className="py-24 container mx-auto px-4 relative z-20">
                <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-6">The Invisible Luxury</h3>
                    <p className="text-brand-text/80">
                        Modern guests don't want to call the front desk. They want control in the palm of their hand.
                        Turn your WiFi splash page into a command center for their stay.
                    </p>
                </ScrollAnimatedSection>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollAnimatedSection delay={0.1}>
                        <GlassCard className="p-8 h-full border-brand-primary/30 bg-brand-primary/5">
                            <Key className="w-10 h-10 text-brand-primary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Digital Checks-In</h4>
                            <p className="text-sm text-brand-text/70">
                                Skip the lobby queue. The network recognizes them upon arrival and pushes a digital room key to their phone.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.2}>
                        <GlassCard className="p-8 h-full border-brand-secondary/30 bg-brand-secondary/5">
                            <Star className="w-10 h-10 text-brand-secondary mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Loyalty Recognition</h4>
                            <p className="text-sm text-brand-text/70">
                                "Welcome back, Ms. Jones." The network knows she's a Platinum member and automatically upgrades her bandwidth speed.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={0.3}>
                        <GlassCard className="p-8 h-full border-brand-accent2/30 bg-brand-accent2/5">
                            <Wifi className="w-10 h-10 text-brand-accent2 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Work & Play</h4>
                            <p className="text-sm text-brand-text/70">
                                Seamless roaming from the conference room to the cabana. Secure VPN support for business, 4K streaming for leisure.
                            </p>
                        </GlassCard>
                    </ScrollAnimatedSection>
                </div>
            </section>

            {/* --- Role-Based Experience --- */}
            <section className="py-24 bg-black/20 relative z-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">A Stay to Remember</h2>
                        <p className="text-brand-text/60">See the experience from both sides of the front desk.</p>
                    </div>

                    <Tabs defaultValue="guest" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/5 border border-white/10 rounded-full p-2 mb-12">
                            <TabsTrigger value="guest" className="rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-brand-base">The Guest</TabsTrigger>
                            <TabsTrigger value="staff" className="rounded-full data-[state=active]:bg-brand-secondary">Hotel Staff</TabsTrigger>
                        </TabsList>

                        {/* Guest Content */}
                        <TabsContent value="guest">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary"><Utensils size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Poolside Ordering</h4>
                                            <p className="text-sm text-brand-text/70">Scan QR code or click 'Order' on WiFi splash. "Club Sandwich to Cabana 4".</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-secondary/20 text-brand-secondary"><MessageSquare size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Instant Concierge</h4>
                                            <p className="text-sm text-brand-text/70">"I need extra towels." Chat bot dispatches request to housekeeping instantly.</p>
                                        </div>
                                    </GlassCard>
                                </div>
                                <div className="relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent z-10" />
                                    {/* Mock Phone UI */}
                                    <div className="w-64 h-full bg-[#f8f8f8] border-4 border-gray-300 rounded-[30px] p-0 overflow-hidden flex flex-col relative z-20 shadow-2xl">
                                        <div className="h-40 bg-cover bg-center bg-[url('/Images/solutions/Venue%20WiFi.jpg')]">
                                            <div className="w-full h-full bg-black/30 flex items-center justify-center text-white font-serif italic text-2xl">
                                                Grand Hotel
                                            </div>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="text-center">
                                                <div className="text-gray-500 text-xs uppercase tracking-wide">Good Morning</div>
                                                <div className="text-xl font-bold text-gray-800">Mr. Anderson</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-100">
                                                    <Key size={20} className="mx-auto text-brand-primary mb-1" />
                                                    <div className="text-[10px] font-bold text-gray-600">My Key</div>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-100">
                                                    <Coffee size={20} className="mx-auto text-brand-secondary mb-1" />
                                                    <div className="text-[10px] font-bold text-gray-600">Room Service</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Staff Content */}
                        <TabsContent value="staff">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
                                    {/* Mock Dashboard UI */}
                                    <div className="w-full h-full bg-[#1e2342] rounded-xl border border-white/10 p-4 flex flex-col gap-4 shadow-2xl relative">
                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                            <div className="text-xs text-brand-text/60">HOUSEKEEPING MAP</div>
                                            <div className="text-xs text-brand-secondary">Floor 4</div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className={`aspect-square rounded flex items-center justify-center text-xs font-bold ${[2, 5, 9].includes(i) ? "bg-green-500/20 text-green-400 border border-green-500/50" :
                                                    [0, 6].includes(i) ? "bg-red-500/20 text-red-400 border border-red-500/50" :
                                                        "bg-white/5 text-white/30"
                                                    } `}>
                                                    {401 + i}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto text-[10px] text-brand-text/60">
                                            <div>🟢 Vacant (Clearing for cleaning)</div>
                                            <div>🔴 DND (Guest present)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2 space-y-6">
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-secondary/20 text-brand-secondary"><ConciergeBell size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">VIP Alerts</h4>
                                            <p className="text-sm text-brand-text/70">"Gold Member approaching Front Desk." Staff can greet them by name before they even show ID.</p>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-brand-primary/20 text-brand-primary"><BedDouble size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Smart Housekeeping</h4>
                                            <p className="text-sm text-brand-text/70">Network detects when guests leave the room, optimizing cleaning schedules and minimizing DND interruptions.</p>
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
