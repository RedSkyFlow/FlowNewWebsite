'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChartBig, CreditCard, ShieldCheck, ShoppingCart, Ticket, Wallet, Timer, Banknote, TrendingUp, Link2, School, Drama, ConciergeBell } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const AllxsPillarPage: NextPage = () => {
  const keyFeatures = [
    { 
      icon: Wallet, 
      title: 'Unified Cashless Payments', 
      description: 'A single, cloud-based platform for all transactions, supporting closed-loop cards, biometrics, and QR codes.',
      points: ['Reduce cash handling costs', 'Speed up transaction times', 'Enable seamless guest experiences'],
      ctaLink: '/products/allxs/cashless-payments',
    },
    { 
      icon: Ticket, 
      title: 'Event & Ticketing Engine', 
      description: 'Create, manage, and track ticket sales for events and fundraisers with integrated QR/RFID for secure check-ins.',
      points: ['Streamline event access control', 'Leverage the Allxsvip.com web app', 'Gain live reporting on attendance'],
      ctaLink: '/products/allxs/event-management',
    },
    { 
      icon: BarChartBig, 
      title: 'Data & Live Analytics', 
      description: 'Leverage real-time business intelligence to understand customer spending behavior and optimize your entire operation.',
      points: ['Track sales and inventory live', 'Analyze behavioral spending patterns', 'Make informed, data-driven decisions'],
      ctaLink: '/solutions/location-intelligence',
    },
    { 
      icon: ShoppingCart, 
      title: 'Integrated E-commerce', 
      description: 'Launch online and mobile stores for merchandise, uniforms, or tickets, linked directly to your POS and inventory systems.',
      points: ['Sell products directly to your community', 'Sync online sales with on-site inventory', 'Create new, convenient revenue streams'],
      ctaLink: '/solutions/wifi-monetisation',
    },
  ];

  const successMetrics = [
    { icon: Timer, stat: '90%', label: 'Faster Cafeteria Transactions' },
    { icon: Banknote, stat: '40%', label: 'Reduction in Cash Handling Costs' },
    { icon: TrendingUp, stat: '18%', label: 'Increase in On-Site Spending' },
  ];

  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/products/cashless events.png"
          alt="A vibrant event powered by Allxs cashless technology."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Integrated Platform</p>
            <AnimatedHeading text="Allxs: The Complete Commerce & Experience Engine" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p 
              className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-white/80 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Streamline every transaction, manage access seamlessly, and unlock powerful data insights with our all-in-one, cloud-based venue management platform.
            </motion.p>
        </div>
      </section>

      <div className="relative z-10">
        {/* --- 2. Strategic Overview (The "Why") --- */}
        <ScrollAnimatedSection as="section" className="-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-xl">
                            <AnimatedHeading text="From Operational Burden to Experiential Asset" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                            <p className="text-lg text-muted-foreground font-body space-y-4">
                            <span>Managing payments, access, and events is often a fragmented and costly challenge.</span>
                            <br />
                            <span>Allxs unifies these systems into an intelligent engine designed to create frictionless guest experiences, provide deep business intelligence, and unlock new opportunities for revenue and engagement.</span>
                            </p>
                        </div>
                        <div>
                            <Image src="/images/products/Click and collect.png" alt="A seamless click-and-collect experience powered by Allxs." width={800} height={600} className="rounded-lg shadow-l4" />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimatedSection>


        {/* --- 3. Key Features In-Depth (The "What") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Core Platform Capabilities" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {keyFeatures.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full hover-glow-primary">
                    <CardHeader>
                      <div className="mb-4 inline-block bg-primary/10 p-3 rounded-full"><feature.icon className="w-7 h-7 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground font-body mb-4">{feature.description}</p>
                      <ul className="space-y-2 text-sm">
                        {feature.points.map(point => (
                          <li key={point} className="flex items-start font-body"><ShieldCheck className="w-4 h-4 mr-2 mt-1 text-accent shrink-0" /><span>{point}</span></li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                        <Link href={feature.ctaLink}>Explore This Feature <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                      </EnhancedButton>
                    </CardFooter>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 6. Success Metrics & Social Proof (The "Proof") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Quantifiable Impact" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">The Allxs platform delivers measurable improvements to your bottom line and operational efficiency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map(metric => (
                <Card key={metric.label} className="perspex-card">
                  <div className="text-center p-8">
                    <metric.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-5xl font-extrabold text-gradient-animated">{metric.stat}</p>
                    <p className="text-muted-foreground font-body mt-2">{metric.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 4. Use Cases & Verticals (The "How") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Proven in Demanding Environments" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GlassCard className={cn("h-full", glowClasses[0])}>
                    <CardHeader><School className="w-8 h-8 text-primary mb-2" /><CardTitle>Education</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">The market-leading solution for cashless schools, managing everything from fees to canteen purchases with proven efficiency gains.</p></CardContent>
                    <CardFooter><EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group"><Link href="/products/allxs/education-commerce">Explore for Schools <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link></EnhancedButton></CardFooter>
                </GlassCard>
                <GlassCard className={cn("h-full", glowClasses[1])}>
                    <CardHeader><Drama className="w-8 h-8 text-primary mb-2" /><CardTitle>Events & Festivals</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">Power major events with cashless RFID, secure access control, and live analytics to maximize revenue and attendee engagement.</p></CardContent>
                    <CardFooter><EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group"><Link href="/products/allxs/event-management">Explore for Events <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link></EnhancedButton></CardFooter>
                </GlassCard>
                <GlassCard className={cn("h-full", glowClasses[2])}>
                    <CardHeader><ConciergeBell className="w-8 h-8 text-primary mb-2" /><CardTitle>Hospitality</CardTitle></CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">Streamline transactions in hotels, restaurants, and corporate canteens with a unified, cloud-based POS and payment system.</p></CardContent>
                </GlassCard>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 5. Integration Advantage (The "Synergy") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center">
              <div className="mb-4 inline-block"><Link2 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Data Engine for Your AI Gateway" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Allxs is more than a standalone platform; it's a vital component of the Flow Networks ecosystem. Every transaction and entry scan becomes a rich, real-time data point, feeding the intelligence of our AI Gateway to enable truly predictive analytics and hyper-personalized guest services.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 7. Final CTA Section --- */}
        <CallToActionSection 
          title="Ready to Unify Your Venue's Commerce?" 
          description="Integrate payments, access, and analytics into a single, powerful platform. Contact our experts to discover how Allxs can transform your operational efficiency and guest experience." 
          ctaText="Book Your Allxs Consultation" 
          ctaLink="/contact?subject=AllxsConsultation" 
        />
      </div>
    </div>
  );
};

export default AllxsPillarPage;