'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, UserCheck, Zap, Layers } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import ChatSimulation from '@/components/marketing/ChatSimulation';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const demoChat = [
    { sender: 'bot' as const, text: 'Welcome to The Grand Hotel, Sarah! 🏨' },
    { sender: 'bot' as const, text: 'I have connected you to the high-speed WiFi.' },
    { sender: 'bot' as const, text: 'Are you joining us for business or leisure today?' },
    { sender: 'user' as const, text: 'Business. Is the lounge open?' },
    { sender: 'bot' as const, text: 'Yes! The Exective Lounge is open until 10 PM. I have added a complimentary coffee voucher to your profile. ☕' }
];

export default function AIGatewayClientPage() {
    return (
        <div className="min-h-screen bg-brand-base overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative w-full pt-32 pb-20 px-4 container mx-auto flex flex-col items-center text-center">
                {/* Background Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-accent2/10 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2 text-xs font-semibold uppercase tracking-wider mb-6"
                >
                    <Zap className="w-3 h-3" />
                    Flow Connect
                </motion.div>

                <AnimatedHeading
                    text="Your Venue's AI Concierge"
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
                />

                <p className="text-brand-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Transform passive WiFi connections into active, personalized conversations. The <b>Un-Captive Portal</b> is here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-20 z-10 relative">
                    <EnhancedButton className="rounded-full bg-brand-primary text-brand-base font-bold hover:shadow-[0_0_20px_rgba(20,216,204,0.4)]">
                        See It In Action
                    </EnhancedButton>
                    <EnhancedButton variant="outline" className="rounded-full border-brand-text/20 text-brand-text hover:bg-white/5">
                        Read The Docs
                    </EnhancedButton>
                </div>

                {/* --- Split Screen Demo --- */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: The "Old Way" / Problem Statement */}
                    <ScrollAnimatedSection className="text-left space-y-6">
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-text/10" />
                            <h3 className="text-2xl font-bold text-white mb-2">The Digital Handshake</h3>
                            <p className="text-brand-text/70 mb-4">
                                Traditional captive portals are a barrier. Flow Connect is a bridge.
                            </p>
                            <p className="text-brand-text/60 text-sm">
                                By verifying <b>Physical Presence</b> via the WiFi connection, we instantly unlock a secure, authenticated session with a context-aware AI agent. No apps to download. No QR codes to scan. Just connect and chat.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <GlassCard className="p-4 flex flex-col gap-2">
                                <UserCheck className="w-8 h-8 text-brand-primary" />
                                <div className="font-bold text-white">Identity Verified</div>
                                <div className="text-xs text-brand-text/60">Social & PMS Integration</div>
                            </GlassCard>
                            <GlassCard className="p-4 flex flex-col gap-2">
                                <MessageSquare className="w-8 h-8 text-brand-accent2" />
                                <div className="font-bold text-white">Conversational</div>
                                <div className="text-xs text-brand-text/60">Natural Language Interface</div>
                            </GlassCard>
                        </div>
                    </ScrollAnimatedSection>

                    {/* Right: The Chat Sim */}
                    <ScrollAnimatedSection delay={0.2} className="relative h-[600px] w-full bg-[#0c0e1a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                        <div className="bg-[#1c203c] p-4 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent2 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white fill-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Flow Connect</div>
                                    <div className="text-[10px] text-brand-primary flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" /> Online • The Grand Hotel
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90 p-4">
                            <ChatSimulation messages={demoChat} />
                        </div>
                        {/* Fake Input Area */}
                        <div className="p-3 bg-[#1c203c] border-t border-white/10">
                            <div className="h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4 text-xs text-white/30">
                                Type a message...
                            </div>
                        </div>
                    </ScrollAnimatedSection>

                </div>
            </section>

            {/* --- Features Grid --- */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Why upgrade to Flow Connect?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Progressive Profiling",
                            desc: "Don't ask for everything at once. Flow Connect learns about your guest through natural conversation over multiple visits.",
                            icon: Layers
                        },
                        {
                            title: "Hyper-Personalization",
                            desc: "Business travelers get workspace offers. Families get kid's club info. The AI adapts the experience in real-time.",
                            icon: Zap
                        },
                        {
                            title: "Zero-Friction Access",
                            desc: "Eliminate the frustration of complex forms. A friendly 'Hello' is all it takes to get connected and verified.",
                            icon: MessageSquare
                        }
                    ].map((feature, idx) => (
                        <ScrollAnimatedSection key={idx} delay={idx * 0.1}>
                            <GlassCard className="h-full p-6 hover:border-brand-primary/30 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-brand-primary">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-brand-text/60 text-sm">{feature.desc}</p>
                            </GlassCard>
                        </ScrollAnimatedSection>
                    ))}
                </div>
            </section>

        </div>
    );
}
