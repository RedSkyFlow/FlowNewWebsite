"use client";

import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TenXFeatureSection } from "@/components/sections/TenXFeatureSection";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreviewSection";
import { BenefitsGridSection } from "@/components/sections/BenefitsGridSection";
import { ParticleBackground } from "@/components/shared/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1c203c] overflow-x-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">

      {/* --- 0. BACKGROUND LAYERS --- */}
      {/* Deep Space Base is set in globals.css, this adds the "Neural" texture */}
      <ParticleBackground
        className="fixed inset-0 z-0 opacity-40"
        particleCount={40}
        speed={0.2}
        lineDistance={150}
      />

      {/* --- 1. NAVIGATION --- */}
      <FloatingNavbar />

      {/* --- 2. HERO SECTION --- */}
      <HeroSection />

      {/* --- 3. TRUSTED BY --- */}
      <TrustedBySection />

      {/* --- 4. FEATURE BLOCK (10x Faster) --- */}
      <TenXFeatureSection />

      {/* --- 5. DASHBOARD PREVIEW --- */}
      <DashboardPreviewSection />
      <BenefitsGridSection />

      {/* --- Placeholder for Next Phase Components (Grid, Pricing, Footer) --- */}
      <div className="container mx-auto py-20 text-center opacity-30">
        <p className="text-xl border-dashed border-2 border-white/10 p-10 rounded-xl">
          Next Phase: Feature Highlights & Dashboard Preview
        </p>
      </div>

    </main>
  );
}
