'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Ticket, UserCheck, BarChartBig, Tv2, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const EventManagementPage: NextPage = () => {
  const platformFeatures = [
    { 
      icon: Ticket, 
      title: 'Digital Ticketing & Registration', 
      description: 'Create, sell, and manage tickets for any event, from simple entry passes to complex multi-day credentials, all distributed via secure QR codes or RFID.' 
    },
    { 
      icon: UserCheck, 
      title: 'Seamless Access Control', 
      description: 'Eliminate queues and fraud with high-speed RFID/NFC or QR code scanning for event entry, VIP areas, and restricted zones.' 
    },
    { 
      icon: Wallet, 
      title: 'Integrated Cashless Vending', 
      description: 'Power all on-site commerce—from food stalls to merchandise—with our unified cashless system, providing a frictionless experience for attendees and vendors.' 
    },
     { 
      icon: BarChartBig, 
      title: 'Live Analytics & Reporting', 
      description: 'Monitor your event in real-time. Track attendance, see which vendors are performing best, and understand attendee flow to make instant, data-driven decisions.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/allxs" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Allxs
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Allxs Platform Deep Dive</p>
            <AnimatedHeading text="Event Management: The Command Center for Your Experience" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              From music festivals to corporate expos, our dedicated event platform (Allxsvip.com) unifies ticketing, access, payments, and analytics into a single, powerful command center.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Chaos to Control" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Managing a large-scale event involves juggling dozens of disconnected systems—for ticketing, entry, vendor payments, and more. This creates operational chaos and leaves you blind to what's really happening on the ground.</span>
                  <br/>
                  <span>Our platform brings order to this chaos. By unifying every key function, we give you a single, real-time view of your entire event ecosystem. You gain complete control and the intelligence to create a flawless, memorable experience for everyone involved.</span>
                </p>
              </div>
              <div>
                <Image src="/images/allxs-event-hero.jpg" alt="An event manager looking at a tablet displaying a live dashboard of event analytics." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="An event manager stands backstage or in a control room, looking at a large tablet. The screen shows a live dashboard with 'Attendees Checked-In', 'Real-Time Sales by Vendor', and a heatmap of the event floor. The background is a busy but well-organized festival or conference." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Your All-in-One Event Toolkit" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature) => (
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
              <div className="mb-4 inline-block"><Tv2 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Powered by the Allxsvip.com Web App" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The entire experience is powered by a dedicated, industry-leading event web application. This provides a central hub for attendees to manage their tickets and funds, and for vendors and organizers to track performance, all in real-time from any device.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Orchestrate Your Next Event?"
          description="Elevate your event with a unified platform that delivers control, intelligence, and a world-class attendee experience. Contact us to learn how Allxs can power your next success."
          ctaText="Plan Your Event Solution"
          ctaLink="/contact?subject=EventSolution"
        />
      </div>
    </div>
  );
};

export default EventManagementPage;