'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Wifi, Users, Store, BarChart3 } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const cityFeatures = [
    { 
      icon: Wifi, 
      title: 'Public WiFi & Digital Inclusion', 
      description: 'Provide equitable, secure, and filtered internet access to residents and visitors in public spaces like parks, libraries, and town squares, bridging the digital divide.' 
    },
    { 
      icon: Store, 
      title: 'Support for Local Businesses', 
      description: 'Empower local businesses by providing them with access to footfall data and co-operative marketing opportunities through the public WiFi network.' 
    },
    { 
      icon: BarChart3, 
      title: 'Data-Driven Public Services', 
      description: 'Leverage anonymized location analytics to understand citizen flow, optimize public transport routes, manage sanitation schedules, and improve urban planning.' 
    },
];

const TownsCitiesPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Towns & Cities</p>
            <AnimatedHeading text="Building the Connected Community of Tomorrow" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Digital Infrastructure for Smart Urban Living" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>A smart city is a connected city. It's an urban environment where data flows freely to improve the quality of life for all citizens, enhance the efficiency of public services, and foster economic growth.</span>
                  <br/>
                  <span>Our platform provides the foundational connectivity and intelligence layer for these initiatives. We help municipalities deploy and manage large-scale public WiFi networks that do more than just provide internet—they create a safer, more inclusive, and data-driven community.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/cities-hero.jpg" alt="A futuristic city square with people connected to public WiFi and digital information kiosks." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A beautiful, clean, and modern city park or plaza. People are relaxing and working on laptops. A sleek digital kiosk displays local event information. A subtle overlay of glowing lines connects the people, the kiosk, and the surrounding smart infrastructure (like smart streetlights), symbolizing a fully connected city." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for a Thriving Municipality" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cityFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><Users className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Fostering Good Governance & Transparency" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Inspired by the transformative potential of data in public systems, our platform can provide municipalities with the anonymized insights needed for transparent, evidence-based policy making. Understand how public spaces are used, justify investments in infrastructure, and build a stronger, more trusting relationship with your community.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Build a Smarter City?"
          description="From digital inclusion to data-driven urban planning, our platform provides the tools to transform your municipality. Contact our public sector specialists to learn more."
          ctaText="Consult with a Smart City Expert"
          ctaLink="/contact?subject=SmartCitySolution"
        />
      </div>
    </div>
  );
};

export default TownsCitiesPage;