'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Ticket, ShoppingCart, BarChart3, Users, Rocket, ShieldCheck } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';

const AllxsPage: NextPage = () => {
  const features = [
    {
      icon: Ticket,
      title: 'Cashless Payments & POS',
      description: 'A unified, cloud-based system for all on-site transactions, from tickets to merchandise, supporting closed-loop cards, biometrics, and QR codes.'
    },
    {
      icon: ShoppingCart,
      title: 'Integrated E-commerce',
      description: 'Launch online and mobile stores for event merchandise, school uniforms, or textbooks, all linked to a central inventory and POS system.'
    },
    {
      icon: BarChart3,
      title: 'Live Data & Analytics',
      description: 'Gain real-time business intelligence with detailed transaction logs and actionable insights into attendee spending behavior and patterns.'
    },
    {
      icon: Users,
      title: 'Rewards & Engagement',
      description: 'Foster loyalty and drive promotions with integrated rewards management, tracking special offers, voucher redemptions, and performance.'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-impact/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading
            text="Allxs: The Integrated Event & Venue Commerce Platform"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            Streamline transactions, enhance operational efficiency, and drive user engagement with a unified cashless payment and experience management solution, powerfully integrated by Flow Networks.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Features Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="One Platform for Complete Venue Control"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              From cashless payments and POS to ticketing and loyalty, Allxs provides a comprehensive suite of tools to manage your entire venue ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, i) => (
              <GlassCard key={i} className="text-center" glowColor="accent">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
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

      {/* --- Use Case Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading text="Proven Success in Education & Events" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-muted-foreground mb-4">Allxs is trusted by leading schools and major events to reduce costs, increase revenue, and simplify operations. Our clients report up to a 40% reduction in cash handling costs and a 70% decrease in transaction times.</p>
              <p className="text-muted-foreground">Flow Networks leverages this powerful platform, integrating it into a broader intelligent venue strategy to maximize its impact.</p>
              <div className="mt-8">
                <EnhancedButton asChild variant="tertiary" size="lg">
                  <Link href="/resources/case-studies">
                    View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </EnhancedButton>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedBorder variant="highlight" color="secondary">
                <Image 
                  src="https://placehold.co/800x600.png" 
                  alt="Students using a cashless payment system in a school canteen" 
                  width={800} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="students using a cashless payment system in a modern school cafeteria"
                />
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- The AI Gateway Vision Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedAccentBorder variant="prominent" color="secondary">
            <div className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="w-10 h-10 text-secondary" />
              </div>
              <AnimatedHeading
                text="Supercharge Your Transactions with AI"
                as="h2"
                className="text-3xl sm:text-4xl font-bold mb-4"
              />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                The Flow AI Gateway elevates the Allxs platform from a transactional tool to an intelligent engagement engine. By authenticating users via WiFi, we can trigger personalized upsell offers, loyalty rewards, and contextual alerts based on a visitor's real-time location and behavior, creating a truly smart commerce experience.
              </p>
              <EnhancedButton asChild variant="outline" size="lg" glow>
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
        title="Ready to Create a Seamless Cashless Ecosystem?"
        description="Integrate a world-class payment and event management platform into your venue. Contact Flow Networks to discover how we can tailor a solution for you."
        ctaText="Plan Your Event Solution"
        ctaLink="/contact?subject=AllxsSolution"
      />
    </div>
  );
};

export default AllxsPage;