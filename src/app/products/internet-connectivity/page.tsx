
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, Zap, Server, Shield, Cloud, Rocket, ShieldCheck } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';

const InternetConnectivityPage: NextPage = () => {
  const connectivityTypes = [
    {
      icon: Zap,
      title: 'Business Fibre',
      description: 'Experience unparalleled speed and reliability with dedicated, high-capacity fibre optic connectivity, perfect for data-intensive operations and supporting a large number of users.'
    },
    {
      icon: Wifi,
      title: 'Licensed Wireless',
      description: 'Get fibre-like performance with the flexibility of a wireless connection. Ideal for areas where fibre is not available, providing a stable and scalable internet backbone.'
    },
    {
      icon: Server,
      title: 'Redundant LTE/5G Failover',
      description: 'Ensure 100% uptime for your critical operations. Our automated LTE/5G failover solutions guarantee your venue stays online, no matter what.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Optimized Connectivity',
      description: 'Direct, low-latency connections to major cloud providers like AWS and Azure, ensuring your cloud-based applications perform at their peak.'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-secondary/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-primary/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading
            text="Connectivity That Powers Intelligence"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            Your network is the central nervous system of your venue. Flow Networks delivers resilient, high-performance internet connectivity designed not just for access, but as the foundation for data analytics, guest engagement, and AI-driven services.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Connectivity Types Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="The Right Connection for Your Business"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              We architect tailored connectivity solutions using a blend of best-in-class technologies to meet your specific needs for speed, reliability, and scalability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {connectivityTypes.map((feature, i) => (
              <GlassCard key={i} className="text-center" glowColor="secondary">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Why It Matters Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading text="More Than Just Internet Speed" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-muted-foreground mb-6 text-lg">In today's digital-first world, your internet connection is a strategic asset. A poor connection means a poor customer experience, lost sales, and operational friction. A Flow Networks connection is different.</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-accent mr-2 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Built for Business</h4>
                    <p className="text-sm">We provide business-grade connectivity with guaranteed uptime and proactive support, ensuring your operations never miss a beat.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Rocket className="w-6 h-6 text-accent mr-2 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Designed for Intelligence</h4>
                    <p className="text-sm">Our networks are designed to handle the demands of data-intensive applications, from location analytics to real-time AI processing, forming the core of your AI Gateway.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square">
                <Image 
                  src="https://placehold.co/600x600.png" 
                  alt="Abstract visualization of data flowing through network cables and wireless signals" 
                  width={600} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="futuristic 3D render of glowing fiber optic cables morphing into WiFi signals, representing unified connectivity"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready for a Connection That Works as Hard as You Do?"
        description="Stop letting slow, unreliable internet hold your business back. Let our experts design a connectivity solution that empowers your venue for today and prepares it for tomorrow."
        ctaText="Get a Connectivity Quote"
        ctaLink="/contact?subject=ConnectivityQuote"
      />
    </div>
  );
};

export default InternetConnectivityPage;
