'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, DollarSign, MessageSquare, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const AddOnsPage: NextPage = () => {
  const addOns = [
    { 
      icon: DollarSign, 
      title: 'Paid WiFi', 
      description: 'Generate direct revenue by offering tiered or premium high-speed WiFi access for guests who need more bandwidth.',
      ctaLink: '/products/intelligent-wifi/add-ons/paid-wifi',
    },
    { 
      icon: MessageSquare, 
      title: 'Surveys', 
      description: 'Capture real-time guest feedback with targeted, post-visit surveys to improve your services and manage your online reputation.',
      ctaLink: '/products/intelligent-wifi/add-ons/surveys',
    },
    { 
      icon: ShieldCheck, 
      title: 'Shield (Content Filtering)', 
      description: 'Ensure a safe and secure browsing environment for all guests with advanced content filtering, powered by our Friendly WiFi certification.',
      ctaLink: '/products/intelligent-wifi/add-ons/shield',
    },
    { 
      icon: UserCheck, 
      title: 'SecurePass (Passpoint)', 
      description: 'Offer seamless and secure, automatic logins for repeat visitors using Passpoint technology, eliminating the need for captive portals.',
      ctaLink: '/products/intelligent-wifi/add-ons/securepass',
    },
    { 
      icon: Briefcase, 
      title: 'Professional Services', 
      description: 'Leverage our team of experts for strategic consulting, custom integrations, and managed services to maximize your platform\'s ROI.',
      ctaLink: '/partners', // Links to a broader page
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi Platform</p>
            <AnimatedHeading text="Enhance & Extend Your Platform with Powerful Add-Ons" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Tailor your Intelligent WiFi solution to your exact business needs. Our suite of powerful add-ons allows you to unlock new revenue streams, gather deeper insights, and provide an even more seamless guest experience.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOns.map((addOn, i) => (
                <motion.div key={addOn.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4 inline-block bg-primary/10 p-3 rounded-full"><addOn.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{addOn.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-body text-muted-foreground">{addOn.description}</p>
                    </CardContent>
                    <CardFooter>
                      <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                        <Link href={addOn.ctaLink}>Explore Add-On <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                      </EnhancedButton>
                    </CardFooter>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Customize Your Solution?"
          description="Our platform is designed to be modular and flexible. Contact our specialists to discuss which add-ons are right for your venue and build the perfect Intelligent WiFi solution for your specific goals."
          ctaText="Build Your Custom Plan"
          ctaLink="/contact?subject=CustomWiFiPlan"
        />
      </div>
    </div>
  );
};

export default AddOnsPage;