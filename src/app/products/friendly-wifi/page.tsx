'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Building2, Rocket } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import ShimmeringHaze from '@/components/shared/ShimmeringHaze';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import { motion } from 'framer-motion';

const FriendlyWiFiPage: NextPage = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Enhance Brand Reputation',
      description: 'Visibly demonstrate your commitment to online safety and social responsibility, building trust with customers, especially families.'
    },
    {
      icon: HeartHandshake,
      title: 'Attract Target Demographics',
      description: 'Become a preferred destination for families, schools, and organizations who actively seek out safe and filtered public WiFi environments.'
    },
    {
      icon: Award,
      title: 'Meet Compliance Standards',
      description: 'Align with global best practices and support your internal safeguarding, ESG, and DEI policies with a government-initiated, independent certification.'
    },
    {
      icon: Building2,
      title: 'Protect All Users',
      description: 'Ensure your network actively blocks access to inappropriate and harmful content, providing peace of mind for guests, employees, and their families.'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/friendly-wifi-logo.png" // Placeholder for the actual Friendly WiFi logo
              alt="Friendly WiFi Approved Partner Logo"
              width={200}
              height={100}
              className="object-contain"
              data-ai-hint="The official Friendly WiFi logo with the 'Approved Partner' text"
            />
          </motion.div>
          <AnimatedHeading
            text="Certified Safe WiFi for Your Venue"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation
          />
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            As the exclusive Approved Partner in South Africa, Flow Networks delivers the global standard in safe, filtered public WiFi, protecting your users and enhancing your brand's reputation.
          </p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Benefits Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedHeading
              text="The Value of Trust & Safety"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-4"
            />
            <p className="text-lg text-muted-foreground">
              Friendly WiFi certification is more than a feature; it's a powerful statement about your commitment to providing a safe and responsible digital environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, i) => (
              <GlassCard key={i} className="text-center" glowColor="primary">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- How It Works Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading text="A Simple Path to Certification" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-muted-foreground mb-4">Our solution is seamless. By adding Purple's 'Shield' content filtering to your Intelligent WiFi plan, your venue automatically qualifies for Friendly WiFi certification. Flow Networks, as the exclusive local partner, handles the entire process for you.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary font-bold mr-3 shrink-0">1</span>
                  <span>**Choose Your Plan:** Select an Intelligent WiFi plan and include the Purple Shield add-on.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary font-bold mr-3 shrink-0">2</span>
                  <span>**We Handle the Rest:** We ensure your network filtering meets the global Friendly WiFi standard.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary font-bold mr-3 shrink-0">3</span>
                  <span>**Display Your Badge:** Receive your 'Friendly WiFi Approved' symbol and showcase your commitment to online safety.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedBorder variant="highlight" color="primary">
                <Image 
                  src="https://placehold.co/800x600.png" 
                  alt="A diagram showing the three steps to Friendly WiFi certification" 
                  width={800} 
                  height={600}
                  className="rounded-lg object-cover"
                  data-ai-hint="a clean infographic showing a WiFi symbol with a shield, leading to a certificate, leading to a happy family in a cafe"
                />
              </AnimatedBorder>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready to Become a Certified Safe Venue?"
        description="Join leading brands in South Africa and globally by providing a secure, filtered WiFi experience. Contact us today to learn how easily you can add Friendly WiFi certification to your Flow Networks solution."
        ctaText="Get Certified Today"
        ctaLink="/contact?subject=FriendlyWiFi"
      />
    </div>
  );
};

export default FriendlyWiFiPage;