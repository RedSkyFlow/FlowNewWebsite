'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, DatabaseZap, Megaphone, Lock, ShieldCheck, ClipboardList, DollarSign, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancediPhone } from '@/components/shared/EnhancedIPhone'; // Assuming this component exists
import { guestPortalContent, analyticsContent } from '@/lib/mock-content'; // Assuming mock content for iPhone screens

const IntelligentWifiPage: NextPage = () => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading
            text="Intelligent WiFi Infrastructure"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <motion.p 
            className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            More than just connectivity. Our enterprise-grade WiFi, powered by Purple.ai's world-class platform, is the secure and compliant foundation for capturing data, engaging visitors, and unlocking the full potential of your physical space.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <EnhancedButton asChild variant="primary" size="lg" glow>
              <Link href="/contact?subject=IntelligentWiFiDemo">
                Request a Demo
              </Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="secondary" size="lg" glow>
              <Link href="/products/intelligent-wifi#plans">
                View Plans
              </Link>
            </EnhancedButton>
          </motion.div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Core Pillars Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Connect Card */}
            <GlassCard className="text-center" glowColor="primary">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Wifi className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Provide a frictionless, secure, and fully branded WiFi experience over your existing infrastructure, ensuring enterprise-grade performance and 99.9% uptime.</p>
              </CardContent>
            </GlassCard>
            {/* Capture Card */}
            <GlassCard className="text-center" glowColor="primary">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <DatabaseZap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Turn your WiFi into your most valuable data source. Capture rich, opt-in user data through customizable splash pages, fully compliant with POPIA and GDPR.</p>
              </CardContent>
            </GlassCard>
            {/* Engage Card */}
            <GlassCard className="text-center" glowColor="primary">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Megaphone className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Engage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Leverage captured data to deliver hyper-personalized messages, targeted promotions, and real-time surveys. Drive loyalty, increase spend, and enhance your reputation.</p>
              </CardContent>
            </GlassCard>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Features Deep Dive Section --- */}
      <ScrollAnimatedSection as="section" id="plans" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="A Feature-Rich Platform for Unmatched Control"
            as="h2"
            className="text-3xl sm:text-4xl text-center font-bold mb-12"
            wordAnimation
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: 'SecurePass & Authentication', description: 'Enable seamless, automatic, and secure WiFi connections for returning visitors using app-based authentication and Passpoint technology.' },
              { icon: ShieldCheck, title: 'Purple Shield Content Filtering', description: 'Ensure a safe, family-friendly browsing environment by blocking inappropriate content and online threats. Bundled with Friendly WiFi certification.' },
              { icon: ClipboardList, title: 'Real-Time Visitor Surveys', description: 'Gather immediate, in-venue feedback with highly effective surveys, boasting an average 92% response rate.' },
              { icon: DollarSign, title: 'Paid WiFi & Monetisation', description: 'Generate new revenue streams by offering premium, high-speed access tiers and sponsored login experiences.' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <GlassCard className="p-6 text-left" glowColor="accent">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- The AI Gateway Vision Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedAccentBorder variant="prominent" color="accent">
            <div className="p-8 md:p-12 text-center">
              <AnimatedHeading
                text="The Foundation for True Venue Intelligence"
                as="h2"
                className="text-3xl sm:text-4xl font-bold mb-4"
              />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                Our Intelligent WiFi Infrastructure does more than connect your guests—it creates the data-rich foundation for the future of your venue. Every connection, every piece of data, and every interaction prepares your space for the next generation of hyper-local services. This is the first step towards activating the **Flow AI Gateway**, where your venue doesn't just provide access, it anticipates, interacts, and adapts in real-time.
              </p>
              <EnhancedButton asChild variant="tertiary" size="lg">
                <Link href="/solutions/ai-gateway">
                  Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
            </div>
          </AnimatedAccentBorder>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready to Build Your Intelligent WiFi Foundation?"
        description="Partner with Flow Networks to transform your WiFi from a cost center into an intelligent asset. Contact our experts today for a personalized consultation and let's engineer your success."
        ctaText="Request a Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default IntelligentWifiPage;