// src/app/page.tsx
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import CoreOfferingsSection from '@/components/sections/CoreOfferingsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import GlassCard from '@/components/shared/GlassCard';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] md:h-[70vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-darkPrimary/90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 text-white">
        <div className="mx-auto max-w-xl text-center">
          <AnimatedHeading text="Flow Networks" className="text-6xl md:text-7xl lg:text-8xl font-bold" />
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            AI-Powered Network Solutions
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <EnhancedButton variant="secondary" size="lg" className="px-8 py-3 font-semibold text-foreground hover:bg-white/10">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </EnhancedButton>
          </div>
        </div>
        <div className="mt-12 hidden lg:block">
          <Image src="/Images/Flow-3D-Logo.png" alt="Flow Networks Logo" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

const Page: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <CoreOfferingsSection />
      <WhyChooseUsSection />
      <CaseStudiesTeaserSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
};

export default Page;