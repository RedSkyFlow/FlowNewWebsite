'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Puzzle, Lightbulb, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const AIIntegrationsPage: NextPage = () => {
  const ourProcess = [
    { 
      step: '01', 
      title: 'Discovery & Strategy', 
      description: 'We begin by deeply understanding your business objectives, existing technology stack, and the unique challenges of your venue to define a clear AI roadmap.' 
    },
    { 
      step: '02', 
      title: 'Architecture & Design', 
      description: 'Our systems architects design a robust, scalable, and secure integration plan that connects your disparate systems into a unified, intelligent ecosystem.' 
    },
    { 
      step: '03', 
      title: 'Development & Deployment', 
      description: 'We develop custom AI agents, APIs, and data pipelines to bring the vision to life, ensuring seamless communication between platforms like your PMS, POS, and CRM.' 
    },
     { 
      step: '04', 
      title: 'Optimization & Support', 
      description: 'Our partnership doesn\'t end at launch. We provide ongoing support and data-driven optimization to ensure your AI ecosystem evolves and continues to deliver maximum value.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
            <AnimatedHeading text="AI Integration: The Bridge Between Your Vision & Reality" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Your venue is filled with powerful but disconnected systems. Our expert integration services connect these data silos, creating a unified, intelligent ecosystem powered by the Flow AI Gateway.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Siloed Data to Systemic Intelligence" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Your POS knows what customers buy. Your PMS knows who they are. Your WiFi knows where they are. Separately, these are useful data points. Together, they are a revolutionary source of intelligence.</span>
                  <br/>
                  <span>The challenge is making them talk to each other. Our AI Integration service is the solution. We are the architects who build the digital nervous system that allows your entire venue to think, react, and personalize experiences as a single, cohesive entity.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/airport aI Gateway.png" alt="An abstract 3D visualization of different system icons (POS, PMS, CRM, WiFi) connecting to a central AI brain." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A sophisticated, dark-themed 3D graphic. In the center is a glowing brain or processor icon labeled 'AI Gateway'. From this central hub, lines of light extend outwards to connect with floating, glass-like icons representing 'POS', 'PMS', 'CRM', 'WiFi', and 'Access Control'. The image should convey connectivity and intelligence." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Four-Step Integration Process" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">We follow a proven, collaborative methodology to ensure every integration is a strategic success.</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-border/50 hidden lg:block -translate-y-12"></div>
              {ourProcess.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.15 }} className="relative z-10">
                  <GlassCard className="text-center h-full">
                    <CardHeader>
                      <div className="text-5xl font-extrabold text-primary mb-4">{step.step}</div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-sm text-muted-foreground">{step.description}</p></CardContent>
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
              <AnimatedHeading text="The Foundation of the AI Gateway" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Effective integration is the prerequisite for true artificial intelligence. By connecting your data sources, we create the rich, contextual foundation our AI Gateway needs to perform predictive analytics, automate complex workflows, and deliver the hyper-personalized services of the future.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/solutions/ai-gateway">Explore the AI Gateway Vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Connect Your Systems?"
          description="Unlock the exponential value hidden in your disconnected data. Contact our integration architects to discuss how we can build a unified intelligent ecosystem for your venue."
          ctaText="Book an Integration Consultation"
          ctaLink="/contact?subject=AIIntegrationConsultation"
        />
      </div>
    </div>
  );
};

export default AIIntegrationsPage;