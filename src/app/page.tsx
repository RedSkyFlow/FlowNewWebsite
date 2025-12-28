"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TenXFeatureSection } from "@/components/sections/TenXFeatureSection";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreviewSection";
import { BenefitsGridSection } from "@/components/sections/BenefitsGridSection";
import { PricingSection } from "@/components/sections/PricingSection";

import { ValueHeroSection } from "@/components/sections/ValueHeroSection";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import SectorExplorer from "@/components/sections/SectorExplorer";
import { StarBorder } from "@/components/shared/StarBorder";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">

      {/* --- 0. BACKGROUND LAYERS --- */}
      <ParticleBackground
        className="fixed inset-0 z-0"
        particleCount={40}
        speed={0.2}
        lineDistance={150}
      />

      {/* --- 1. HERO SECTION --- */}
      <HeroSection />

      {/* --- 2. THE ECOSYSTEM (The Core Narrative) --- */}
      <section className="relative z-10 py-24 bg-brand-base/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Venue <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-primary">OS Ecosystem</span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-3xl mx-auto">
            Flow Networks isn't just a platform; it's the intelligent fabric that connects
            your physical space to digital intelligence.
          </p>
        </div>
        <EcosystemSection />
      </section>

      {/* --- 3. THE ROLE SEGMENTS --- */}
      <section className="relative z-10 py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-bold mb-6">
              THE NERVOUS SYSTEM
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Absolute Visibility into Human Presence.</h3>
            <p className="text-lg text-brand-text/70 mb-8 leading-relaxed">
              Understand the pulse of your venue. Our analytics don't just count devices;
              they verify presence and reveal the journey of every guest. From dwell times
              to conversion rates, see your space in high definition.
            </p>
            <div className="flex gap-4">
              <a href="/analytics" className="btn-secondary group flex items-center gap-2">
                Explore Analytics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full group-hover:bg-brand-primary/30 transition-all duration-700" />
            <div className="relative glass-card aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              <div className="text-brand-primary/50 font-mono text-sm uppercase tracking-widest animate-pulse">
                Dashboard Stream Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRUSTED BY --- */}
      <TrustedBySection />

      {/* --- 5. INDUSTRY VERTICALS (Link to page) --- */}
      <section className="relative z-10 py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Architecting Every Space.</h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto mb-12">
            From stadiums to shopping malls, we give physical spaces digital superpowers.
          </p>
          <div className="flex justify-center">
            <a href="/industries" className="btn-primary py-4 px-10 text-lg group flex items-center gap-2">
              View Industries
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- 6. PRICING (The Entry Point) --- */}
      <PricingSection />

      {/* --- 7. DEPLOYMENT (The Confidence Section) --- */}
      <TenXFeatureSection />

      {/* --- 8. FOOTER --- */}


    </main>
  );
}

// Helper for the industries link button style if not already in global or component
import { ArrowRight } from "lucide-react";
