
'use client';

// src/app/page.tsx
import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import CoreOfferingsSection from '@/components/sections/CoreOfferingsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 relative z-10 h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      <div className="max-w-3xl text-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-semibold text-accent mb-4 text-gradient-animated">The Future of Venue Intelligence</p>
          <AnimatedHeading 
            text="Transforming Venues Into Intelligent Ecosystems" 
            as="h1" 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold !leading-tight tracking-tighter" 
            wordAnimation 
          />
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 font-body">
            We provide the AI-powered nervous system for your physical space, turning connectivity into unparalleled insights, engagement, and operational excellence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <AnimatedBorder variant="beam" color="primary" speed="normal">
              <EnhancedButton asChild variant="secondary" size="lg" glow>
                <Link href="/solutions">
                  <span className="flex items-center gap-2">Explore Solutions <ArrowRight className="ml-2 h-5 w-5" /></span>
                </Link>
              </EnhancedButton>
            </AnimatedBorder>
            <EnhancedButton asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
              <Link href="/contact">
                <span className="flex items-center gap-2">Request a Demo</span>
              </Link>
            </EnhancedButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Page: NextPage = () => {
  return (
    <>
      <div className="relative isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/industries/stadiums 3.png"
            alt="A modern, connected stadium representing a premier intelligent venue"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <HeroSection />
      </div>

      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <CoreOfferingsSection />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <WhyChooseUsSection />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <CaseStudiesTeaserSection />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <TestimonialsSection />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <CallToActionSection />
        </div>
      </main>
    </>
  );
};

export default Page;
