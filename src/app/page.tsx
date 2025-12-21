"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TenXFeatureSection } from "@/components/sections/TenXFeatureSection";
import { DashboardPreviewSection } from "@/components/sections/DashboardPreviewSection";
import { BenefitsGridSection } from "@/components/sections/BenefitsGridSection";
import { PricingSection } from "@/components/sections/PricingSection";
import AppFooter from "@/components/layout/AppFooter";
import { ValueHeroSection } from "@/components/sections/ValueHeroSection";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import SectorExplorer from "@/components/sections/SectorExplorer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">

      {/* --- 0. BACKGROUND LAYERS --- */}
      {/* Deep Space Base is set in globals.css, this adds the "Neural" texture */}
      <ParticleBackground
        className="fixed inset-0 z-0"
        particleCount={40}
        speed={0.2}
        lineDistance={150}
      />

      {/* --- 1. NAVIGATION --- */}
      {/* FloatingNavbar is now in RootLayout */}

      {/* --- 2. HERO SECTION --- */}
      <HeroSection />

      {/* --- NEW: ORBIT ECOSYSTEM --- */}
      <EcosystemSection />

      {/* --- NEW: SECTOR EXPLORER (Interactive City) --- */}
      <SectorExplorer />

      {/* --- 3. TRUSTED BY --- */}
      <TrustedBySection />

      {/* --- 4. VALUE HERO (ROI & Data) --- */}
      <ValueHeroSection />

      {/* --- 5. DASHBOARD PREVIEW --- */}
      <DashboardPreviewSection />

      <BenefitsGridSection />

      <PricingSection />

      {/* --- 8. FEATURE BLOCK (Deployment - Objection Handler) --- */}
      <TenXFeatureSection />

      {/* --- 9. FOOTER (Includes CTA Banner) --- */}
      <AppFooter />

    </main>
  );
}
