'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Target, Globe, Building, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const BrandPartnershipsPage: NextPage = () => {
  const benefits = [
    { 
      icon: Building, 
      title: 'For Venues: A New Revenue Stream', 
      description: 'Monetize your guest WiFi by turning your captive portal into a premium advertising space. We handle the sales and partnerships; you receive a share of the revenue.' 
    },
    { 
      icon: Target, 
      title: 'For Brands: Precision Targeting', 
      description: 'Reach a highly sought-after demographic of global travelers at a moment of high engagement. Our platform allows for precision targeting based on venue type and location.' 
    },
    { 
      icon: UserCheck, 
      title: 'For Guests: A Value-Added Experience', 
      description: 'The partnership model ensures that advertising is relevant and non-intrusive, often presenting valuable offers or content that enhances the guest\'s travel experience.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/cnntap" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to CNNTAP
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">CNNTAP Program Deep Dive</p>
            <AnimatedHeading text="Brand Partnerships: Connecting Global Brands with Global Travelers" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Our Travel Advertising Platform (TAP) creates a powerful, mutually beneficial ecosystem connecting our hospitality partners with world-class brands.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="A New Paradigm in Travel Advertising" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>The WiFi login is the first digital interaction a traveler has in a new space. It's a moment of undivided attention—a rare and valuable asset.</span>
                  <br/>
                  <span>CNNTAP transforms this moment into a premium, curated advertising opportunity. We leverage the trust and prestige of the CNN brand to connect our venue partners with global advertisers, creating a revenue-generating opportunity that feels like a premium service, not a disruptive ad.</span>
                </p>
              </div>
              <div>
                <Image src="/images/cnntap-brand-hero.jpg" alt="A luxury brand's advertisement elegantly displayed on the CNNTAP welcome screen on a guest's phone in a hotel." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A smartphone screen showing the CNNTAP interface. The hotel logo is at the top. Below it, a beautiful, high-end ad for a luxury watch or perfume brand is displayed, with the text 'Welcome, your connection is sponsored by [Brand Logo]'. The background is a stylish, blurred hotel room." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Win-Win-Win Ecosystem" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <GlassCard key={benefit.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><benefit.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{benefit.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><Globe className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Managed by a World-Class Sales Team" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                This is a fully managed service. You simply provide the advertising space, and CNN's global sales team handles the rest. They source the brand partnerships, manage the campaigns, and ensure all content is premium and appropriate, providing you with a hassle-free ancillary revenue stream.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Unlock a New Revenue Stream?"
          description="Monetize your digital real estate by joining an exclusive network of premium venues and global brands. Contact us to learn more about becoming a CNNTAP partner."
          ctaText="Inquire About Brand Partnerships"
          ctaLink="/contact?subject=CNNTAP_Partnerships"
        />
      </div>
    </div>
  );
};

export default BrandPartnershipsPage;