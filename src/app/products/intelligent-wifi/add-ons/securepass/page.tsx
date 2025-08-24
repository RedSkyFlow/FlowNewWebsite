'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, UserCheck, Zap, Lock, Repeat, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const SecurePassPage: NextPage = () => {
  const keyBenefits = [
    { 
      icon: Zap, 
      title: 'Effortless, Instant Connectivity', 
      description: 'Once a guest installs the secure profile, their device connects automatically and instantly every time they enter your venue. No portals, no passwords, no friction.' 
    },
    { 
      icon: Lock, 
      title: 'WPA2/3 Enterprise-Grade Security', 
      description: 'Passpoint technology uses the highest level of WiFi security, encrypting the connection between the device and the network. It\'s far more secure than traditional open networks.' 
    },
    { 
      icon: Repeat, 
      title: 'Boost Loyalty & Visit Frequency', 
      description: 'A seamless connection experience is a powerful loyalty driver. Guests are more likely to return to a venue where they know connectivity is instant and effortless.' 
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
            <AnimatedHeading text="SecurePass: The End of the Login Screen" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Elevate your guest experience with Passpoint technology. Offer your loyal customers a truly seamless and highly secure connection that works automatically, every time they visit.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The VIP Digital Handshake" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Think of it as a digital red carpet. For your most valued and frequent visitors, the login portal is an unnecessary step. SecurePass remembers them, authenticates them securely in the background, and connects them to your network before they've even taken their phone out of their pocket.</span>
                  <br/>
                  <span>This is the pinnacle of a frictionless digital experience, a subtle but powerful signal that you recognize and value their loyalty.</span>
                </p>
              </div>
              <div>
 <Image src="/images/products/securepass-add-on-arriving.jpg" alt="A person walking into a hotel lobby, their phone automatically connecting to WiFi with a subtle, premium notification." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A person walks into a modern, stylish hotel lobby. Their smartphone screen is partially visible, showing a small, elegant notification at the top: 'Welcome back to The Grand Plaza. You are securely connected.' A WiFi symbol with a small lock icon is prominent. The focus is on the seamless, automatic nature of the connection." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The SecurePass Advantage" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyBenefits.map((feature) => (
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
              <div className="mb-4 inline-block"><Wifi className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="How It Works: A Simple Two-Step Process" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                On their first visit, guests are prompted via the captive portal to install a secure, one-time network profile. On every subsequent visit to any of your locations, their device will automatically and securely connect, completely bypassing the login screen.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Offer a Truly Seamless Experience?"
          description="Reward your loyal customers and enhance your network security with the power of Passpoint. Contact us to learn how SecurePass can eliminate the login screen for good."
          ctaText="Explore SecurePass"
          ctaLink="/contact?subject=SecurePassAddOn"
        />
      </div>
    </div>
  );
};

export default SecurePassPage;