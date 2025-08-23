// src/app/page.tsx
'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { EnhancedButton } from '@/components/ui/enhanced-button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CoreOfferingsSection from '@/components/sections/CoreOfferingsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const HomePage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <main className="relative z-10">
        {/* Hero Section */}
        <ScrollAnimatedSection as="section" className="relative min-h-[80vh] flex items-center justify-center text-center py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Abstract network visualization"
              fill
              priority
              className="object-cover opacity-20"
              data-ai-hint="abstract network"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>

          <div className="container mx-auto">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">
              The Future of Physical Spaces is Intelligent.
            </p>
            <AnimatedHeading
              text="Transforming Venues into Sentient Ecosystems"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter"
              wordAnimation
            />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              Flow Networks leverages your venue's WiFi to create a secure, authenticated gateway, unlocking a new realm of hyper-local AI services and data-driven experiences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <EnhancedButton asChild variant="primary" size="lg" glow>
                <Link href="/contact?subject=FreeTrial">Get Started For Free</Link>
              </EnhancedButton>
              <EnhancedButton asChild variant="outline" size="lg">
                <Link href="/ai-gateway">
                  Explore the AI Gateway <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Core Offerings Section */}
        <ScrollAnimatedSection>
            <CoreOfferingsSection />
        </ScrollAnimatedSection>

        {/* Why Choose Us Section */}
        <ScrollAnimatedSection>
            <WhyChooseUsSection />
        </ScrollAnimatedSection>

        {/* Testimonials Section */}
        <ScrollAnimatedSection>
            <TestimonialsSection />
        </ScrollAnimatedSection>
        
        {/* Case Studies Teaser Section */}
        <ScrollAnimatedSection>
            <CaseStudiesTeaserSection />
        </ScrollAnimatedSection>

        {/* Call To Action Section */}
        <ScrollAnimatedSection>
            <CallToActionSection />
        </ScrollAnimatedSection>

      </main>
    </div>
  );
};

export default HomePage;
