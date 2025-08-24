'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, DollarSign, Zap, SlidersHorizontal, CreditCard, BarChartBig, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const PaidWiFiPage: NextPage = () => {
  const keyFeatures = [
    { 
      icon: SlidersHorizontal, 
      title: 'Tiered Bandwidth Control', 
      description: 'Create multiple service tiers. Offer a free, basic connection for casual users and a paid, high-speed option for business travelers, streamers, and power users.' 
    },
    { 
      icon: CreditCard, 
      title: 'Flexible & Secure Payments', 
      description: 'Integrate seamlessly with leading payment gateways for secure credit card transactions. For hospitality, charges can be billed directly to a guest\'s room via PMS integration.' 
    },
    { 
      icon: BarChartBig, 
      title: 'Revenue & Usage Analytics', 
      description: 'Access detailed dashboards that track revenue, plan popularity, and usage patterns. Make data-driven decisions to optimize your pricing and service tiers.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/intelligent-wifi/add-ons" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Add-Ons
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Intelligent WiFi Add-On</p>
            <AnimatedHeading text="Paid WiFi: From Cost Center to Profit Center" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Stop giving away your most valuable digital asset for free. Our Paid WiFi add-on transforms your network into a direct revenue stream by offering premium, high-speed access to the guests who value it most.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Strategy of Tiered Value" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>The modern guest doesn't just want WiFi—they want the *right* WiFi for their needs. A casual browser has different expectations than a business executive on a critical video call.</span>
                  <br/>
                  <span>Offering a tiered service model allows you to cater to everyone. Provide a solid, free connection as a baseline, and monetize the demand for premium, high-performance connectivity. It's the ultimate win-win: your guests get the experience they want, and you create a new, high-margin revenue stream.</span>
                </p>
              </div>
 <Image src="/images/solutions/PaidWifiGuest_WiFi-hotel-lobby.jpg" alt="A user on a laptop choosing between a 'Free Basic WiFi' plan and a 'Premium High-Speed' plan on a sleek captive portal." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, modern UI on a laptop screen. There are two cards side-by-side. The left card is labeled 'Basic Access - Free' with bullet points like 'Email & Browsing'. The right card is labeled 'Premium Access - $9.99/day', highlighted with a primary color border, and has bullet points like '4K Streaming' and 'VPN & Video Calls'. A credit card icon is visible." />
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Flexible Monetization Tools" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFeatures.map((feature) => (
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
              <AnimatedHeading text="Who Needs Paid WiFi?" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                This solution is ideal for high-demand environments where guaranteed performance is a valuable commodity, such as hotels, airports, convention centers, co-working spaces, and transport hubs.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Monetize Your Network?"
          description="Transform your WiFi from a necessary expense into a profitable asset. Contact our team to design a tiered access strategy that delights your power users and boosts your bottom line."
          ctaText="Design Your Monetization Plan"
          ctaLink="/contact?subject=PaidWiFiPlan"
        />
      </div>
    </div>
  );
};

export default PaidWiFiPage;