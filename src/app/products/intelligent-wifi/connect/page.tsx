
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, Wifi, ShieldCheck, DatabaseZap, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const ConnectPage: NextPage = () => {
  const features = [
    { icon: Palette, title: 'Fully Branded Experience', description: 'Customize every element—from logos and backgrounds to colors and fonts—to ensure the login experience is a seamless extension of your brand.' },
    { icon: Wifi, title: 'Multiple Login Options', description: 'Offer guests the convenience of connecting via a simple form, social media accounts (Facebook, Google), or even integrated PMS for hotels.' },
    { icon: ShieldCheck, title: 'Ironclad Security & Compliance', description: 'All connections are secure, and our platform is built with GDPR, POPIA, and CCPA compliance at its core, ensuring total peace of mind.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi: The Connect Layer</p>
            <AnimatedHeading text="The First Impression is Digital" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Transform the generic WiFi login into a professional, secure, and beautifully branded welcome mat for your digital venue.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="https://placehold.co/800x800.png" alt="A side-by-side comparison of a generic, ugly WiFi login page and a sleek, branded Flow Networks captive portal." width={800} height={800} className="rounded-lg shadow-l4" data-ai-hint="Left side: A generic, dated login form with a harsh white background. Right side: A beautiful, dark-themed login portal on a smartphone screen, featuring a luxury hotel's logo, a stunning background image of the hotel, and clean, simple login buttons. Use brand colors." />
              </div>
              <div className="max-w-xl">
                <AnimatedHeading text="From Annoyance to Asset" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>A poor login experience creates friction and reflects poorly on your brand. It's a hurdle your guests are forced to overcome.</span>
                  <br/>
                  <span>We transform that hurdle into a handshake. Our captive portals are designed to be effortless for guests and a powerful branding tool for you, turning a moment of utility into a moment of connection.</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Pillars of a Perfect Welcome" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="perspex-card p-6 text-center">
                  <CardHeader>
                    <div className="mx-auto inline-block bg-accent/10 p-3 rounded-full mb-4"><feature.icon className="w-8 h-8 text-accent" /></div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><DatabaseZap className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Gateway to Intelligence" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                A seamless connection is just the beginning. This first step is what enables the ethical capture of first-party data, providing the foundation for a truly personalized guest journey.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi/capture">Next Step: Explore Data Capture <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Redefine Your Welcome?"
          description="Stop settling for a generic login page. Let's create a branded, secure, and seamless connection experience that delights your guests from the very first click."
          ctaText="Design Your Portal"
          ctaLink="/contact?subject=PortalDesign"
        />
      </div>
    </div>
  );
};

export default ConnectPage;
