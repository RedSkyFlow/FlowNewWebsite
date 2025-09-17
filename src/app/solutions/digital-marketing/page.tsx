'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Megaphone, Target, MailCheck, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const DigitalMarketingPage: NextPage = () => {
  const ourServices = [
    { 
      icon: Target, 
      title: 'Audience Segmentation & Strategy', 
      description: 'We analyze your on-premise data to identify high-value customer segments—like VIPs, first-time visitors, and lapsed customers—and build a targeted communication strategy for each.' 
    },
    { 
      icon: MailCheck, 
      title: 'Managed Email & SMS Campaigns', 
      description: 'Our team designs, writes, and executes compelling campaigns using platforms like Everlytic. From monthly newsletters to automated birthday offers, we handle it all.' 
    },
    { 
      icon: BarChart3, 
      title: 'Performance Reporting & Optimization', 
      description: 'We provide clear, concise monthly reports that show you exactly what\'s working. We track open rates, click-throughs, and, most importantly, the impact on repeat visits and revenue.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
            <AnimatedHeading text="Digital Marketing: From Insights to Income" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              You have the data. We have the expertise. Our managed digital marketing services are designed to activate the rich, first-party data from your venue to drive loyalty and revenue.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Your Unfair Advantage" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Generic digital marketing is a guessing game. Agencies spend your budget trying to find customers on crowded social platforms. Our approach is different.</span>
                  <br/>
                  <span>We start with your most powerful asset: a list of customers who have already visited your venue and consented to hear from you. This isn't cold outreach; it's a warm conversation. We leverage this "unfair advantage" to deliver marketing with unparalleled relevance and ROI.</span>
                </p>
              </div>
              <div>
                <Image src="/images/solutions/personalised engagement3.jpg" alt="An infographic showing a direct, clean line from a venue icon to a customer icon, contrasted with a messy, tangled web of lines representing social media marketing." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A split-screen visual. On the left, a clean graphic showing a building icon with a straight, glowing line connecting to a group of user icons, labeled 'Direct Engagement'. On the right, a chaotic mess of tangled lines connecting dozens of social media icons, labeled 'Digital Noise'." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Managed Marketing Services" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ourServices.map((service) => (
                <GlassCard key={service.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><service.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{service.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><Users className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="An Extension of Your Team" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Think of us as your dedicated data-driven marketing department. We handle the strategy, execution, and reporting, freeing you up to do what you do best: run your business. Our goal is to become a seamless, integrated partner in your growth.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/contact?subject=MarketingServicesInquiry">Talk to a Marketing Strategist</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Activate Your Data?"
          description="Let our team of experts turn your on-premise customer data into your most powerful and profitable marketing channel. Contact us for a free consultation."
          ctaText="Get a Free Marketing Consultation"
          ctaLink="/contact?subject=MarketingConsultation"
        />
      </div>
    </div>
  );
};

export default DigitalMarketingPage;