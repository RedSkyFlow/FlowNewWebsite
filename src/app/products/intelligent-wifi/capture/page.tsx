'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, DatabaseZap, Users, ShieldCheck, Gift, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';import { MessageSquare } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const CapturePage: NextPage = () => {
  const dataTypes = [
    { icon: Users, title: 'Demographic Profiles', description: 'Collect essential contact information like names and emails, along with rich demographic data from social logins.' },
    { icon: BarChart3, title: 'Behavioral Insights', description: 'Understand visit frequency, dwell times, and peak hours to build a clear picture of guest behavior and loyalty.' },
    { icon: Gift, title: 'Zero-Party Data', description: 'Go beyond analytics. Use post-login surveys to ask guests directly about their preferences, interests, and the purpose of their visit.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi: The Capture Layer</p>
            <AnimatedHeading text="Turn Anonymous Visitors Into Your Known Audience" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Ethically build a high-value, first-party data asset from the only people who matter: your verified, on-premise guests.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Stewardship of Trust" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Your customer's data is a gift, loaned to you in exchange for a better experience. Unlike third-party platforms that harvest data without consent, our system is built on a foundation of trust and transparency.</span>
                  <br/>
                  <span>We provide the tools to be responsible stewards of this data, ensuring every piece of information is collected with full consent and used to deliver genuine value back to your customers.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/Capture plan.jpg" alt="An infographic showing data flowing from a guest's phone, through a shield icon representing consent, into a secure database with the venue's brand." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, abstract visual. A smartphone on the left. A glowing line travels from it, passes through a large, semi-transparent shield icon (with a checkmark inside), and connects to a database icon on the right that has the venue's logo on it. This visually represents secure, consent-based data transfer." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="From Presence to Profile" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Our platform allows you to build rich, multi-dimensional customer profiles over time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataTypes.map((item) => (
                <GlassCard key={item.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><item.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{item.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><MessageSquare className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Fuel for a Real Conversation" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Capturing data is only the beginning. This rich, consent-based information is the essential fuel required to move from generic broadcasting to personalized, meaningful engagement.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi/engage">Next Step: Explore Engagement <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Build Your Most Valuable Asset?"
          description="Stop letting your most valuable data walk out the door. Start building a direct, consent-based relationship with your on-premise customers today."
          ctaText="Discuss Your Data Strategy"
          ctaLink="/contact?subject=DataStrategy"
        />
      </div>
    </div>
  );
};

export default CapturePage;