'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, DatabaseZap, MessageSquare, BarChart3, ShieldCheck, Cpu, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const IntelligentWiFiPage: NextPage = () => {
  const coreCapabilities = [
    { 
      icon: Wifi, 
      title: 'Connect: The Branded Welcome', 
      description: 'Transform your login screen from a generic utility into a professional, secure, and beautifully branded first impression.',
      ctaLink: '/products/intelligent-wifi/connect',
    },
    { 
      icon: DatabaseZap, 
      title: 'Capture: The Trust Exchange', 
      description: 'Ethically build a high-value, first-party data asset from your verified, on-premise guests, built on a foundation of consent.',
      ctaLink: '/products/intelligent-wifi/capture',
    },
    { 
      icon: MessageSquare, 
      title: 'Engage: The Conversation Starter', 
      description: 'Activate your new audience with powerful automation tools to start relevant, personalized conversations that build loyalty.',
      ctaLink: '/products/intelligent-wifi/engage',
    },
    { 
      icon: BarChart3, 
      title: 'Analyze: The Venue\'s Pulse', 
      description: 'Turn anonymous footsteps into actionable strategy with location intelligence that gives you the "Google Analytics for your physical space."',
      ctaLink: '/products/intelligent-wifi/location-intelligence',
    },
    { 
      icon: ShieldCheck, 
      title: 'Secure: The Foundation of Trust', 
      description: 'Architected with multi-layered, enterprise-grade security to protect your data, your guests, and your brand from digital threats.',
      ctaLink: '/products/intelligent-wifi/secure-access',
    },
     { 
      icon: Cpu, 
      title: 'Evolve: The AI Gateway Foundation', 
      description: 'Our platform is the essential first layer of a future-proof AI ecosystem, providing the sensory input for the sentient venue of tomorrow.',
      ctaLink: '/products/intelligent-wifi/ai-gateway',
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Our Core Platform</p>
            <AnimatedHeading text="Intelligent WiFi: The Digital Nervous System for Your Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              We transform standard guest WiFi from a passive utility into an active intelligence engine. It is the foundational layer that connects, captures, and understands every digital interaction within your physical space.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From a Cost Center to Your Core Asset" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Guest WiFi has always been seen as a necessary expense. We see it as your single greatest untapped asset.</span>
                  <br/>
                  <span>It is the only tool that can definitively verify physical presence, creating the ultimate source of high-quality, first-party data. Our platform is engineered to unlock the immense value of this asset, turning your network into the central hub for security, marketing, analytics, and future AI innovation.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/intelligent-wifi-hero.jpg" alt="An abstract visualization of a central WiFi icon radiating layers of data representing security, analytics, and engagement." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A sophisticated 3D graphic. In the center, a glowing WiFi symbol. Radiating outwards from it are concentric, semi-transparent rings, each with a different label and icon: 'Secure Connection' (with a lock), 'Data Capture' (with a user profile), 'Location Analytics' (with a heatmap), and 'AI Layer' (with a brain circuit). The image should convey a multi-layered, powerful platform." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Six Pillars of an Intelligent Network" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Our platform is a complete ecosystem, providing end-to-end capabilities from the moment a guest connects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCapabilities.map((capability, i) => (
                <motion.div key={capability.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4 inline-block"><capability.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-body text-muted-foreground">{capability.description}</p>
                    </CardContent>
                    <CardFooter>
                      <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                        <Link href={capability.ctaLink}>
                          Explore Feature <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </EnhancedButton>
                    </CardFooter>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><PlusCircle className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Enhance & Extend with Powerful Add-Ons" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Tailor your platform to your exact business needs. Our suite of powerful add-ons allows you to unlock new revenue streams, gather deeper insights, and provide an even more seamless guest experience.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi/add-ons">Explore All Add-Ons</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Build Your Intelligent Foundation?"
          description="The journey to a truly intelligent venue starts with the right network. Let's discuss how our core platform can become your single greatest asset."
          ctaText="Consult with a Platform Specialist"
          ctaLink="/contact?subject=IntelligentWiFiPlatform"
        />
      </div>
    </div>
  );
};

export default IntelligentWiFiPage;