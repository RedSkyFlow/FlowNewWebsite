'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, MailCheck, MessageSquare, Repeat, Link2, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const EngagePage: NextPage = () => {
  const engagementExamples = [
    { icon: MailCheck, title: 'Automated Welcome Journeys', description: 'Trigger a personalized welcome email or SMS the moment a new guest connects, delivering a special offer or useful information.' },
    { icon: MessageSquare, title: 'Post-Visit Feedback Surveys', description: 'Automatically send a thank-you message with a survey link 24 hours after a visit to gather valuable feedback and manage your online reputation.' },
    { icon: Repeat, title: 'Lapsed Visitor Re-Engagement', description: 'Identify loyal customers who haven\'t visited in a while and automatically send a targeted "we miss you" offer to encourage a return trip.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi: The Engage Layer</p>
            <AnimatedHeading text="From Data to Dialogue, At Scale" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Activate your first-party data with powerful automation tools. Start relevant, personalized conversations that build loyalty, drive repeat business, and deliver measurable ROI.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The End of Generic Marketing" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Your customers are tired of irrelevant ads. Engagement born from a real-world visit is different. It's an expected, welcome continuation of their positive experience with your brand.</span>
                  <br/>
                  <span>We provide the bridge between their physical visit and your digital conversation, enabling you to deliver the right message, at the right time, through the right channel.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/Engage - personalised marketing.jpg" alt="An animation showing a customer's phone receiving a personalized 'Thank You' offer after leaving a store." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A customer's hand holding a smartphone. On the screen is a push notification that says 'Thanks for visiting The Coffee House! Here's 15% off your next visit.' The background is a softly blurred image of the coffee shop's interior." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Automated Engagement in Action" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementExamples.map((item) => (
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
              <div className="mb-4 inline-block"><Link2 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Powered by Seamless Integration" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our platform integrates directly with industry-leading marketing automation tools like Everlytic. This allows you to build sophisticated, multi-channel journeys that leverage the full power of your on-premise data across Email, SMS, and WhatsApp.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/everlytic">Explore Our Everlytic Integration <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Activate Your Audience?"
          description="Transform your data into dialogue and your visitors into loyal advocates. Let's design an engagement strategy that delivers real, measurable results."
          ctaText="Plan Your Engagement Strategy"
          ctaLink="/contact?subject=EngagementStrategy"
        />
      </div>
    </div>
  );
};

export default EngagePage;