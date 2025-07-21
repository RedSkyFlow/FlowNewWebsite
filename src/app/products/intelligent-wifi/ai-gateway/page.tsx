'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Wifi, UserCheck, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const AIGatewayTechnicalPage: NextPage = () => {
  const architecturalPillars = [
    { 
      icon: Wifi, 
      title: 'The WiFi as an Authentication Layer', 
      description: 'The journey begins here. Our Intelligent WiFi platform acts as the secure "gate," verifying the physical presence of a user before any advanced services can be accessed. This is the core of our security model.' 
    },
    { 
      icon: Link2, 
      title: 'The Integration Fabric', 
      description: 'The Gateway is designed to be the central hub. It uses robust APIs to ingest data from all your other systems—POS, PMS, CRM, Access Control—creating a single, unified view of your venue\'s activity.' 
    },
    { 
      icon: BrainCircuit, 
      title: 'The Central Intelligence Core', 
      description: 'This is the brain. A flexible, cloud-hosted or on-premise engine where data is processed, patterns are identified, and decisions are made. It\'s where bespoke AI agents will live and operate.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/intelligent-wifi" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Intelligent WiFi
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Intelligent WiFi Cluster Page</p>
            <AnimatedHeading text="The AI Gateway: Technical Architecture" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Explore the foundational architecture that makes the sentient venue possible. Our Intelligent WiFi is not just a network; it's the essential first layer of a future-proof AI ecosystem.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Building a Digital Nervous System" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>True AI requires more than just an algorithm; it requires a constant flow of high-quality, contextual data. The AI Gateway is our architectural answer to this challenge.</span>
                  <br/>
                  <span>It's a strategic framework designed to act as your venue's digital nervous system. The Intelligent WiFi provides the "senses" (presence), the Integration Fabric provides the "nerve pathways" (data flow), and the Central Core provides the "brain" (processing and decision-making).</span>
                </p>
              </div>
              <div>
                <Image src="https://placehold.co/800x600.png" alt="A technical diagram showing the AI Gateway architecture." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, dark-themed architectural diagram. A central box labeled 'AI Gateway Core'. On the left, an arrow from a 'WiFi Authentication Layer' icon points to the core. Other arrows from 'POS Data', 'PMS Data', and 'CRM Data' also point to the core. On the right, arrows point out from the core to icons representing 'Personalized Offers', 'Operational Alerts', and 'AI Concierge'." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Three Pillars of the Gateway" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {architecturalPillars.map((pillar) => (
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
              <div className="mb-4 inline-block"><UserCheck className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Foundation is Already Here" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The full power of the AI Gateway is our forward-looking vision, but the essential foundation is available today. By implementing our Intelligent WiFi and integrating your key data sources, you are building the infrastructure that will power the next generation of AI-driven experiences.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/solutions/ai-integrations">Start Your Integration Strategy</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Build for the Future?"
          description="The journey to a sentient venue starts with a single, strategic step. Let's discuss how our current platform provides the perfect foundation for your long-term AI ambitions."
          ctaText="Discuss Your AI Roadmap"
          ctaLink="/contact?subject=AIGatewayRoadmap"
        />
      </div>
    </div>
  );
};

export default AIGatewayTechnicalPage;