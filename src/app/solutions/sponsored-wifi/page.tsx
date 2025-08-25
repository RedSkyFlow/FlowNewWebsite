'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Target, BarChart3, Users, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const SponsoredWiFiPage: NextPage = () => {
  const valuePropositions = [
    { 
      icon: Users, 
      title: 'For Your Venue', 
      description: 'Fully fund or subsidize the cost of providing high-quality guest WiFi. Transform a necessary expense into a zero-cost asset or even a new profit center.' 
    },
    { 
      icon: Target, 
      title: 'For the Sponsor', 
      description: 'Gain unparalleled access to a highly targeted, captive audience at the moment of connection. A powerful and memorable way to build brand affinity.' 
    },
    { 
      icon: Gift, 
      title: 'For the Guest', 
      description: 'Receive fast, free, and seamless WiFi access, courtesy of a sponsoring brand. It\'s a positive, value-added experience, not an intrusive ad.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
            <AnimatedHeading text="Sponsored WiFi: Forge Powerful Brand Partnerships" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Offer premium, free WiFi to your guests at zero cost to your business. Our Sponsored WiFi solution creates a valuable new digital asset that brands will pay to be a part of.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Win-Win-Win Scenario" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Traditional advertising is about interruption. Sponsored WiFi is about enablement. By having a partner brand "present" the free WiFi, you create a positive three-way value exchange.</span>
                  <br/>
                  <span>Your venue provides a premium amenity for free. Your sponsor gets highly effective brand exposure. Your guest gets the seamless connectivity they desire. It's a powerful strategy where everyone benefits.</span>
                </p>
              </div>
              <div>
                <Image src="/images/solutions/Sponsored WiFi3.jpg" alt="An infographic showing a central venue icon connecting to a guest icon, and a sponsor brand icon, with value arrows flowing between all three." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, 3D visual. In the center, a building icon (The Venue). To the left, a user icon (The Guest). To the right, a corporate logo icon (The Sponsor). Glowing lines connect them all in a triangle, with text labels on the lines: 'Free WiFi' (from Venue to Guest), 'Brand Exposure' (from Venue to Sponsor), and 'Funding' (from Sponsor to Venue)." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="A Clear Value Proposition for All" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuePropositions.map((prop) => (
                <GlassCard key={prop.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><prop.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{prop.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><Handshake className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Flexible Partnership Models" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our platform supports a range of sponsorship implementations, from a simple branded splash page ("Free WiFi presented by...") to fully interactive video ads or post-login surveys funded by your partner. We work with you to create a package that provides maximum value to your sponsors.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/contact?subject=SponsorshipModels">Discuss Partnership Models <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Fund Your Free WiFi?"
          description="Stop paying for your guest network. Let us help you find the right brand partners to create a world-class, sponsored connectivity experience for your visitors."
          ctaText="Explore Sponsorship Opportunities"
          ctaLink="/contact?subject=SponsoredWiFi"
        />
      </div>
    </div>
  );
};

export default SponsoredWiFiPage;