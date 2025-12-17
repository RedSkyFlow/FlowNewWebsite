"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Database, DollarSign, ArrowUpRight, Lock } from "lucide-react";

export function ValueHeroSection() {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Copy & Metrics */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC145]/10 border border-[#FFC145]/20 text-[#FFC145] text-xs font-bold uppercase tracking-wider mb-6">
                                <DollarSign className="w-3 h-3" />
                                <span>ROI Focused</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                                Turn Connectivity into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC145] to-brand-secondary">Currency</span>.
                            </h2>
                            <p className="text-xl text-[#F5F0F6]/70 max-w-lg leading-relaxed">
                                Stop renting your audience. Flow Networks transforms anonymous guest WiFi into a powerful <b>First-Party Data</b> engine that drives automated revenue 24/7.
                            </p>
                        </div>

                        {/* ROI Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="glass-card p-5 rounded-2xl border-l-4 border-brand-primary">
                                <div className="text-[#F5F0F6]/50 text-xs uppercase tracking-wider font-bold mb-2">Marketing Opt-In</div>
                                <div className="text-3xl font-bold text-white mb-1">~85%</div>
                                <div className="text-xs text-brand-primary flex items-center gap-1">
                                    <ArrowUpRight className="w-3 h-3" /> Industry Leading
                                </div>
                            </div>
                            <div className="glass-card p-5 rounded-2xl border-l-4 border-[#FFC145]">
                                <div className="text-[#F5F0F6]/50 text-xs uppercase tracking-wider font-bold mb-2">Data Ownership</div>
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-xs text-[#FFC145] flex items-center gap-1">
                                    <Lock className="w-3 h-3" /> Encrypted & Yours
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="btn-primary group">
                                Calculate Your ROI
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Revenue Graph Visualization */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-xl rounded-2xl opacity-50" />

                        <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-white/10 group">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <div className="text-xs text-[#F5F0F6]/40 uppercase tracking-widest font-bold mb-1">Revenue Impact</div>
                                    <div className="text-2xl font-bold text-white">$142,500 <span className="text-sm font-normal text-[#F5F0F6]/50">/ Year</span></div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Graph Area */}
                            <div className="w-full h-64 relative flex items-end gap-2 z-10">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-full h-px bg-white/5 border-t border-dashed border-white/5" />
                                    ))}
                                </div>

                                {/* Bars */}
                                {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="flex-1 bg-gradient-to-t from-brand-secondary/20 to-brand-secondary rounded-t-sm relative group/bar min-w-[10px]"
                                    >
                                        <div className="absolute top-0 inset-x-0 h-0.5 bg-[#FFC145] opacity-50 group-hover/bar:opacity-100 shadow-[0_0_10px_#FFC145]" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute top-1/2 left-8 bg-[#1c203c]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20 hidden md:block group-hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                        <Database className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-[#F5F0F6]/50 uppercase tracking-wider">New Profiles</div>
                                        <div className="text-lg font-bold text-white">+1,240</div>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-brand-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
