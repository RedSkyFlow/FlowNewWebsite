'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Wifi, ShieldCheck, Megaphone, School } from 'lucide-react';
import Image from 'next/image';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const EducationPage: NextPage = () => {
  // Corrected ID to match constants.ts if necessary
  const industry = INDUSTRIES_DATA.find(i => i.id === 'education' || i.id === 'schools-colleges');

  if (!industry) return null;

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Education</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Powering the Next Generation of Learning" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>From digital textbooks and online research to campus-wide communication, a reliable and secure network is the backbone of the modern educational experience.</span>
                  <br/>
                  <span>Flow Networks provides the robust infrastructure and intelligent platforms that schools, colleges, and universities need to create a safe, connected, and efficient learning environment for every student and faculty member.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/education-hero.jpg" alt="Students collaborating in a modern university library, using laptops and tablets connected to WiFi." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint={industry.imageHint} />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for a Smarter Campus" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.features.map((feature) => (
                <GlassCard key={feature.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><School className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Cashless Campus, Perfected" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Beyond connectivity, our Allxs integration creates a completely cashless campus. Manage canteen payments, uniform shop sales, event tickets, and fee collection through a single, secure platform, proven to reduce administrative overhead and improve safety.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/allxs/education-commerce">Explore Cashless Campus Solutions</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Future-Proof Your Campus?"
          description="Create a safer, more connected, and more efficient learning environment. Contact our education specialists to discuss a tailored solution for your institution."
          ctaText={industry.cta}
          ctaLink="/contact?subject=EducationSolution"
        />
      </div>
    </div>
  );
};

export default EducationPage;