"use client";

import React from "react";
import { ArrowRight, Zap, TrendingUp, ShieldCheck, PieChart, Activity, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden min-h-[110vh] flex flex-col justify-center pt-32 pb-20">

            {/* --- Ambient Background Glows --- */}
            {/* Center Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0496FF]/20 rounded-full blur-[120px] pointer-events-none" />
            {/* Right Turquoise Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14D8CC]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                {/* --- Tag --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-sm font-medium mb-8 backdrop-blur-sm"
                >
                    <Zap className="w-4 h-4 fill-brand-primary" />
                    <span>Next-Gen Network Intelligence</span>
                </motion.div>

                {/* --- H1 Headline --- */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
                >
                    Transform Your WiFi into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent2">Revenue Engine</span>
                </motion.h1>

                {/* --- Subhead --- */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#F5F0F6]/70 max-w-2xl mb-10"
                >
                    Stop treating guest WiFi as a cost. Start using it to verify presence, capture first-party data, and drive real-time engagement.
                </motion.p>

                {/* --- CTA Buttons --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <button className="px-8 py-4 rounded-full bg-brand-primary text-[#1c203c] font-bold text-lg hover:shadow-[0_0_30px_rgba(20,216,204,0.4)] transition-all flex items-center gap-2 group">
                        Start Your Trial
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-[#F5F0F6]/20 text-[#F5F0F6] font-medium text-lg hover:bg-white/5 transition-all backdrop-blur-sm">
                        View Demo
                    </button>
                </motion.div>

                {/* --- Visual Centerpiece (Glass Cards) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-5xl h-[500px] perspective-1000"
                >
                    {/* Main Glass Dashboard Card (Tilted) */}
                    <div className="absolute inset-0 bg-[#1c203c]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center overflow-hidden group hover:border-brand-primary/30 transition-colors duration-500">

                        {/* Internal Glow */}
                        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                        {/* Mock Data Vis */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full">
                            {/* Card 1: Stats & Traffic */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center justify-between text-[#F5F0F6]/60 text-sm mb-4">
                                    <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brand-secondary" /> Traffic</span>
                                    <span className="text-brand-primary text-xs bg-brand-primary/10 px-2 py-0.5 rounded-full">+127%</span>
                                </div>

                                {/* Complex Bar Chart Visualization */}
                                <div className="flex-1 flex items-end gap-1.5 h-full w-full pb-2">
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                        <div key={i} className="w-full bg-gradient-to-t from-brand-primary/10 to-brand-primary/60 rounded-t-sm hover:from-brand-primary/30 hover:to-brand-primary transition-all duration-300 relative group/bar" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity bg-black/50 px-1 rounded">{h}%</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs text-white/30 flex justify-between mt-2">
                                    <span>08:00</span>
                                    <span>12:00</span>
                                    <span>16:00</span>
                                    <span>20:00</span>
                                </div>
                            </div>

                            {/* Card 2: Pie Chart & Categories */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-sm mb-2">
                                    <PieChart className="w-4 h-4 text-brand-secondary" /> Demographics
                                </div>
                                <div className="flex-1 flex items-center justify-center relative">
                                    {/* CSS Pie Chart */}
                                    <div className="w-32 h-32 rounded-full border-8 border-brand-base relative flex items-center justify-center"
                                        style={{ background: 'conic-gradient(var(--brand-primary) 0deg 220deg, var(--brand-secondary) 220deg 300deg, var(--brand-accent2) 300deg 360deg)' }}
                                    >
                                        <div className="w-20 h-20 bg-[#1e2342] rounded-full flex flex-col items-center justify-center z-10">
                                            <span className="text-2xl font-bold text-white">8.4k</span>
                                            <span className="text-[10px] text-white/50">Visits</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary" /> Returning</div>
                                        <span className="text-white font-mono">62%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-secondary" /> New</div>
                                        <span className="text-white font-mono">28%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-accent2" /> Staff</div>
                                        <span className="text-white font-mono">10%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Real-time Users */}
                            <div className="bg-white/5 rounded-xl p-5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-sm">
                                    <Users className="w-4 h-4 text-brand-secondary" /> Live Audience
                                </div>

                                <div className="flex-1 flex flex-col justify-center py-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white tracking-tight">842</span>
                                        <span className="text-brand-accent2 animate-pulse text-sm font-medium">● Online</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
                                        <div className="h-full bg-brand-accent2 w-3/4 animate-pulse rounded-full" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    <div className="bg-white/5 p-2 rounded text-center">
                                        <div className="text-[10px] text-white/40 uppercase tracking-wider">Zone A</div>
                                        <div className="text-lg font-bold text-white">312</div>
                                    </div>
                                    <div className="bg-white/5 p-2 rounded text-center">
                                        <div className="text-[10px] text-white/40 uppercase tracking-wider">Zone B</div>
                                        <div className="text-lg font-bold text-white">530</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
