'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, ListChecks, Globe, UserCheck, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const ShieldPage: NextPage = () => {
  const keyFeatures = [
    { 
      icon: EyeOff, 
      title: 'Inappropriate Content Blocking', 
      description: 'Our core function. We block access to adult content, illegal material (as defined by the IWF), and extremist content to ensure a family-friendly environment.' 
    },
    { 
      icon: ListChecks, 
      title: 'Customizable Filter Categories', 
      description: 'Go beyond the basics. Choose to block additional categories like social media, streaming sites, or gaming to align the online experience with your specific venue\'s goals.' 
    },
    { 
      icon: Globe, 
      title: 'Malware & Phishing Protection', 
      description: 'Shield does more than filter content; it protects your guests and your network from known malicious websites, phishing scams, and other online threats.' 
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
            <AnimatedHeading text="Shield: Proactive Content Filtering & Threat Protection" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Protect your guests, your brand, and your network. Shield is our enterprise-grade content filtering solution that makes your public WiFi a certified safe space for everyone.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Open Liability to a Statement of Trust" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Offering unfiltered internet access is a risk. It exposes your guests to inappropriate content and your business to potential brand damage and legal liability.</span>
                  <br/>
                  <span>Shield transforms this risk into an opportunity to build trust. By actively curating a safe online environment, you make a powerful statement that your brand cares about the well-being of its community, especially families and children.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/Shield-Add-on-hero-image.jpg" alt="A visual metaphor showing a digital shield protecting a family from harmful online content icons." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A stylized, semi-transparent shield icon glowing with our primary (Teal) color. Behind the shield, icons representing a family (user icons) are safe. On the outside of the shield, abstract, dark, and menacing icons representing online threats are being blocked and deflected." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Comprehensive Protection, Simple Control" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
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
              <div className="mb-4 inline-block">
                <Image src="https://placehold.co/150x150.png" alt="Friendly WiFi Certification Symbol" width={80} height={80} data-ai-hint="The official green and white Friendly WiFi logo." />
              </div>
              <AnimatedHeading text="Powered by Friendly WiFi Certification" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our Shield add-on is built to meet and exceed the global standards set by the Friendly WiFi certification scheme. By activating Shield, you are not just filtering content; you are deploying a solution that makes your venue eligible for this publicly recognized seal of approval, demonstrating your commitment to the highest standards of online safety.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/friendly-wifi">Explore Friendly WiFi Certification <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Create a Safer Digital Space?"
          description="Protect your brand and build trust with your visitors. Add Shield to your Intelligent WiFi platform and make a clear statement about your commitment to a safe online experience."
          ctaText="Activate Shield Protection"
          ctaLink="/contact?subject=ShieldAddOn"
        />
      </div>
    </div>
  );
};

export default ShieldPage;