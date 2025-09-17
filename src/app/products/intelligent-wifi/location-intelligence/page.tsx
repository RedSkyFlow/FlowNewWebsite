'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Users, Clock, Route, Store, ShoppingCart, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const LocationIntelligencePage: NextPage = () => {
  const coreMetrics = [
    { icon: Users, title: 'Visitor Footfall', description: 'Measure the total number of visitors, identify peak hours, and track trends over time to understand your venue\'s true traffic patterns.' },
    { icon: Clock, title: 'Dwell Times', description: 'Analyze how long visitors stay in specific zones. Identify engaging areas and spots that are underperforming.' },
    { icon: Route, title: 'Visitor Flow & Pathing', description: 'Visualize the common paths people take through your venue. Uncover traffic bottlenecks and optimize layouts for a seamless journey.' },
  ];

  const businessApplications = [
    { icon: Store, title: 'Optimize Retail Layout & Merchandising', description: 'Use heatmaps to place high-margin products in high-traffic zones. Understand shopper paths to improve product discovery and increase basket size.' },
    { icon: UserCheck, title: 'Enhance Staffing & Operations', description: 'Align staffing schedules with actual peak visitor times. Deploy personnel to high-dwell areas to improve customer service and security.' },
    { icon: ShoppingCart, title: 'Inform Tenant & Leasing Strategy', description: 'Provide potential tenants in malls or airports with concrete data on footfall and zone popularity to justify premium leasing rates.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        {/* --- 1. Hero Section --- */}
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Intelligent WiFi Cluster Page</p>
            <AnimatedHeading text="Location Intelligence: The Google Analytics for Your Physical Space" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Turn anonymous footsteps into actionable strategy. Our platform captures real-time presence data to give you an unprecedented understanding of how people interact with your physical environment.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* --- 2. The Core Metrics (The "What") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="What You Can Measure" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Our platform translates complex WiFi and sensor data into simple, powerful metrics that matter.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreMetrics.map((metric, i) => (
                <motion.div key={metric.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"><metric.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{metric.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{metric.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- 3. The Visual Dashboard --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedHeading text="Visualize Your Venue's Pulse" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto mb-12">Our intuitive dashboards bring your data to life, making complex patterns easy to understand at a glance. You can see how our intelligent WiFi can help you with location intelligence in your venue.</p>
            <Card className="perspex-card p-8">
              <Image src="/images/products/malls.png" alt="A sophisticated dashboard showing a venue heatmap, visitor flow chart, and dwell time analytics." width={1200} height={800} className="rounded-lg" data-ai-hint="A very sleek, dark-themed UI dashboard. On the left, a floor plan of a retail store with vibrant red and yellow heatmaps. On the right, a line graph showing 'Visitor Traffic by Hour' and several KPI cards for 'Avg. Dwell Time' and 'Peak Occupancy'. Use brand colors." />
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 4. Business Applications (The "Why") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="From Data to Decisions" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Location intelligence isn't just data; it's a strategic tool for driving tangible business outcomes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessApplications.map((app, i) => (
                <motion.div key={app.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard>
                    <CardHeader><app.icon className="w-8 h-8 text-accent mb-2" /><CardTitle>{app.title}</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{app.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 5. Integration Advantage (The "Synergy") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Eyes of the AI Gateway" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                The insights gathered here are the sensory input for our AI Gateway. By understanding where a guest is and how long they've been there, the AI can trigger hyper-contextual, real-time offers and services, creating a truly responsive and intelligent venue.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/ai-gateway">Explore the AI Gateway Vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 6. Final CTA Section --- */}
        <CallToActionSection 
          title="Ready to See Your Venue in a New Light?" 
          description="Stop guessing and start knowing. Let us show you how location intelligence can unlock hidden efficiencies and growth opportunities in your physical space." 
          ctaText="Request an Analytics Demo" 
          ctaLink="/contact?subject=LocationIntelligenceDemo" 
        />
      </div>
    </div>
  );
};

export default LocationIntelligencePage;