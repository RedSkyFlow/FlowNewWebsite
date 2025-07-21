'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ConciergeBell, Wifi, ClipboardList, Megaphone, Star } from 'lucide-react';
import Image from 'next/image';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const HospitalityPage: NextPage = () => {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'hospitality');

  if (!industry) return null;

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Hospitality</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From a Simple Meal to a Memorable Experience" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>In the competitive hospitality industry, success is measured in loyalty and positive reviews. A seamless digital experience is no longer a luxury—it's a core ingredient of great service.</span>
                  <br/>
                  <span>Our platform provides the tools to enhance every step of the customer journey, from offering reliable guest WiFi to enabling digital ordering and building a powerful marketing list to encourage repeat visits.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/hospitality-hero.jpg" alt="A vibrant, modern restaurant where customers are using QR codes to view menus and order." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint={industry.imageHint} />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for Modern Hospitality" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.features.map((feature) => (
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
              <div className="mb-4 inline-block"><Star className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Turn Great Service into 5-Star Reviews" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Leverage our WiFi Marketing and Surveys add-on to automatically follow up with diners after their visit. Encourage happy customers to leave reviews on platforms like Google and TripAdvisor, and privately handle any negative feedback to improve your service.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/add-ons/surveys">Explore the Surveys Add-On</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Enhance Your Hospitality?"
          description="From faster service to smarter marketing, let's build a digital experience that keeps your customers coming back. Contact us for a free consultation."
          ctaText={industry.cta}
          ctaLink="/contact?subject=HospitalitySolution"
        />
      </div>
    </div>
  );
};

export default HospitalityPage;