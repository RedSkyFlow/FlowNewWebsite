'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, FerrisWheel, Wifi, Map, MessageSquare, Ticket } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const attractionFeatures = [
    { 
      icon: Wifi, 
      title: 'Venue-Wide Guest WiFi', 
      description: 'Provide robust, high-capacity WiFi across your entire park or attraction, enabling guests to share their experiences on social media and engage with your digital platforms.' 
    },
    { 
      icon: Map, 
      title: 'Interactive Digital Wayfinding', 
      description: 'Help guests navigate large, complex spaces with ease. Our interactive maps can show real-time queue lengths, show times, and points of interest.' 
    },
    { 
      icon: MessageSquare, 
      title: 'Contextual Notifications', 
      description: 'Use location intelligence to send hyper-relevant push notifications to guests, such as a special offer for a nearby food stall or a reminder about an upcoming show.' 
    },
];

const AttractionsPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Attractions</p>
            <AnimatedHeading text="Creating Magical & Modern Visitor Experiences" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Infusing Digital Magic into Physical Fun" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>A great attraction creates lasting memories. In the digital age, this means creating a seamless experience that blends the physical wonders of your venue with the digital convenience guests have come to expect.</span>
                  <br/>
                  <span>Our platform provides the invisible layer of technology that makes this magic happen. From helping a family find their next ride to enabling a frictionless cashless purchase, we provide the tools to reduce friction and amplify the fun.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/attractions-hero.jpg" alt="A family at a theme park using a smartphone to navigate the park with an interactive map." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A bright, sunny, and vibrant shot of a family looking at a smartphone together in a theme park. The phone screen shows a colorful, cartoonish interactive map of the park. The background is slightly blurred but shows a rollercoaster or other iconic ride. The mood is happy, adventurous, and tech-assisted." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions to Amplify the Experience" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {attractionFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><Ticket className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="A Unified Commerce Ecosystem" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Integrate our solutions with the Allxs platform to create a fully cashless attraction. From ticketing and entry to food and merchandise, a single RFID wristband or mobile app can power the entire visitor journey, dramatically increasing in-park spending and operational efficiency.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/allxs/event-management">Explore Allxs for Attractions</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Create a Smarter Attraction?"
          description="From reducing queue times to increasing guest spend, let's build a digital layer that makes your visitor experience unforgettable. Contact us for a free consultation."
          ctaText="Consult with an Attractions Expert"
          ctaLink="/contact?subject=AttractionsSolution"
        />
      </div>
    </div>
  );
};

export default AttractionsPage;