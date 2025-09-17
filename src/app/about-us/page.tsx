// src/app/company/about-us/page.tsx (Corrected)
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Users, Target, HeartHandshake, Eye } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const AboutUsPage: NextPage = () => {
  const ourValues = [
    { icon: Target, title: 'Purpose-Driven Innovation', description: 'Every solution we build is designed to solve real-world challenges and deliver tangible, transformative value.' },
    { icon: HeartHandshake, title: 'Partnership & Trust', description: 'We act as trusted custodians of our clients\' data and strategic partners in their growth, prioritizing transparency and integrity.' },
    { icon: Eye, title: 'A Vision for the Future', description: 'Our work on the AI Gateway is a testament to our commitment to pioneering the future of intelligent physical spaces.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Who We Are</p>
            <AnimatedHeading text="We are the Architects of the Sentient Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              Flow Networks was founded on a simple but powerful idea: that physical spaces should be as intelligent, responsive, and data-rich as the digital world.
            </p>
          </div>
        </ScrollAnimatedSection>
        <CallToActionSection />
      </div>
    </div>
  );
};

export default AboutUsPage;