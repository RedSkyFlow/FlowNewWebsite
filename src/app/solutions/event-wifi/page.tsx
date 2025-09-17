'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, Users, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const EventWiFiPage: NextPage = () => {
  const corePillars = [
    { 
      icon: Zap, 
      title: 'High-Density Performance', 
      description: 'Our network architects design and deploy solutions engineered to handle thousands of concurrent connections, ensuring a fast and reliable experience for every attendee, speaker, and staff member.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Rock-Solid Reliability', 
      description: 'From live streams and point-of-sale systems to audience interaction apps, we provide the mission-critical backbone your event depends on. We guarantee uptime when it matters most.' 
    },
    { 
      icon: Users, 
      title: 'Attendee Engagement & Analytics', 
      description: 'Turn your network into an engagement tool. Use our captive portals to share schedules, sponsor messages, and capture valuable attendee data to measure event ROI.' 
    },
  ];

  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/industries/Event WiFi (2).png"
          alt="A vibrant outdoor festival at night, showcasing a large-scale event."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
            <AnimatedHeading text="Event WiFi: Flawless Connectivity for Unforgettable Experiences" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p 
              className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-white/80 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From international conferences and music festivals to corporate summits, we deliver the mission-critical, high-density WiFi that powers modern events.
            </motion.p>
        </div>
      </section>

      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                  <AnimatedHeading text="The One Thing You Can't Afford to Fail" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                  <p className="text-lg text-muted-foreground font-body space-y-4">
                    <span>In today's hyper-connected world, your event's success hinges on its digital backbone. A failed network means failed payment systems, silent social media, and frustrated attendees.</span>
                    <br/>
                    <span>We see event WiFi not as a convenience, but as a core utility—as essential as power and lighting. Our expert team specializes in designing and deploying robust, temporary networks for the most demanding environments, ensuring your event runs flawlessly.</span>
                  </p>
                </div>
                <div>
                  <Image src="/images/products/Event WiFi (2).png" alt="A dashboard showing live analytics for an event network." width={800} height={600} className="rounded-lg shadow-l4" />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Commitment to Your Event's Success" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePillars.map((pillar, i) => (
                <motion.div key={pillar.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className={cn("flex flex-col h-full", glowClasses[i % glowClasses.length])}>
                    <CardHeader>
                      <div className="mb-4 inline-block"><pillar.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{pillar.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Beyond Connectivity: Event Intelligence" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our event solutions integrate seamlessly with our Location Intelligence and Allxs platforms. Understand attendee flow with heatmaps to reduce congestion, and power a fully cashless environment with RFID/NFC technology for ticketing, access control, and payments.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Location Intelligence</Link>
                </EnhancedButton>
                <EnhancedButton asChild variant="outline">
                  <Link href="/products/allxs">Explore Allxs for Events</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Planning an Event? Let's Talk Network."
          description="Don't leave your event's digital success to chance. Contact our high-density network specialists today for a consultation and ensure your connectivity is as memorable as your event."
          ctaText="Get an Event WiFi Quote"
          ctaLink="/contact?subject=EventWiFiQuote"
        />
      </div>
    </div>
  );
};

export default EventWiFiPage;