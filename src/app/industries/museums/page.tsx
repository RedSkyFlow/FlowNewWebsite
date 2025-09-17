'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Landmark, Wifi, Map, Volume2, Users } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const museumFeatures = [
    { 
      icon: Wifi, 
      title: 'Reliable Visitor & Research WiFi', 
      description: 'Provide seamless connectivity for guests to share their experience and for researchers or staff to access digital archives and resources.' 
    },
    { 
      icon: Map, 
      title: 'Interactive Exhibit Guides', 
      description: 'Use our digital wayfinding to create interactive maps that guide visitors through your galleries and provide rich, multimedia content for specific exhibits.' 
    },
    { 
      icon: Volume2, 
      title: 'Enhanced Accessibility', 
      description: 'Deliver digital audio guides, translated content, and accessible routes directly to a visitor\'s own device, making your institution welcoming to all.' 
    },
];

const MuseumsPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Museums & Galleries</p>
            <AnimatedHeading text="Bringing Stories to Life with Digital Layers" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Engaging the Modern Museum-Goer" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Museums are guardians of history and culture, tasked with engaging a new generation of digitally native visitors. The modern museum experience must be immersive, interactive, and accessible.</span>
                  <br/>
                  <span>Our platform provides the digital canvas for this new experience. We enable you to layer rich, interactive digital content onto your physical exhibits, creating a more engaging and personalized journey for every visitor while gathering insights to better understand your audience.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/museums-hero.jpg" alt="A visitor in a museum using their phone to view an augmented reality overlay on an ancient artifact." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A person in a thoughtfully lit museum gallery is holding their smartphone up to a classical statue. On the phone screen, an augmented reality layer is visible, showing historical information and 3D reconstructions related to the statue. The mood is one of discovery and technological enhancement of history." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for Cultural Enrichment" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {museumFeatures.map((feature) => (
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
              <AnimatedHeading text="Understand Your Visitor Demographics" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our WiFi marketing and analytics tools provide invaluable, anonymized insights into your visitor demographics. Understand who is visiting, when they come, and which exhibits are most popular. This data is crucial for tailoring future exhibitions, securing funding, and growing your membership base.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/wifi-marketing">Explore Visitor Analytics</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Create a More Immersive Museum?"
          description="Enrich your exhibits, improve accessibility, and gain a deeper understanding of your audience. Contact us to explore how digital solutions can amplify your cultural mission."
          ctaText="Consult with a Curation Expert"
          ctaLink="/contact?subject=MuseumSolution"
        />
      </div>
    </div>
  );
};

export default MuseumsPage;