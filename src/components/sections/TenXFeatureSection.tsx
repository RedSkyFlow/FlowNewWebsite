"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Lock, BarChart, Server } from "lucide-react";
import Image from "next/image";

export function TenXFeatureSection() {
    return (
        <section className="w-full py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                {/* --- Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-brand-secondary">10x Faster</span> Deployment. <br />
                            <span className="text-white">Zero Infrastructure Headaches.</span>
                        </h2>
                        <p className="text-xl text-[#F5F0F6]/70 max-w-lg">
                            Our cloud-native OS deploys on your existing hardware in minutes. No proprietary controllers, no truck rolls, just instant intelligence.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Zap, title: "Instant Provisioning", desc: "Deploy configurations globally in seconds." },
                                { icon: Lock, title: "Enterprise Security", desc: "WPA3 & Passpoint integrated by default." },
                                { icon: BarChart, title: "Real-time Metrics", desc: "Live dashboarding with sub-second latency." },
                                { icon: Server, title: "Vendor Agnostic", desc: "Works with Cisco, Aruba, Ruckus, and more." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-[#F5F0F6]/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Feature Block (Glass Circuit Card) */}
                    <div className="relative">
                        <div className="w-full aspect-[4/3] rounded-3xl bg-[#1c203c]/60 backdrop-blur-xl border border-white/10 relative overflow-hidden group">

                            {/* Inner Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />

                            {/* --- Circuit Lines Animation --- */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,50 50,50 T100,50" stroke="#FFC145" strokeWidth="0.5" fill="none" className="animate-pulse" />
                                <path d="M0,30 Q25,30 30,50 T100,70" stroke="#FFC145" strokeWidth="0.5" fill="none" opacity="0.5" />
                                <path d="M0,70 Q25,70 70,50 T100,30" stroke="#FFC145" strokeWidth="0.5" fill="none" opacity="0.5" />
                            </svg>

                            {/* --- Card Content (Credit Card Mockup Style) --- */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full max-w-sm bg-brand-base/80 backdrop-blur-md border border-brand-secondary/30 rounded-2xl p-6 shadow-2xl relative"
                                >
                                    {/* Glow behind card */}
                                    <div className="absolute -inset-1 bg-brand-secondary/20 blur-xl -z-10 rounded-2xl" />

                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-secondary to-orange-500 opacity-80" />
                                        <div className="text-right">
                                            <div className="text-xs text-brand-secondary font-mono tracking-widest uppercase mb-1">Status</div>
                                            <div className="text-white font-bold flex items-center gap-2 justify-end">
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                Optimized
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "92%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-brand-secondary"
                                            />
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#F5F0F6]/60">Network Throughput</span>
                                            <span className="text-white font-mono">9.2 Gbps</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex justify-between text-xs text-[#F5F0F6]/40 font-mono">
                                        <span>ID: 8492-AC</span>
                                        <span>LAT: <span className="text-brand-primary">12ms</span></span>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
