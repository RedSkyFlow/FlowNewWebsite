'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, DatabaseZap, MailCheck, BarChart3, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const WiFiMarketingPage: NextPage = () => {
  const coreFeatures = [
    { 
      icon: Palette, 
      title: 'Beautifully Branded Captive Portals', 
      description: 'Make a stunning first impression. Customize your WiFi login page with your brand\'s logo, colors, and imagery for a seamless and professional welcome.' 
    },
    { 
      icon: DatabaseZap, 
      title: 'Ethical First-Party Data Capture', 
      description: 'Turn anonymous guests into known customers. Collect valuable, consent-based data like names, emails, and social profiles through a variety of login options.' 
    },
    { 
      icon: MailCheck, 
      title: 'Automated Engagement & Journeys', 
      description: 'Connect your captured data directly to marketing platforms like Everlytic to trigger automated welcome emails, personalized offers, and targeted re-engagement campaigns.' 
    },
  ];

  const businessOutcomes = [
    { icon: Users, title: 'Build Your Own Audience', description: 'Stop renting audiences from Big Tech. Create a direct, high-value communication channel with customers who have physically visited your venue.' },
    { icon: BarChart3, title: 'Measure In-Venue Marketing ROI', description: 'Track campaign effectiveness by linking digital offers to real-world visits. Understand which promotions drive repeat traffic and increase loyalty.' },
    { icon: MessageSquare, title: 'Start a Relevant Conversation', description: 'Engage customers with timely, personalized messages they actually want, based on the trust and context established during their visit.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        {/* --- 1. Hero Section --- */}
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi Cluster Page</p>
            <AnimatedHeading text="WiFi Marketing: Turn Every Connection into a Conversation" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Your guest WiFi is your most powerful, untapped marketing channel. Transform a simple login into your number one tool for building a loyal, engaged, and profitable customer community.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* --- 2. The Process Visualized --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Journey from Visitor to Advocate" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Dashed lines connecting the steps */}
              <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-border/50 hidden md:block -translate-y-12"></div>
              
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <GlassCard>
                  <CardHeader><div className="text-5xl font-extrabold text-primary mb-2">1</div><CardTitle>Connect</CardTitle></CardHeader>
                  <CardContent><p className="font-body text-sm text-muted-foreground">Guest connects to your free, secure WiFi via a beautifully branded, mobile-friendly portal.</p></CardContent>
                </GlassCard>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <GlassCard>
                  <CardHeader><div className="text-5xl font-extrabold text-primary mb-2">2</div><CardTitle>Capture</CardTitle></CardHeader>
                  <CardContent><p className="font-body text-sm text-muted-foreground">With full consent, valuable first-party data is captured and securely added to your CRM or marketing platform.</p></CardContent>
                </GlassCard>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <GlassCard>
                  <CardHeader><div className="text-5xl font-extrabold text-primary mb-2">3</div><CardTitle>Converse</CardTitle></CardHeader>
                  <CardContent><p className="font-body text-sm text-muted-foreground">Trigger automated welcome emails, loyalty offers, and feedback surveys to start a meaningful, long-term conversation.</p></CardContent>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 3. Core Features --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="The Marketer's Toolkit" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreFeatures.map((feature, i) => (
                <Card key={feature.title} className="perspex-card p-6">
                  <CardHeader>
                    <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-accent" /></div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 4. Business Outcomes (The "Why") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="From Digital Noise to Authentic Engagement" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">This isn't about more marketing. It's about better marketing, built on the foundation of trust and physical presence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessOutcomes.map((outcome, i) => (
                <GlassCard key={outcome.title}>
                  <CardHeader><outcome.icon className="w-8 h-8 text-primary mb-2" /><CardTitle>{outcome.title}</CardTitle></CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{outcome.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 5. Integration Advantage (The "Synergy") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center">
              <div className="mb-4 inline-block"><Link2 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Perfect Partner for Everlytic" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our WiFi Marketing engine is the ultimate data source for your multi-channel communication strategy. Seamlessly pipe your consent-based contacts and their preferences directly into the Everlytic platform to create powerful, automated journeys across Email, SMS, and WhatsApp.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/everlytic">Explore Everlytic Integration <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 6. Final CTA Section --- */}
        <CallToActionSection 
          title="Ready to Build Your Customer Community?" 
          description="Stop letting valuable customer relationships walk out the door. Let us show you how to turn your guest WiFi into your most powerful marketing asset." 
          ctaText="Plan Your WiFi Marketing Strategy" 
          ctaLink="/contact?subject=WiFiMarketingStrategy" 
        />
      </div>
    </div>
  );
};

export default WiFiMarketingPage;