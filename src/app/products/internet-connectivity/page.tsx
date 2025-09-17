'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Gauge, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const InternetConnectivityPage: NextPage = () => {
  const servicePillars = [
    { 
      icon: Zap, 
      title: 'High-Speed Fibre', 
      description: 'Leverage the power of dedicated, uncontended fibre optic connectivity for lightning-fast speeds and ultra-low latency, essential for modern digital operations.' 
    },
    { 
      icon: Gauge, 
      title: 'Guaranteed Performance', 
      description: 'We provide enterprise-grade Service Level Agreements (SLAs) that guarantee uptime and performance, ensuring your critical systems are always online.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Redundancy & Failover', 
      description: 'For mission-critical venues, we design and implement redundant connectivity solutions (e.g., secondary LTE/5G failover) to ensure 100% uptime, even during an outage.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Foundational Services</p>
            <AnimatedHeading text="Internet Connectivity: The Unshakeable Foundation for Your Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Your intelligent venue is only as strong as its connection to the world. We provide the mission-critical, high-performance internet backbone that powers every transaction, every interaction, and every insight.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From a Simple Utility to a Strategic Asset" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>In the digital age, internet connectivity is no longer just a utility like water or electricity—it's the central nervous system of your entire operation.</span>
                  <br/>
                  <span>A slow or unreliable connection means failed payments, frustrated guests, and a halt to your business. We treat your connectivity with the strategic importance it deserves, providing enterprise-grade solutions that are fast, resilient, and built to handle the demands of a modern, data-driven venue.</span>
                </p>
              </div>
              <div>
                <Image src="/images/solutions/Internet connectivity1.jpg" alt="An abstract visualization of data flowing rapidly through a fibre optic cable into a building." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A sleek, 3D render. A glowing fibre optic cable, pulsing with lines of light (data), is shown connecting from a global network cloud to a stylized icon of a modern building (representing the venue). The image should convey speed, reliability, and a powerful connection." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Commitment to Performance" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicePillars.map((pillar) => (
                <GlassCard key={pillar.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><pillar.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{pillar.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><Layers className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The First Layer of the Intelligent Stack" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Reliable internet is the foundational layer upon which everything else is built. Our high-performance connectivity is the essential prerequisite for our Intelligent WiFi, which in turn powers our Location Intelligence, Marketing platforms, and the visionary AI Gateway. It all starts with a solid connection.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi">Explore the Intelligent WiFi Platform <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready for an Unshakeable Connection?"
          description="Don't let a poor internet connection be the weak link in your operation. Contact our network specialists for a free audit of your current infrastructure and a tailored connectivity proposal."
          ctaText="Request a Connectivity Audit"
          ctaLink="/contact?subject=ConnectivityAudit"
        />
      </div>
    </div>
  );
};

export default InternetConnectivityPage;