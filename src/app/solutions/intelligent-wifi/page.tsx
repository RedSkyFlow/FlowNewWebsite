// src/app/solutions/intelligent-wifi/page.tsx (Corrected)
'use client';

import type { NextPage } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

// NOTE: This is a temporary placeholder component to fix the build.
// This page should be moved to /products/intelligent-wifi/page.tsx
// and populated with real content as per our IA v5.2 plan.

const IntelligentWifiSolutionPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Placeholder Page</p>
            <AnimatedHeading text="Intelligent WiFi Solution" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              This page is a placeholder to resolve a build error. The content for the main Intelligent WiFi pillar page will be developed at its correct location: `/products/intelligent-wifi`.
            </p>
          </div>
        </ScrollAnimatedSection>
        <CallToActionSection />
      </div>
    </div>
  );
};

export default IntelligentWifiSolutionPage;
