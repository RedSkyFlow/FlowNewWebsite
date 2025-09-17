'client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Bot, Wifi, UserCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const AIGatewayPage: NextPage = () => {
  const coreConcepts = [
    { 
      icon: Wifi, 
      title: 'Physical Presence Verification', 
      description: 'The core principle. The venue\'s WiFi acts as a secure authentication layer, guaranteeing that a user is physically on-site before granting access to curated AI services.' 
    },
    { 
      icon: Lock, 
      title: 'Secure, Gated Access', 
      description: 'Instead of open access, the Gateway creates a secure "digital perimeter" around your venue. You control exactly which AI tools and data are available to on-premise users.' 
    },
    { 
      icon: Bot, 
      title: 'Venue-Specific AI Agents', 
      description: 'Deploy bespoke AI agents trained on your venue\'s specific data. Imagine an AI concierge for your hotel or an AI shopping assistant for your retail space, available only to those present.' 
    },
     { 
      icon: UserCheck, 
      title: 'Hyper-Personalized Experiences', 
      description: 'By combining real-time presence with data from your other systems (POS, PMS, CRM), the Gateway can enable truly context-aware, predictive, and personalized interactions.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Our Innovation Roadmap</p>
            <AnimatedHeading text="The Flow AI Gateway: The Sentient Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              This is our vision for the future. A world where physical venues are no longer passive spaces, but intelligent, adaptive ecosystems that can perceive, understand, and interact with their inhabitants in real-time.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="What if Your Venue Could Think?" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Today, your systems collect data. Tomorrow, they will collaborate. The Flow AI Gateway is the central nervous system designed to make this possible.</span>
                  <br/>
                  <span>It's a revolutionary architecture that securely integrates all your on-premise data streams—WiFi presence, transactions, access control—and makes that collective intelligence available to a new generation of bespoke AI agents, accessible exclusively to your on-site guests.</span>
                </p>
              </div>
              <div>
                <Image src="https://placehold.co/800x600.png" alt="A futuristic 3D visualization of a brain or neural network, with the Flow Networks logo at its core, representing the AI Gateway." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A stunning, high-fidelity 3D render of a glowing, intricate neural network or brain structure. The Flow Networks logo should be subtly integrated into the central processing core. Lines of light (data) should be flowing into the core from all directions. The aesthetic is sophisticated, intelligent, and visionary." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Core Concepts" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Our vision is built on four powerful, interconnected principles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreConcepts.map((concept, i) => (
                <motion.div key={concept.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard>
                    <CardHeader>
                      <div className="mb-4 inline-block"><concept.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{concept.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{concept.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BrainCircuit className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Building the Future, Today" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The AI Gateway is our north star, and every solution we offer today is a foundational building block. Our Intelligent WiFi, Allxs commerce engine, and integration services are the essential components that are already creating the data-rich environments where the sentient venues of tomorrow will thrive.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/contact?subject=AIGatewayRoadmap">Discuss Our Innovation Roadmap</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Join the Future?"
          description="While the full AI Gateway is on our near-term horizon, the foundational work begins now. Partner with us to build the intelligent infrastructure your venue needs to be a leader in the next generation of guest experiences."
          ctaText="Become an Innovation Partner"
          ctaLink="/contact?subject=InnovationPartner"
        />
      </div>
    </div>
  );
};

export default AIGatewayPage;