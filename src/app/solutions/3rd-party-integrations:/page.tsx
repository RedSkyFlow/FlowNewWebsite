'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Link2, Puzzle, Share2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const IntegrationsPage: NextPage = () => {
  const integrationCategories = [
    { 
      icon: Layers, 
      title: 'CRM Platforms', 
      description: 'Pipe rich, first-party guest data directly into your single source of truth. We connect with Salesforce, HubSpot, Microsoft Dynamics, and more.',
      logos: ['salesforce', 'hubspot', 'dynamics']
    },
    { 
      icon: Share2, 
      title: 'Marketing Automation', 
      description: 'Trigger powerful, automated journeys across any channel. We integrate seamlessly with Everlytic, Mailchimp, ActiveCampaign, and other leading platforms.',
      logos: ['everlytic', 'mailchimp', 'activecampaign']
    },
    { 
      icon: Puzzle, 
      title: 'Hospitality & POS Systems', 
      description: 'Unify your guest experience. Our platform communicates with major Property Management Systems (PMS) and Point-of-Sale (POS) systems like Allxs.',
      logos: ['allxs', 'oracle', 'micros']
    },
  ];

  // Placeholder for logo paths - replace with actual paths in /public/images/logos/
  const logoPath = (name: string) => `https://placehold.co/150x50/151417/E2FDFF?text=${name.charAt(0).toUpperCase() + name.slice(1)}`;

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
            <AnimatedHeading text="Integrations: Your Central Hub for a Connected Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Our platform doesn't replace your favorite tools—it enhances them. We believe in an open, connected ecosystem, allowing you to seamlessly integrate our data and intelligence into your existing workflows.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Enhance, Don't Replace" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>You've invested time and resources into your technology stack. Our philosophy is to maximize that investment.</span>
                  <br/>
                  <span>Flow Networks acts as the powerful data-gathering and intelligence layer for your venue. We then feed that unique, on-premise data into the systems you already use and trust, making them even more powerful and context-aware.</span>
                </p>
              </div>
              <div>
                <Image src="https://placehold.co/800x600.png" alt="An abstract visualization of the Flow Networks logo acting as a central hub, connecting to various third-party app logos." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A central, glowing Flow Networks logo. Lines of light radiate outwards, connecting to a constellation of familiar logos like Salesforce, HubSpot, Mailchimp, and Oracle. The image should convey that Flow is the central connector in a larger ecosystem." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Connect with the Tools You Already Love" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationCategories.map((category) => (
                <GlassCard key={category.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><category.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground mb-6">{category.description}</p>
                    <div className="flex flex-wrap gap-4 items-center">
                      {category.logos.map(logo => (
                        <Image key={logo} src={logoPath(logo)} alt={`${logo} logo`} width={100} height={35} className="opacity-70" />
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><Puzzle className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Custom APIs for Limitless Possibilities" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Don't see your platform listed? Our robust and well-documented API allows for custom integrations with virtually any system. Our professional services team can help you design and build the perfect connection for your unique needs.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/solutions/ai-integrations">Explore Custom Integrations <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Unify Your Tech Stack?"
          description="Break down the data silos in your venue. Let's connect your systems into a single, intelligent platform that works smarter, not harder."
          ctaText="Discuss Your Integration Needs"
          ctaLink="/contact?subject=IntegrationNeeds"
        />
      </div>
    </div>
  );
};

export default IntegrationsPage;