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
    { 
      icon: Target, 
      title: 'Purpose-Driven Innovation', 
      description: 'Every solution we build is designed to solve real-world challenges and deliver tangible, transformative value.' 
    },
    { 
      icon: HeartHandshake, 
      title: 'Partnership & Trust', 
      description: 'We act as trusted custodians of our clients\' data and strategic partners in their growth, prioritizing transparency and integrity.' 
    },
    { 
      icon: Eye, 
      title: 'A Vision for the Future', 
      description: 'Our work on the AI Gateway is a testament to our commitment to pioneering the future of intelligent physical spaces.' 
    },
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
              Flow Networks was founded on a simple but powerful idea: that physical spaces should be as intelligent, responsive, and data-rich as the digital world. We build the digital nervous system that makes this possible.
            </p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Our Mission" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Our mission is to empower venue owners to take ownership of their customer relationships by transforming their physical spaces into powerful, self-sufficient data ecosystems.</span>
                  <br/>
                  <span>We bridge the gap between the physical and digital, providing the tools for our clients to build safer, more efficient, and more engaging experiences, all built on a foundation of trust and a fair value exchange.</span>
                </p>
              </div>
              <div>
                <Image src="/images/company/about-us-hero.jpg" alt="A diverse team of Flow Networks engineers and strategists collaborating." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A candid, authentic shot of a diverse team in a modern office." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Core Values" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ourValues.map((value) => (
                <GlassCard key={value.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><value.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{value.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection />
      </div>
    </div>
  );
};

export default AboutUsPage;
