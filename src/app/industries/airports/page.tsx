
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Wifi, Route, BarChart3, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { cn } from '@/lib/utils';
import { ParallaxSection } from '@/components/shared/ParallaxSection';

const AirportsPage: NextPage = () => {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'airports');

  if (!industry) return null;

  const featureGlowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- Hero Section --- */}
      <ParallaxSection
        imageUrl="/images/industries/Airports.png"
        altText="A bustling, modern airport terminal representing a hub of connectivity"
        speed={0.3}
        className="h-[80vh] min-h-[500px]"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center h-full text-white">
            <Link href="/industries" className="text-sm font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Airports</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        </div>
      </ParallaxSection>

      <div className="relative z-10">
        <ParallaxSection
          className="-mt-20"
          speed={-0.1} // Move in the opposite direction
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="max-w-xl">
                    <AnimatedHeading text="From Crowded Terminals to Intelligent Hubs" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                    <p className="text-lg text-muted-foreground font-body space-y-4">
                      <span>Airports are complex ecosystems with immense pressure on efficiency and passenger experience. Managing the flow of thousands of people while ensuring security and operational uptime is a monumental task.</span>
                      <br/>
                      <span>Our platform provides the digital nervous system to transform your airport into a smart, responsive, and data-driven environment. We turn connectivity into a tool for insight, efficiency, and revenue.</span>
                    </p>
                  </div>
                  <div>
                    <Image src="/images/industries/airport aI Gateway.png" alt="An AI-powered dashboard showing passenger flow and airport analytics." width={800} height={600} className="rounded-lg shadow-l4" />
                  </div>
                </div>
            </div>
          </div>
        </ParallaxSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for Aviation Excellence" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.features.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className={cn("flex flex-col h-full", featureGlowClasses[i % featureGlowClasses.length])}>
                    <CardHeader>
                      <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Monetize Dwell Time, Intelligently" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Passenger dwell time is a significant, untapped revenue opportunity. Our platform allows you to leverage sponsored WiFi, deliver targeted offers from retail tenants via CNNTAP, and gather insights to optimize your commercial layout, turning waiting time into a profitable experience.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/solutions/wifi-monetisation">Explore WiFi Monetisation</Link>
                </EnhancedButton>
                <EnhancedButton asChild variant="outline">
                  <Link href="/products/cnntap">Explore CNNTAP</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Elevate Your Airport?"
          description="From terminal to tarmac, let's build a smarter, more efficient, and more profitable airport experience together. Contact our aviation specialists today."
          ctaText={industry.cta}
          ctaLink="/contact?subject=AirportSolution"
        />
      </div>
    </div>
  );
};

export default AirportsPage;
