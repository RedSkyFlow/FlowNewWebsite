'client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, TrainFront, Wifi, ShieldCheck, Megaphone, BarChart3 } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const transportFeatures = [
    { 
      icon: Wifi, 
      title: 'Reliable On-the-Go Connectivity', 
      description: 'Provide passengers with a stable and reliable internet connection throughout their journey, turning travel time into productive or entertaining time.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Certified Safe & Secure', 
      description: 'Ensure a safe browsing experience for all passengers with Friendly WiFi certified content filtering, a critical feature for public and family-oriented transport.' 
    },
    { 
      icon: Megaphone, 
      title: 'Passenger Communication Channel', 
      description: 'Use the captive portal to deliver real-time service alerts, next-stop information, and promotional messages from your transport authority or brand partners.' 
    },
];

const PublicTransportPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/industries" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Public Transport</p>
            <AnimatedHeading text="Connecting the Journey, Enhancing the Experience" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="More Than Just a Ride" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>For the modern commuter, the journey is part of the day. Onboard WiFi is no longer a perk; it's an expectation. Providing a fast, reliable, and safe connection is key to improving passenger satisfaction and encouraging public transport use.</span>
                  <br/>
                  <span>Our solutions are engineered for the unique challenges of mobile environments. We provide the robust hardware and intelligent software needed to deliver a consistent connection, creating a better journey for your passengers and a smarter network for your operations.</span>
                </p>
              </div>
              <div>
                <Image src="/images/industries/transport-hero.jpg" alt="A passenger on a modern train using a laptop, seamlessly connected to onboard WiFi." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A clean, modern train or bus interior. A passenger is comfortably seated and working on a laptop. Outside the window, the scenery is slightly blurred to indicate motion. A subtle, glowing WiFi symbol is overlaid inside the carriage, symbolizing the connected environment." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for a Smarter Fleet" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportFeatures.map((feature) => (
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
              <AnimatedHeading text="Operational Intelligence On the Move" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our platform does more than connect passengers. It provides valuable operational data. Understand passenger counts on specific routes, identify peak travel times, and measure engagement with onboard messaging to optimize your service and communication strategies.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Passenger Analytics</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Upgrade Your Passenger Experience?"
          description="Deliver the reliable, safe, and value-added connectivity that modern commuters expect. Contact our transport specialists to design a solution for your fleet."
          ctaText="Consult with a Transport Expert"
          ctaLink="/contact?subject=TransportSolution"
        />
      </div>
    </div>
  );
};

export default PublicTransportPage;