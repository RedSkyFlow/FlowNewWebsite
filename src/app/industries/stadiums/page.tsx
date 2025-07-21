'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Drama, Wifi, Users, ShoppingCart, BarChart3 } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const stadiumFeatures = [
    { 
      icon: Wifi, 
      title: 'Extreme High-Density WiFi', 
      description: 'Our core specialty. We design and deploy carrier-grade networks engineered to provide reliable, high-speed connectivity to tens of thousands of fans simultaneously.' 
    },
    { 
      icon: ShoppingCart, 
      title: 'Enhanced Concessions & Commerce', 
      description: 'Enable mobile ordering, in-seat delivery, and cashless payments throughout your venue with our Allxs integration, reducing queues and increasing per-capita spend.' 
    },
    { 
      icon: Users, 
      title: 'Interactive Fan Engagement', 
      description: 'Leverage the network to power second-screen experiences, live polls, fan cams, and loyalty programs that keep your audience engaged throughout the event.' 
    },
];

const StadiumsPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Stadiums & Arenas</p>
            <AnimatedHeading text="Powering the Ultimate Fan Experience" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Connectivity as Part of the Action" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>The modern fan expects to be connected. They want to share every moment, view instant replays, and engage with the event in real-time. For stadium operators, a failed network is a failed fan experience.</span>
                  <br/>
                  <span>We specialize in the complex challenge of high-density connectivity. Our solutions are not just about providing internet access; they are about building a robust digital platform that can handle the immense demands of a live event while creating new opportunities for engagement and commerce.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/stadiums-hero.jpg" alt="A packed stadium with fans on their phones, with a glowing WiFi symbol overlay." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A dramatic, wide shot of a packed sports stadium during an evening game. The crowd is illuminated, and many fans are holding up their glowing smartphones. A large, stylized WiFi symbol is overlaid in the sky above the stadium, with lines of light connecting down to the crowd, symbolizing total connectivity." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for a World-Class Venue" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stadiumFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Unlock Game-Changing Fan Analytics" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Understand the pulse of your fanbase. Our Location Intelligence platform provides powerful insights into how fans move through your venue. Identify high-traffic concession areas, measure queue times in real-time, and understand dwell times in fan zones to optimize operations and maximize revenue on game day.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Fan Analytics</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Power Your Stadium?"
          description="Deliver the flawless, high-density connectivity your fans demand and unlock new opportunities for engagement and revenue. Contact our stadium specialists today."
          ctaText="Consult with a High-Density Expert"
          ctaLink="/contact?subject=StadiumSolution"
        />
      </div>
    </div>
  );
};

export default StadiumsPage;