'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Wrench, Layers, Rocket, BarChart, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import ShimmeringHaze from '@/components/shared/ShimmeringHaze';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InternetConnectivityPage: NextPage = () => {
  const features = [
    { icon: Zap, title: 'Business-Grade Fibre', description: 'High-speed, low-latency fibre internet, delivered in partnership with leading providers, ensuring maximum performance for your venue.' },
    { icon: ShieldCheck, title: 'LTE & 5G Failover', description: 'Guarantee 99.9% uptime with seamless, automatic failover to high-speed wireless connections, ensuring your operations are always online.' },
    { icon: Wrench, title: 'Fully Managed Solution', description: 'We handle the setup, proactive monitoring, and management of your network, providing a single point of contact for all your connectivity needs.' },
    { icon: Layers, title: 'Scalable Bandwidth', description: 'From a small cafe to a high-density stadium, our solutions are designed to scale with your needs, ensuring a flawless experience for any number of users.' }
  ];
  
  const businessOutcomes = [
    { icon: Wrench, title: 'For the COO: Unbreakable Operations', description: 'Ensure 99.9% uptime for all critical systems, from POS to security cameras. Our managed service and proactive monitoring reduce reliance on your internal IT team, minimizing operational friction.' },
    { icon: Briefcase, title: 'For the CFO: A Predictable, Scalable Asset', description: 'Invest in a foundational asset with clear SLAs and predictable costs. Our scalable solutions ensure you only pay for the bandwidth you need, preventing over-provisioning while being ready for future growth.' },
    { icon: BarChart, title: 'For the CIO/CTO: A Future-Proof Foundation', description: 'Build on a network engineered for the future. Our low-latency, high-throughput connectivity is the essential bedrock for data-intensive applications, IoT deployments, and the visionary Flow AI Gateway.' }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-secondary/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-primary/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedHeading text="Connectivity That Powers Intelligence" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-gradient-animated" wordAnimation />
          <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Your network is the central nervous system of your venue. Flow Networks delivers resilient, high-performance internet designed not just for access, but as the foundation for data analytics, guest engagement, and AI-driven services.
          </motion.p>
        </div>
      </ScrollAnimatedSection>

      {/* --- Features Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading text="Connectivity Engineered for Performance" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            <p className="text-lg text-muted-foreground">Our suite of connectivity solutions ensures your venue has a robust and resilient digital foundation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <GlassCard key={i} className="text-center p-6 flex flex-col">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Business Impact Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedHeading text="A Strategic Asset for Every Leader" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
                <p className="text-lg text-muted-foreground">Reliable connectivity is more than a utility; it's a core business enabler that delivers value across your entire organization.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {businessOutcomes.map(outcome => (
                    <div key={outcome.title} className="group">
                        <Card className="perspex-card border-none p-8 text-center flex flex-col h-full">
                            <CardHeader>
                                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                                    <outcome.icon className="w-8 h-8 text-accent" />
                                </div>
                                <CardTitle className="text-2xl">{outcome.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{outcome.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Technical Deep-Dive Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <AnimatedHeading text="For the Experts: Our Connectivity Portfolio" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
                <p className="text-lg text-muted-foreground">We provide a comprehensive suite of enterprise-grade connectivity options tailored to your specific technical and operational requirements.</p>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold">Service Offerings</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>**Dedicated Business Fibre:** Uncontended, symmetrical high-speed fibre for maximum performance and reliability.</li>
                            <li>**Broadband (FTTB/FTTH):** Cost-effective, high-speed connectivity for small to medium-sized businesses.</li>
                            <li>**Licensed Wireless:** Fibre-like performance in areas where physical fibre is unavailable, offering a stable and scalable backbone.</li>
                            <li>**Redundant Failover:** Automated 4G/LTE and 5G failover solutions to ensure business continuity for critical applications.</li>
                            <li>**Temporary & Event Connectivity:** Custom solutions designed for the high-density demands of festivals, conferences, and pop-up events.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold">Managed Services & SLA</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>**Proactive Monitoring:** 24/7/365 network monitoring to identify and resolve issues before they impact your operations.</li>
                            <li>**Service Level Agreements (SLAs):** Financially-backed guarantees for uptime and performance, providing complete peace of mind.</li>
                            <li>**Single Point of Contact:** We manage the entire lifecycle, from procurement with our ISP partners (like Coolideas & Axxess) to installation and ongoing support.</li>
                            <li>**Managed Hardware:** Optional managed routers, switches, and firewalls to ensure an optimized and secure network environment.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- The AI Gateway Vision Section --- */}
      <ScrollAnimatedSection as="section" className="relative py-16 md:py-24">
        
        {/* The ShimmeringHaze background effect */}
        <ShimmeringHaze color="accent" />

        <div className="container mx-auto px-4 md:px-6 relative group">
          {/* The Card component now directly uses the perspex-card class */}
          <Card className="perspex-card border-none p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-4"><Rocket className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Fuel for Your AI-Powered Future" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                The data captured by our Intelligent WiFi platform is the essential fuel for the Flow AI Gateway. Every connection and data point builds the foundation for the next generation of hyper-local, AI-driven services that will anticipate, interact, and adapt in real-time.
              </p>
              <EnhancedButton asChild variant="outline" size="lg" glow>
                <Link href="/solutions/ai-gateway">Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </EnhancedButton>
            </div>
          </Card>
        </div>
      </ScrollAnimatedSection>

      {/* --- Final CTA Section --- */}
      <CallToActionSection title="Ready to Build Your Venue's Digital Foundation?" description="Ensure your venue is prepared for the future of digital engagement. Contact Flow Networks for a comprehensive audit of your connectivity needs." ctaText="Request a Connectivity Audit" ctaLink="/contact?subject=ConnectivityAudit" />
    </div>
  );
};

export default InternetConnectivityPage;