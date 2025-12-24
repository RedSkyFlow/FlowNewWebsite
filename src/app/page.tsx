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
import { StarBorder } from "@/components/shared/StarBorder";

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

      {/* TEST: StarBorder Button */}
      <div className="relative z-10 flex justify-center items-center py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">StarBorder Test</h2>
          <StarBorder
            variant="primary"
            activationMode="immediate"
            speed="3s"
            className="inline-block"
          >
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-brand-base font-bold py-4 px-8 rounded-[20px] text-lg">
              Test Button - Stars Should Be Visible
            </button>
          </StarBorder>
          <div className="mt-4">
            <StarBorder
              variant="accent"
              activationMode="immediate"
              speed="4s"
              className="inline-block"
            >
              <button className="bg-[#FFC145] hover:bg-[#FFC145]/90 text-brand-base font-bold py-4 px-8 rounded-[20px] text-lg">
                Gold Variant Test
              </button>
            </StarBorder>
          </div>
        </div>
      </div>

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
