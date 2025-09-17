'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, MailCheck, MessageSquare, Zap, Users, BarChart3, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const EverlyticPage: NextPage = () => {
  const keyCapabilities = [
    { 
      icon: MailCheck, 
      title: 'Multi-Channel Messaging', 
      description: 'Engage your audience on their preferred channel. Build and send beautiful campaigns across Email, SMS, WhatsApp, and Push Notifications from a single platform.',
    },
    { 
      icon: Zap, 
      title: 'Intelligent Automation', 
      description: 'Create sophisticated, trigger-based customer journeys. From welcome sequences to re-engagement campaigns, nurture your audience with automated, personalized communication.',
    },
    { 
      icon: Users, 
      title: 'Advanced Segmentation', 
      description: 'Go beyond a simple mailing list. Segment your audience based on demographics, purchase history, and on-premise behavior to deliver hyper-relevant messages.',
    },
    { 
      icon: Bot, 
      title: 'WhatsApp AI Studio', 
      description: 'Leverage AI-powered conversational flows on WhatsApp to automate lead nurturing, recover abandoned carts, and provide instant customer support.',
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Integrated Platform</p>
            <AnimatedHeading text="Everlytic: The Communication Engine for Your Venue Community" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Turn your data into dialogue. Our integrated marketing automation platform allows you to build lasting relationships with your on-premise audience through personalized, multi-channel communication at scale.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Anonymous Visitor to Loyal Advocate" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Data without action is just a number. The true power of the on-premise data you collect is its ability to start a meaningful conversation.</span>
                  <br/>
                  <span>Everlytic is the bridge between insight and income. It's the tool that activates your audience, transforming a one-time visitor into a loyal, repeat customer by delivering relevant, valuable communication that honors the trust they've placed in your brand.</span>
                </p>
              </div>
              <div>
                <Image src="/images/everlytic-hero.jpg" alt="An infographic showing a customer journey from connecting to WiFi to receiving a personalized email offer." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, visual flowchart. It starts with a WiFi icon ('Connect & Capture'). An arrow leads to a segmentation icon (multiple user profiles). Arrows then lead from the segments to different device screens (a phone showing an SMS, a laptop showing an email), each with a personalized message. The theme is data-driven personalization." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="A Unified Platform for Modern Marketing" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyCapabilities.map((capability, i) => (
                <motion.div key={capability.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4 inline-block"><capability.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-body text-muted-foreground">{capability.description}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Fueled by Your Unfair Advantage" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The Everlytic platform becomes exponentially more powerful when fueled by the high-quality, consent-based, first-party data from your Intelligent WiFi. While others market to cold lists, you'll be engaging a warm audience of verified, on-premise visitors. This is your unfair advantage.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/capture">Explore Data Capture <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Start the Conversation?"
          description="Transform your marketing from broadcasting to relationship-building. Let us show you how the Everlytic platform can activate your audience and drive measurable growth."
          ctaText="Plan Your Communication Strategy"
          ctaLink="/contact?subject=EverlyticStrategy"
        />
      </div>
    </div>
  );
};

export default EverlyticPage;