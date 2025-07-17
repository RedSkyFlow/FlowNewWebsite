// src/app/page.tsx
'use client';

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
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Use system colors for the particle background */}
      <ParticleBackground className="absolute inset-0 -z-20" colors={['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))']} />
      
      {/* Background overlay using system color */}
      <div className="absolute inset-0 bg-background/80 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-semibold text-accent mb-4 text-gradient-animated">The Future of Venue Intelligence</p>
            <AnimatedHeading 
              text="Transforming Venues Into Intelligent Ecosystems" 
              as="h1" 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" 
              wordAnimation 
            />
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground">
              We provide the AI-powered nervous system for your physical space, turning connectivity into unparalleled insights, engagement, and operational excellence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Button styling is now handled entirely by variants and props, ensuring consistency */}
              <EnhancedButton asChild variant="secondary" size="lg" glow>
                <Link href="/solutions">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
              <EnhancedButton asChild variant="outline" size="lg">
                <Link href="/contact">
                  Request a Demo
                </Link>
              </EnhancedButton>
            </div>
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Bounce-out effect
          >
            <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/10 rounded-full blur-3xl animate-gradient-move -z-10"></div>
            {/* Corrected image path with a single .png extension */}
            <Image 
              src="/Images/Flow-3D-Logo.png" 
              alt="Flow Networks 3D Logo representing an intelligent network hub" 
              width={500} 
              height={500} 
              priority={true} // Prioritize loading this critical hero image
              className="drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Page: NextPage = () => {
  return (
    <main className="flex-1">
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