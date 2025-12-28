'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, Shield, Zap, Globe, Lock, ArrowRight, CheckCircle } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { ParticleThemeTrigger } from '@/components/shared/ParticleThemeTrigger';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';

const VerityPage: NextPage = () => {
  return (
    <div className="bg-brand-base text-[#F5F0F6] relative isolate overflow-hidden min-h-screen">
      <ParticleThemeTrigger colors={["#FFC145", "#14D8CC", "#0496FF"]} className="absolute inset-0 pointer-events-none" />
      <ParticleBackground className="absolute inset-0 -z-10 opacity-40" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm"
        >
          <Shield size={14} />
          <span>Secure Oracle Layer</span>
        </motion.div>

        <AnimatedHeading
          text="Verity: The Oracle of Presence"
          as="h1"
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          wordAnimation
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-text/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transform your venue's WiFi into a cryptographically verifiable signal.
          <br className="hidden md:block" />
          <strong>Connect. Verify. Settle.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <EnhancedButton asChild variant="primary" glow className="px-8 py-6 text-lg">
            <Link href="https://aura-flow-connect.web.app" target="_blank">
              Launch Verity Node
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </EnhancedButton>
          <EnhancedButton asChild variant="outline" className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/5">
            <Link href="/developers">
              Read the Smart Contract
            </Link>
          </EnhancedButton>
        </motion.div>
      </section>

      {/* --- CORE MECHANICS --- */}
      <ScrollAnimatedSection className="py-24 bg-black/20 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <GlassCard className="p-8 hover:border-brand-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wifi className="text-brand-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proof of Witness</h3>
              <p className="text-brand-text/70 leading-relaxed">
                "I was there." The WiFi signal acts as a secure, biological verification of presence. No spoofing. No remote logins. Absolute truth.
              </p>
            </GlassCard>

            {/* Feature 2 */}
            <GlassCard className="p-8 hover:border-brand-secondary/50 transition-colors group">
              <div className="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-brand-secondary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Settlement</h3>
              <p className="text-brand-text/70 leading-relaxed">
                "I got paid." Connect verified presence events directly to Smart Contracts. Trigger payments, rewards, or access instantly.
              </p>
            </GlassCard>

            {/* Feature 3 */}
            <GlassCard className="p-8 hover:border-brand-accent2/50 transition-colors group">
              <div className="w-14 h-14 bg-brand-accent2/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="text-brand-accent2 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sovereign Data</h3>
              <p className="text-brand-text/70 leading-relaxed">
                "It's my data." Built on a foundation of total privacy. POPIA/GDPR compliant. The user owns their identity, always.
              </p>
            </GlassCard>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- HOW IT WORKS / ARCHITECTURE --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Architecture of Truth</h2>
            <p className="text-xl text-brand-text/60">From physical signal to blockchain settlement in milliseconds.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:block w-1/2 text-right">
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">Signal Detected</h3>
                  <p className="text-brand-text/70">Guest device handshakes with venue AP.</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#0c0e1a] border-2 border-brand-primary flex items-center justify-center shrink-0">
                  <span className="font-mono font-bold text-brand-primary">01</span>
                </div>
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <h3 className="md:hidden text-xl font-bold text-brand-primary mb-2">Signal Detected</h3>
                  <p className="md:hidden text-brand-text/70 mb-4">Guest device handshakes with venue AP.</p>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-brand-primary/80">
                    MAC: 8A:2F:... Verified<br />
                    RSSI: -45dBm (On-Site)
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:block w-1/2 text-right">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-brand-secondary/80 inline-block text-left">
                    Oracle.verify(User, Venue)<br />
                    &gt; Proof Generated
                  </div>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#0c0e1a] border-2 border-brand-secondary flex items-center justify-center shrink-0">
                  <span className="font-mono font-bold text-brand-secondary">02</span>
                </div>
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-2">Oracle Witness</h3>
                  <p className="text-brand-text/70">Verity confirms physical presence and signs the proof.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:block w-1/2 text-right">
                  <h3 className="text-2xl font-bold text-brand-accent2 mb-2">Contract Settlement</h3>
                  <p className="text-brand-text/70">Blockchain executes terms. Value transfers immediately.</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#0c0e1a] border-2 border-brand-accent2 flex items-center justify-center shrink-0">
                  <span className="font-mono font-bold text-brand-accent2">03</span>
                </div>
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <h3 className="md:hidden text-xl font-bold text-brand-accent2 mb-2">Contract Settlement</h3>
                  <p className="md:hidden text-brand-text/70 mb-4">Blockchain executes terms. Value transfers immediately.</p>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-brand-accent2/80">
                    TX: 0x93...2A<br />
                    Status: SETTLED<br />
                    Value: RELEASED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-secondary/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to secure the future?</h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto mb-10">
            Join the open ecosystem. Deploy Verity today and start building on the Truth.
          </p>
          <EnhancedButton asChild variant="primary" glow className="px-10 py-6 text-xl">
            <Link href="/contact">
              Get Your Verity Node
            </Link>
          </EnhancedButton>
        </div>
      </section>
    </div>
  );
};

export default VerityPage;