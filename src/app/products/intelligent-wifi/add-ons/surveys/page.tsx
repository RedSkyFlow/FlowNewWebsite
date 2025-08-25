'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Star, TrendingUp, CheckCircle, Smile, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const SurveysPage: NextPage = () => {
  const keyFeatures = [
    { 
      icon: CheckCircle, 
      title: 'Customizable Questionnaires', 
      description: 'Build surveys that ask the right questions. Use a variety of formats, from simple star ratings and Net Promoter Score (NPS) to multiple-choice and open-ended questions.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Intelligent Triggers & Timing', 
      description: 'Don\'t just ask—ask at the right moment. Trigger surveys to be sent via email or SMS immediately after a guest disconnects from WiFi, or schedule them for the next day.' 
    },
    { 
      icon: Star, 
      title: 'Automated Reputation Management', 
      description: 'Create powerful workflows. Automatically invite guests who leave positive feedback to post a review on Google or TripAdvisor, while privately addressing any negative feedback.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/intelligent-wifi/add-ons" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Add-Ons
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Intelligent WiFi Add-On</p>
            <AnimatedHeading text="Surveys: Capture the Voice of Your Customer" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Go beyond analytics and ask your guests directly. Our Surveys add-on transforms your WiFi into a powerful, real-time feedback channel to improve service, manage your reputation, and build loyalty.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Silent Visit to Actionable Insight" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Most guest feedback is lost the moment they walk out the door. Online reviews often only capture the extreme highs and lows, leaving you blind to the true, nuanced customer experience.</span>
                  <br/>
                  <span>Our Surveys add-on bridges this gap. By triggering a feedback request at the peak of relevance—right after their visit—you capture honest, in-the-moment insights that are impossible to get anywhere else.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/Survey-add-on-image.jpg" alt="A customer's phone showing a clean, simple survey interface asking 'How was your visit?' with a 5-star rating system." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A hand holding a smartphone. The screen displays a beautifully designed, branded survey. The question 'How likely are you to recommend us?' is visible with an NPS scale (0-10). The background is a softly blurred image of a hotel lobby or restaurant." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="A Toolkit for Understanding" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFeatures.map((feature) => (
                <GlassCard key={feature.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><ThumbsUp className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Turn Feedback into Your Best Marketing" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our most powerful feature is the ability to create intelligent workflows. A 5-star review can automatically trigger an email asking the guest to share their experience on Google. A 2-star review can instantly create a private support ticket for your manager to address. This is proactive reputation management, automated.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Listen at Scale?"
          description="Stop guessing what your customers think. Start asking. Implement our Surveys add-on to gather the insights you need to build a better business and a stellar online reputation."
          ctaText="Explore Survey Features"
          ctaLink="/contact?subject=SurveysAddOn"
        />
      </div>
    </div>
  );
};

export default SurveysPage;