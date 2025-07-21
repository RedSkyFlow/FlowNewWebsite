'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Route, BarChart3, Megaphone, DollarSign } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const mallFeatures = [
    { 
      icon: Route, 
      title: 'Shopper Journey Analytics', 
      description: 'Gain a macro-level view of your entire property. Use location intelligence to understand popular zones, common paths, and dwell times to optimize mall layout and flow.' 
    },
    { 
      icon: Megaphone, 
      title: 'Mall-Wide Marketing & Engagement', 
      description: 'Build a powerful marketing database of your shoppers. Send mall-wide promotions, event notifications, and targeted offers for specific retail categories.' 
    },
    { 
      icon: DollarSign, 
      title: 'Support Tenant Success & Drive Revenue', 
      description: 'Provide tenants with valuable footfall data to justify leasing rates. Create new revenue by offering sponsored WiFi or premium advertising on your captive portal.' 
    },
];

const ShoppingMallsPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Shopping Malls</p>
            <AnimatedHeading text="Reimagining the Retail Destination" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Landlord to Experience Curator" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>The modern shopping mall is more than a collection of stores; it's a community hub and an entertainment destination. To thrive, mall operators must curate a seamless, engaging experience for shoppers and provide tangible value to their tenants.</span>
                  <br/>
                  <span>Our platform provides the central intelligence layer to achieve this. We give you the tools to understand your shoppers as a single, cohesive audience, enabling you to optimize the physical space and create powerful, mall-wide marketing opportunities.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/malls-hero.jpg" alt="A busy, modern shopping mall interior with digital screens displaying promotions." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A bright, clean, and futuristic shopping mall atrium. Large digital screens are visible, showing mall-wide event promotions. People are walking around, and a subtle overlay shows heatmap data, indicating popular areas. The mood is vibrant, modern, and data-driven." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for Mall Management Excellence" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mallFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Data as a Service for Your Tenants" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                One of the most powerful features of our platform is the ability to provide your tenants with valuable, anonymized footfall and demographic data for the zones outside their stores. This concrete data helps them make better decisions and provides a powerful justification for their lease, reducing churn and strengthening your landlord-tenant relationships.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Location Intelligence</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Build a Smarter Mall?"
          description="Transform your property into a data-driven retail destination. Contact us to learn how our integrated solutions can boost shopper engagement and empower your tenants."
          ctaText="Consult with a Retail Destination Expert"
          ctaLink="/contact?subject=MallSolution"
        />
      </div>
    </div>
  );
};

export default ShoppingMallsPage;