'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BuildingIcon, Wifi, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const officeFeatures = [
    { 
      icon: Wifi, 
      title: 'Secure Corporate & Guest Networks', 
      description: 'Deploy a robust, high-performance network for your staff, completely isolated from a seamless and secure WiFi network for your visitors and clients.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Enterprise-Grade Security', 
      description: 'Protect your sensitive corporate data with advanced security protocols, content filtering for staff, and compliant data handling for guest access.' 
    },
    { 
      icon: BarChart3, 
      title: 'Workspace Utilization Analytics', 
      description: 'In the age of hybrid work, understand how your office space is truly being used. Use location intelligence to identify popular zones, optimize desk layouts, and make informed real estate decisions.' 
    },
];

const OfficesPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Offices & Corporate</p>
            <AnimatedHeading text="Designing the Smart & Secure Modern Workplace" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Intelligent Heart of Your Office" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>The modern office is a dynamic hub for collaboration, innovation, and productivity. Its digital infrastructure must be equally dynamic, providing flawless connectivity for employees and a seamless, professional welcome for guests.</span>
                  <br/>
                  <span>Our platform delivers this dual promise. We provide the secure, high-performance network your team relies on, while simultaneously powering a sophisticated guest experience and delivering the data you need to optimize your physical workspace.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/offices-hero.jpg" alt="A modern, open-plan office with employees collaborating and a visitor connecting to guest WiFi." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A bright, stylish, and modern corporate office. In the foreground, a visitor in a reception area is easily connecting to guest WiFi on their phone. In the background, employees are working and collaborating, suggesting a productive environment. The mood is professional, secure, and technologically advanced." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for a Productive Workplace" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><Users className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Data-Driven Real Estate Decisions" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                In a hybrid work model, understanding how your office is used is critical for cost management. Our Location Intelligence provides anonymized data on which desks, meeting rooms, and collaborative spaces are most popular, allowing you to optimize your floor plan and make smarter, data-backed decisions about your real estate footprint.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Workspace Analytics</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Build a Smarter Workplace?"
          description="Enhance security, empower your employees, and optimize your office space with an integrated network solution. Contact us for a corporate consultation."
          ctaText="Consult with a Workplace Expert"
          ctaLink="/contact?subject=OfficeSolution"
        />
      </div>
    </div>
  );
};

export default OfficesPage;