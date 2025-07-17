'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, MailCheck, MessageSquare, Bot, BarChart3, Rocket, Users, CheckCircle } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';
import AnimatedBorder from '@/components/shared/AnimatedBorder';

const EverlyticPage: NextPage = () => {
  const features = [
    {
      icon: MailCheck,
      title: 'Email Marketing',
      description: 'Design and deliver impactful, personalized email campaigns with a drag-and-drop builder, dynamic content, and world-class deliverability.'
    },
    {
      icon: MessageSquare,
      title: 'SMS & Push Notifications',
      description: 'Reach customers instantly with time-sensitive messages. Achieve over 90% open rates for flash sales, reminders, and critical updates.'
    },
    {
      icon: Bot,
      title: 'WhatsApp & AI Studio',
      description: 'Engage customers with interactive conversational flows, automated lead nurturing, and abandoned cart recovery directly through WhatsApp.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Automation & Analytics',
      description: 'Build intelligent workflows triggered by user behavior. Track every interaction with real-time insights, heatmaps, and A/B testing.'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-secondary/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading
            text="Everlytic: Multi-Channel Communication, Perfected"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            Connect with your audience on their preferred channels with South Africa's leading marketing automation platform. Flow Networks integrates Everlytic to deliver your message with precision and context.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Features Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="Reach Every Customer, Everywhere"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              From email and SMS to WhatsApp and push notifications, Everlytic provides a single, powerful platform to manage your entire communication strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, i) => (
              <GlassCard key={i} className="text-center" glowColor="secondary">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Use Case Section: The Flow Networks Advantage --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading text="From Data to Action: The AI Gateway Integration" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-muted-foreground mb-4">Everlytic is the engine for communication; our AI Gateway is the intelligence that provides the trigger. We connect real-time venue analytics from your physical space directly to Everlytic's automation workflows.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                  <span>Trigger a welcome SMS via Everlytic the moment a guest connects to your WiFi.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                  <span>Send a personalized "We Miss You" email if a loyal customer hasn't visited in 30 days.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                  <span>Deliver a targeted WhatsApp promotion when a shopper dwells near a specific product category.</span>
                </li>
              </ul>
              <div className="mt-8">
                <EnhancedButton asChild variant="tertiary" size="lg">
                  <Link href="/solutions/integrations">
                    Explore Our Integrations <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </EnhancedButton>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedBorder variant="highlight" color="secondary">
                <Image 
                  src="https://placehold.co/800x600.png" 
                  alt="A diagram showing data flowing from WiFi analytics into the Everlytic messaging platform" 
                  width={800} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="futuristic data visualization showing wifi signals transforming into marketing messages on a phone"
                />
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready to Supercharge Your Customer Communication?"
        description="Combine the power of a leading marketing automation platform with Flow Networks' venue intelligence. Contact us to learn how we can build a truly responsive engagement strategy for your business."
        ctaText="Discuss Your Strategy"
        ctaLink="/contact?subject=EverlyticIntegration"
      />
    </div>
  );
};

export default EverlyticPage;