'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Tv2, Globe, DollarSign, Handshake, Rocket } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent, Card } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import ShimmeringHaze from '@/components/shared/ShimmeringHaze';

const CnnTapPage: NextPage = () => {
  const benefits = [
    {
      icon: Tv2,
      title: 'Premium Content Delivery',
      description: "Provide guests with access to CNN's trusted, world-class news, documentaries, and entertainment, enhancing their in-room and in-venue experience."
    },
    {
      icon: Globe,
      title: 'Global Brand Exposure',
      description: "Associate your venue with the globally recognized CNN brand, boosting your property's prestige and attracting international travelers."
    },
    {
      icon: DollarSign,
      title: 'New Ancillary Revenue',
      description: "Unlock new revenue streams through strategic brand partnerships and targeted advertising opportunities, orchestrated by CNN's global sales team."
    },
    {
      icon: Handshake,
      title: 'Seamless Integration',
      description: "As a device-agnostic solution, CNNTAP integrates effortlessly with your existing WiFi infrastructure, managed and optimized by Flow Networks."
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-2/5 h-3/5 bg-gradient-to-bl from-impact/10 via-transparent to-transparent rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full -translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading
            text="CNNTAP: Premium Content & Monetization for Your Venue"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            Leverage the power of a global media leader. Flow Networks integrates the CNN Travel Advertising Platform (CNNTAP) to deliver premium content and unlock new revenue streams through your venue's WiFi.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Benefits Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="Engage, Inform, and Monetize"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              Our partnership with CNN's Hospitality Partner Program provides a multi-faceted solution to elevate your guest experience and business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return(
                <GlassCard key={i} className="text-center" glowColor="impact">
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-impact/10 mb-4">
                      <Icon className="w-8 h-8 text-impact" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </GlassCard>
            )})}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- How It Works Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading text="Presence-Verified Content Delivery" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-muted-foreground mb-4">The CNNTAP experience is triggered the moment a guest logs into your venue's WiFi. This isn't just a static TV channel; it's a dynamic digital touchpoint delivered directly to your guests' personal devices.</p>
              <p className="text-muted-foreground">Flow Networks manages this integration, ensuring that access to this premium, curated content is a seamless part of your branded WiFi onboarding journey, creating an exclusive experience for your physically present users.</p>
              <div className="mt-8">
                <EnhancedButton asChild variant="tertiary" size="lg">
                  <Link href="/solutions/wifi-monetisation">
                    Explore Monetisation Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </EnhancedButton>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedBorder>
                <Image 
                  src="https://placehold.co/800x600.png" 
                  alt="A smartphone screen showing CNN content in a luxury hotel room" 
                  width={800} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="A person in a modern airport lounge watching curated CNN news on their tablet, with a coffee cup nearby."
                />
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- The AI Gateway Vision Section --- */}
      <ScrollAnimatedSection as="section" className="relative py-16 md:py-24">
        
        {/* The ShimmeringHaze background effect */}
        <ShimmeringHaze color="accent" />

        <div className="container mx-auto px-4 md:px-6 relative group">
          {/* The Card component now directly uses the perspex-card class */}
          <Card className="perspex-card border-none p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-4"><Rocket className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading
                text="The Future: AI-Curated Content"
                as="h2"
                className="text-3xl sm:text-4xl font-bold mb-4"
              />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                While CNNTAP provides world-class content, the Flow AI Gateway unlocks the next level of personalization. Imagine an AI agent that analyzes a guest's profile and real-time context to dynamically select and present the most relevant CNN content, from business news for a conference attendee to travel documentaries for a leisure guest. This is the future of intelligent content delivery.
              </p>
              <EnhancedButton asChild variant="outline" size="lg" glow>
                <Link href="/solutions/ai-gateway">
                  Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
            </div>
          </Card>
        </div>
      </ScrollAnimatedSection>

      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready to Integrate Premium Content & Revenue?"
        description="Partner with Flow Networks to integrate the CNN Travel Advertising Platform into your venue's digital experience. Contact us to learn how we can create new revenue streams and elevate your brand."
        ctaText="Discuss Your Partnership"
        ctaLink="/contact?subject=CNNTAP"
      />
    </div>
  );
};

export default CnnTapPage;