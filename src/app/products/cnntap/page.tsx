'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Megaphone, Newspaper, Tv2, Target, Users, Plane, Ship, Hotel, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const CNNTAP_PillarPage: NextPage = () => {
  const keyFeatures = [
    { 
      icon: Newspaper, 
      title: 'Curated Content Delivery', 
      description: 'Engage guests with handpicked, world-class news and entertainment from CNN and Warner Bros. Discovery, delivered directly to their personal devices.',
      points: ['Builds trust with a globally recognized news source', 'Enhances the in-room and in-venue experience', 'Caters to the modern, device-first traveler'],
      ctaLink: '/products/cnntap/content-experience',
    },
    { 
      icon: Target, 
      title: 'Precision-Targeted Branding', 
      description: 'Our Travel Advertising Platform (TAP) connects your captive audience with global brands, creating a new, GDPR-compliant ancillary revenue stream.',
      points: ['Monetize your WiFi connectivity', 'Benefit from partnerships managed by CNN\'s global sales team', 'Deliver relevant, non-intrusive brand messages'],
      ctaLink: '/products/cnntap/brand-partnerships',
    },
    { 
      icon: Globe, 
      title: 'Global Brand Exposure', 
      description: 'The CNN Hotel Partnership Program elevates your brand on a global stage, driving direct bookings and enhancing your international prestige.',
      points: ['Exclusive listing on the CNN Partner Hotels website', 'Inclusion in on-air commercials on CNN International', 'Bypass OTAs and reduce commission costs'],
      ctaLink: '/products/cnntap/global-exposure',
    },
  ];

  const successMetrics = [
    { stat: '2.5M+', label: 'Hotel Rooms Globally' },
    { stat: 'Most-Watched', label: 'Channel in Hotels Worldwide' },
    { stat: '445M+', label: 'Households & Hotel Rooms Reached' },
  ];
  
  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/solutions/splash-page - 2024-11-14T091428.903.png"
          alt="A global travel network represented by flight paths on a map."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">An Exclusive CNN International Partnership</p>
            <AnimatedHeading text="Transform Guest Connectivity into a Premium Content Experience" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p 
              className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-white/80 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Leverage the power of a global news leader to turn your venue's WiFi login into a curated, engaging, and revenue-generating touchpoint for the modern traveler.
            </motion.p>
        </div>
      </section>

      <div className="relative z-10">
        {/* --- 2. Strategic Overview (The "Why") --- */}
        <ScrollAnimatedSection as="section" className="-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-xl">
                            <AnimatedHeading text="The First Digital Handshake Matters" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                            <p className="text-lg text-muted-foreground font-body space-y-4">
                            <span>The standard WiFi login is a generic, missed opportunity. It's a functional necessity that offers no value to you or your guests.</span>
                            <br />
                            <span>CNNTAP transforms this moment into a premium brand experience. It's the first digital welcome, assuring guests of quality and prestige while opening a powerful new channel for engagement and ancillary revenue.</span>
                            </p>
                        </div>
                        <div>
                            <Image src="/images/solutions/McDonalds Splash.png" alt="An example of a branded splash page for a major global brand." width={800} height={600} className="rounded-lg shadow-l4" />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimatedSection>

        {/* --- 3. Key Features In-Depth (The "What") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="A Trifecta of Value" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">The platform is built on three powerful pillars that deliver value to your guests, your brand, and your bottom line.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className={cn("flex flex-col h-full", glowClasses[i % glowClasses.length])}>
                    <CardHeader>
                      <div className="mb-4 inline-block bg-primary/10 p-3 rounded-full"><feature.icon className="w-7 h-7 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground font-body mb-4">{feature.description}</p>
                      <ul className="space-y-2 text-sm">
                        {feature.points.map(point => (
                          <li key={point} className="flex items-start font-body"><ShieldCheck className="w-4 h-4 mr-2 mt-1 text-accent shrink-0" /><span>{point}</span></li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                        <Link href={feature.ctaLink}>Explore This Program <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                      </EnhancedButton>
                    </CardFooter>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- 6. Success Metrics & Social Proof (The "Proof") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Unrivaled Global Reach & Prestige" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map(metric => (
                <Card key={metric.label} className="perspex-card">
                  <div className="text-center p-8">
                    <p className="text-5xl font-extrabold text-gradient-animated tracking-tight">{metric.stat}</p>
                    <p className="text-muted-foreground font-body mt-2">{metric.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 4. Use Cases & Verticals (The "How") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Engaging the Modern Traveler, Everywhere" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GlassCard className={cn("h-full", glowClasses[0])}>
                    <CardHeader><Hotel className="w-8 h-8 text-primary mb-2" /><CardTitle>Hotels & Resorts</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">The core of the program. Enhance the guest stay from the moment they connect, reinforcing your commitment to a premium, world-class experience.</p></CardContent>
                </GlassCard>
                <GlassCard className={cn("h-full", glowClasses[1])}>
                    <CardHeader><Plane className="w-8 h-8 text-primary mb-2" /><CardTitle>Airlines & Airports</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">Capture and engage travelers during dwell times with relevant content, flight information, and targeted offers from retail and dining partners.</p></CardContent>
                </GlassCard>
                <GlassCard className={cn("h-full", glowClasses[2])}>
                    <CardHeader><Ship className="w-8 h-8 text-primary mb-2" /><CardTitle>Cruise Lines & Ferries</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">Provide a consistent, high-value digital experience for passengers at sea, delivering trusted news and entertainment where other options are limited.</p></CardContent>
                </GlassCard>
            </div>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- 5. Integration Advantage (The "Synergy") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center">
              <div className="mb-4 inline-block"><Users className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Content Layer for Your Intelligent WiFi" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                CNNTAP is the perfect experiential layer to run on top of Flow Networks' Intelligent WiFi. While our WiFi provides the secure, data-rich foundation for connectivity, CNNTAP delivers the premium, engaging, and monetizable interface that your guests interact with. Together, they create a seamless and powerful solution.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 7. Final CTA Section --- */}
        <CallToActionSection 
          title="Elevate Your Brand with a Global Leader" 
          description="Join a network of the world's leading hospitality brands. Partner with CNN and Flow Networks to transform your guest connectivity into an unforgettable experience." 
          ctaText="Become a CNN Partner" 
          ctaLink="/contact?subject=CNNPartnerInquiry" 
        />
      </div>
    </div>
  );
};

export default CNNTAP_PillarPage;