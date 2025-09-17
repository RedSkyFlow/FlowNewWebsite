'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
// CORRECTED: Added missing icons
import { ArrowRight, Wifi, Tv2, UserCheck, ConciergeBell } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const hotelFeatures = [
    { 
      icon: Wifi, 
      title: 'Premium Guest WiFi & Connectivity', 
      description: 'Deliver fast, reliable, and secure WiFi with a branded login experience. Offer tiered access for power users and integrate with your PMS for seamless authentication.' 
    },
    { 
      icon: Tv2, 
      title: 'Enhanced In-Room Experience', 
      description: 'Partner with CNNTAP to provide guests with a premium, curated content experience on their own devices, reinforcing your hotel\'s commitment to quality.' 
    },
    { 
      icon: ConciergeBell, 
      title: 'Personalized Guest Engagement', 
      description: 'Leverage captured data to send personalized welcome messages, targeted offers for your spa or restaurant, and post-stay feedback surveys to build lasting loyalty.' 
    },
];


const HotelsPage: NextPage = () => {

  const featureGlowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/products/securepass-add-on-arriving.jpg"
          alt="A luxury hotel lobby with a welcoming ambiance."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Link href="/industries" className="text-sm font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Hotels & Resorts</p>
            <AnimatedHeading text="Designing the Ultimate Guest Stay" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        </div>
      </section>
      
      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                  <AnimatedHeading text="The Digital Dimension of Hospitality" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                  <p className="text-lg text-muted-foreground font-body space-y-4">
                    <span>Today's traveler expects more than a comfortable bed; they expect a seamless digital experience that mirrors the quality of your physical property. From the moment they connect to WiFi, their digital journey begins.</span>
                    <br/>
                    <span>Our integrated suite of solutions empowers you to control and perfect this journey. We provide the tools to offer flawless connectivity, personalized engagement, and premium content, turning your hotel's digital infrastructure into a powerful driver of guest satisfaction and loyalty.</span>
                  </p>
                </div>
                <div>
                  <Image src="/images/products/Hotel concierge.png" alt="A guest using a hotel concierge app on a tablet." width={800} height={600} className="rounded-lg shadow-l4" />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for 5-Star Digital Service" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hotelFeatures.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className={cn("flex flex-col h-full", featureGlowClasses[i % featureGlowClasses.length])}>
                    <CardHeader>
                      <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><UserCheck className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Seamless PMS Integration" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our platform is designed to integrate directly with your existing Property Management System (PMS). This allows for automatic guest authentication against their room number and last name, enabling a truly seamless connection experience and providing the foundation for personalized, room-specific billing and services.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/solutions/3rd-party-integrations">Explore Integrations</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Perfect Your Guest's Digital Journey?"
          description="Elevate your hotel from a place to stay to an experience to remember. Contact our hospitality specialists to design an integrated digital solution."
          ctaText="Consult with a Hospitality Expert"
          ctaLink="/contact?subject=HotelSolution"
        />
      </div>
    </div>
  );
};

export default HotelsPage;
