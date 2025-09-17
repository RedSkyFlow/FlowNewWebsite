'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Tv2, MousePointerClick, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const GlobalExposurePage: NextPage = () => {
  const programBenefits = [
    { 
      icon: Tv2, 
      title: 'On-Air Commercial Features', 
      description: 'Your property will be showcased in dedicated commercials on CNN International, reaching over 235 million viewers across Europe, the Middle East, and Africa.' 
    },
    { 
      icon: MousePointerClick, 
      title: 'Exclusive Website Listing', 
      description: 'Gain a premium listing on the dedicated CNN Partner Hotels website, accessible via CNN.com, which draws over 280 million monthly page views.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Drive Direct Bookings', 
      description: 'Your exclusive listing includes a direct hyperlink to your hotel\'s website, helping you bypass costly Online Travel Agencies (OTAs) and increase your profit margins.' 
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
            <AnimatedHeading text="Global Exposure: Elevate Your Brand on the World Stage" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Associate your brand with one of the most trusted names in the world. The CNN Hotel Partnership Program is your gateway to a global audience of discerning travelers.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Local Gem to Global Destination" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>In a crowded market, brand prestige is paramount. The CNN Hotel Partnership Program is more than a marketing tool; it's a powerful endorsement.</span>
                  <br/>
                  <span>By aligning with CNN, you instantly signal a commitment to quality and a global standard of excellence. This program is designed to amplify your brand's reach, attract a lucrative international clientele, and solidify your position as a leading destination.</span>
                </p>
              </div>
              <div>
                <Image src="/images/cnntap-global-hero.jpg" alt="A montage of a luxury hotel's logo featured on the CNN website and in a CNN on-air commercial." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A sophisticated split-screen image. On the left, a laptop screen shows the CNN Partner Hotels website with a beautiful feature on 'The Grand Plaza Hotel'. On the right, a television screen shows a still from a CNN commercial, with the hotel's exterior shot and the CNN logo in the corner. The image conveys multi-platform exposure." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="A Multi-Platform Marketing Powerhouse" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programBenefits.map((benefit) => (
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
              <AnimatedHeading text="A Partnership with a Unique Condition" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The most remarkable aspect of this program is its accessibility. These powerful global marketing benefits are offered free of charge to our hotel partners, with the simple condition that they display the CNN International channel in their rooms—a feature already expected by a global clientele.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Elevate Your Brand's Prestige?"
          description="Join an elite network of the world's leading hotels and resorts. Contact us to learn how you can leverage the global power of the CNN brand to drive direct bookings and enhance your international reputation."
          ctaText="Inquire About the Hotel Partnership"
          ctaLink="/contact?subject=CNNHotelPartnership"
        />
      </div>
    </div>
  );
};

export default GlobalExposurePage;