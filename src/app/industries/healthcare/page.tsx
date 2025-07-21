'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, ShieldCheck, Compass, Send, Users } from 'lucide-react';
import Image from 'next/image';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const HealthcarePage: NextPage = () => {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'healthcare');

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
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Healthcare</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="A Connected, Calmer Healthcare Environment" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Hospital and clinic visits can be stressful. Reliable, easy-to-access information and communication are essential for reducing anxiety for patients and their families.</span>
                  <br/>
                  <span>Our platform provides a secure and stable digital foundation for the modern healthcare facility. We enable seamless connectivity for guests while providing powerful tools for staff communication and facility navigation, creating a calmer, more efficient, and patient-centric experience.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/healthcare-hero.jpg" alt="A calm and modern hospital waiting area where a visitor is using a tablet to navigate the facility." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint={industry.imageHint} />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for Patient-Centric Care" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
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
              <div className="mb-4 inline-block"><Users className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Security and Compliance First" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                We understand the critical importance of data privacy in healthcare. Our platform is built with POPIA and HIPAA compliance in mind, featuring network isolation to keep guest traffic separate from sensitive patient data, and robust content filtering to ensure a safe browsing experience for all.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/secure-access">Explore Secure Access</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Enhance Your Facility?"
          description="Create a more connected, efficient, and patient-friendly environment. Contact our healthcare connectivity specialists to learn how we can help."
          ctaText={industry.cta}
          ctaLink="/contact?subject=HealthcareSolution"
        />
      </div>
    </div>
  );
};

export default HealthcarePage;