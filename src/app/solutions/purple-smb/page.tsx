
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, Users, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const SMB_Page: NextPage = () => {
  const smbSolutions = [
    { icon: Wifi, title: 'Provide Free, Secure Guest WiFi', description: 'Offer the reliable, fast, and secure WiFi your customers expect, with a professional branded login that makes your business look great.' },
    { icon: Users, title: 'Automatically Build a Customer List', description: 'Effortlessly collect customer emails and contact info with every login, creating a powerful marketing asset you own and control.' },
    { icon: Star, title: 'Improve Your Online Reputation', description: 'Automatically send post-visit emails asking happy customers for reviews on Google, TripAdvisor, or Facebook to boost your ratings.' },
    { icon: TrendingUp, title: 'Drive Repeat Business', description: 'Use your new customer list to send simple, effective marketing emails—like weekly specials or birthday offers—that keep customers coming back.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Solutions for Growth</p>
            <AnimatedHeading text="The All-in-One Smart WiFi Toolkit for Your Business" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Give your small business the enterprise-grade tools it needs to grow. Our affordable, easy-to-use solution turns your guest WiFi into your best marketing employee.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Stop Guessing. Start Growing." as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>As a business owner, you wear many hats. Marketing shouldn't be a constant struggle. Our Smart WiFi solution works for you in the background, automatically turning casual visitors into a loyal customer base.</span>
                  <br/>
                  <span>It's the simplest way to understand your visitors, build a direct line of communication, and drive the repeat business that is the lifeblood of any successful small business.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/SMB WiFi31.jpg" alt="A small business owner smiling while looking at customer engagement analytics on a tablet." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="small business owner analytics" />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Four Problems, One Simple Solution" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smbSolutions.map((item) => (
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
              <div className="mb-4 inline-block"><TrendingUp className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Affordable Plans for Any Budget" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our platform is designed to scale with you. Start with our powerful free "Connect" plan to provide professional, secure WiFi, and upgrade to our "Capture" plan when you're ready to unlock the full suite of marketing and analytics tools.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi#plans">See Plans & Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Put Your WiFi to Work?"
          description="Give your business the competitive edge it deserves. Our team can get you set up with a Smart WiFi solution in no time. "
          ctaText="Get Started for Free"
          ctaLink="/contact?subject=SMB_Free_WiFi"
        />
      </div>
    </div>
  );
};

export default SMB_Page;
