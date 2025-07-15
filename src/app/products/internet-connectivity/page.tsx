'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Wrench, Layers, Rocket, Server } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';

const InternetConnectivityPage: NextPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Business-Grade Fibre',
      description: 'High-speed, low-latency fibre internet, delivered in partnership with leading providers, ensuring maximum performance for your venue.'
    },
    {
      icon: ShieldCheck,
      title: 'LTE & 5G Failover',
      description: 'Guarantee 99.9% uptime with seamless, automatic failover to high-speed wireless connections, ensuring your operations are always online.'
    },
    {
      icon: Wrench,
      title: 'Fully Managed Solution',
      description: 'We handle the setup, proactive monitoring, and management of your network, providing a single point of contact for all your connectivity needs.'
    },
    {
      icon: Layers,
      title: 'Scalable Bandwidth',
      description: 'From a small cafe to a high-density stadium, our solutions are designed to scale with your needs, ensuring a flawless experience for any number of users.'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section (from V1) --- */}
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
            Your network is the central nervous system of your venue. Flow Networks delivers resilient, high-performance internet designed not just for access, but as the foundation for data analytics, guest engagement, and AI-driven services.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Features Section (from V2) --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="Connectivity Engineered for Performance"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              Our suite of connectivity solutions ensures your venue has a robust and resilient digital foundation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, i) => (
              <GlassCard key={i} className="text-center" glowColor="primary">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
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

      {/* --- Why It Matters Section (from V1) --- */}
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
                <Image 
                  src="https://placehold.co/800x600.png" 
                  alt="Abstract visualization of data flowing through network cables and wireless signals" 
                  width={800} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="futuristic 3D render of glowing fiber optic cables morphing into WiFi signals, representing unified connectivity"
                />
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- The AI Gateway Vision Section (from V2) --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedAccentBorder variant="prominent" color="accent">
            <div className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="w-10 h-10 text-accent" />
              </div>
              <AnimatedHeading
                text="The Highway to Your AI-Powered Future"
                as="h2"
                className="text-3xl sm:text-4xl font-bold mb-4"
              />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                The visionary Flow AI Gateway relies on the instant processing of vast amounts of data. High-speed, low-latency internet is the non-negotiable prerequisite for this future. Investing in superior connectivity today is the first and most critical step to enabling the real-time, on-premise AI experiences of tomorrow.
              </p>
              <EnhancedButton asChild variant="outline" size="lg" glow>
                <Link href="/solutions/ai-gateway">
                  Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
            </div>
          </AnimatedAccentBorder>
        </div>
      </ScrollAnimatedSection>

      {/* --- Final CTA Section (from V2) --- */}
      <CallToActionSection 
        title="Ready to Build Your Venue's Digital Foundation?"
        description="Ensure your venue is prepared for the future of digital engagement. Contact Flow Networks for a comprehensive audit of your connectivity needs."
        ctaText="Request a Connectivity Audit"
        ctaLink="/contact?subject=ConnectivityAudit"
      />
    </div>
  );
};

export default InternetConnectivityPage;