"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Globe, ArrowRight, Share2, Shield, Zap } from "lucide-react";
import { ParticleThemeTrigger } from "@/components/shared/ParticleThemeTrigger";

export default function DevelopersPage() {
    return (
        <main className="relative min-h-screen bg-brand-base text-[#F5F0F6] overflow-x-hidden selection:bg-brand-secondary/30">
            <ParticleThemeTrigger colors={["#FFC145", "#14D8CC", "#0496FF"]} className="absolute inset-0 pointer-events-none" />

            {/* --- BACKGROUND ACCENTS --- */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent2/5 rounded-full blur-[100px] pointer-events-none" />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-sm font-mono mb-8 backdrop-blur-sm"
                    >
                        <Terminal size={14} />
                        <span>FLOW_NETWORKS_DEV_PORTAL_V1.0</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        Build on <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Verifiable Truth</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-text/70 max-w-2xl mx-auto mb-10"
                    >
                        Flow Networks is an Open Platform. With <b>Verity</b>, integrate "Proof of Presence" directly into your PMS, CRM, or Identity stack.
                        We don't lock data in; we verify it and hand it to you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <button className="px-8 py-4 rounded-full bg-brand-secondary text-brand-base font-bold text-lg hover:shadow-[0_0_30px_rgba(255,193,69,0.4)] transition-all flex items-center gap-2 group">
                            Read API Docs
                            <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-all">
                            Get API Keys
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- INTEGRATION GRID --- */}
            <section className="py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#0c0e1a]/50 p-8 rounded-2xl border border-white/10 hover:border-brand-primary/50 transition-colors group">
                            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="text-brand-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Universal Webhooks</h3>
                            <p className="text-brand-text/60 mb-6">
                                Real-time events for presence. Trigger workflows in SalesForce, HubSpot, or your custom backend when a guest connects.
                            </p>
                            <div className="font-mono text-xs bg-black/50 p-3 rounded text-brand-primary/80">
                                POST /webhooks/presence/verify
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0c0e1a]/50 p-8 rounded-2xl border border-white/10 hover:border-brand-secondary/50 transition-colors group">
                            <div className="w-12 h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Share2 className="text-brand-secondary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Instant Settlement</h3>
                            <p className="text-brand-text/60 mb-6">
                                "Proof of Witness" contracts. Trigger instant payments or rewards when a guest's presence verifies a service delivery.
                            </p>
                            <div className="font-mono text-xs bg-black/50 p-3 rounded text-brand-secondary/80">
                                POST /api/v1/contracts/settle
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0c0e1a]/50 p-8 rounded-2xl border border-white/10 hover:border-brand-accent2/50 transition-colors group">
                            <div className="w-12 h-12 bg-brand-accent2/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="text-brand-accent2" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Identity Sovereignty</h3>
                            <p className="text-brand-text/60 mb-6">
                                OIDC Provider support. Let users "Login with Flow" across your ecosystem, carrying their verified presence reputation.
                            </p>
                            <div className="font-mono text-xs bg-black/50 p-3 rounded text-brand-accent2/80">
                                OIDC /.well-known/openid-configuration
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OPEN SOURCE SIGNAL --- */}
            <section className="py-24 container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                    <Cpu className="text-brand-text/50" />
                    Autonomous Ecosystem
                </h2>
                <div className="max-w-3xl mx-auto bg-black/30 rounded-2xl overflow-hidden border border-white/10 text-left font-mono text-sm leading-relaxed relative">
                    <div className="flex items-center gap-2 p-3 bg-white/5 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-white/30">flow-cli — npm install @flow/sdk</span>
                    </div>
                    <div className="p-6 text-brand-text/80">
                        <p className="mb-2"><span className="text-brand-secondary">import</span> {"{ FlowOracle }"} <span className="text-brand-secondary">from</span> '@flow/sdk';</p>
                        <p className="mb-4"><span className="text-brand-primary">const</span> oracle = <span className="text-brand-secondary">new</span> FlowOracle(process.env.FLOW_KEY);</p>
                        <p className="mb-2 text-white/50">// 1. Guest witnesses service (e.g., enters repaired zone)</p>
                        <p className="mb-2">
                            <span className="text-brand-primary">await</span> oracle.verifyWitness(<span className="text-green-400">"guest_123"</span>, <span className="text-green-400">"zone_repair"</span>);
                        </p>
                        <p className="mb-2 mt-4 text-white/50">// 2. Trigger Smart Contract Settlement</p>
                        <p className="mb-2">
                            <span className="text-brand-primary">await</span> oracle.executeSettlement({"{"}
                        </p>
                        <p className="pl-4 mb-2">contract: <span className="text-green-400">"0x71C...39A"</span>,</p>
                        <p className="pl-4 mb-2">action: <span className="text-green-400">"PAY_VENDOR"</span>,</p>
                        <p className="pl-4 mb-2">proof: <span className="text-green-400">"MERKLE_PROOF_Verified"</span></p>
                        <p className="">{"}"});</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="px-2 py-1 bg-brand-secondary text-brand-base text-[10px] font-bold rounded uppercase">
                            Coming Soon
                        </div>
                    </div>
                </div>
            </section>

        </main >
    );
}
