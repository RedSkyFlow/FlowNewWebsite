'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, DatabaseZap, Megaphone, BarChart, Wrench, Briefcase, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const IntelligentWifiPage: NextPage = () => {
  const plans = [
    { icon: Wifi, title: 'Connect: The Foundation', description: 'Provide a frictionless, secure, and fully branded WiFi experience over your existing infrastructure. This free tier ensures enterprise-grade performance and full compliance with data privacy laws.' },
    { icon: DatabaseZap, title: 'Capture: The Intelligence Engine', description: 'Turn your WiFi into a powerful data source. Capture rich, opt-in first-party data through customizable splash pages, seamlessly integrating with your CRM to build detailed customer profiles.' },
    { icon: Megaphone, title: 'Engage: The Personalization Suite', description: 'Leverage captured data to deliver hyper-personalized messages, targeted promotions, and real-time surveys. Drive loyalty, increase spend, and enhance your reputation with advanced automation.' }
  ];

  const businessOutcomes = [
    { icon: BarChart, title: 'For the CMO: Unlock Customer Insights', description: 'Go beyond simple demographics. Understand footfall, dwell times, and visit frequency. Integrate rich, first-party data directly into your CRM to build powerful segments and prove marketing ROI.' },
    { icon: Wrench, title: 'For the COO: Streamline Venue Operations', description: 'Reduce IT overhead with a hardware-agnostic, cloud-managed platform. Gain insights to optimize staffing, layout, and resource allocation based on real-world visitor behavior.' },
    { icon: Briefcase, title: 'For the CFO: Create New Revenue Streams', description: 'Transform WiFi from a cost center into a profit center. Leverage paid access tiers, sponsored portals, and data-driven marketing to directly increase visitor spend and loyalty.' }
  ];

  return (
    <div className="bg-background text-foreground relative isolate">
      <ParticleBackground className="absolute inset-0 -z-10" />

      <div className="relative z-10">
        {/* --- Hero Section --- */}
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Powered by Purple.ai</p>
            <AnimatedHeading text="Intelligent WiFi: More Than Connectivity. It's Your Venue's Central Nervous System." as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Our enterprise-grade WiFi platform transforms your physical space into an intelligent ecosystem, providing the essential foundation for capturing data, engaging visitors, and unlocking the future of AI-driven services.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* --- The Three Pillars Section --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="From Simple Access to Full Engagement" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground">Our tiered plans are designed to grow with your business, providing a clear path from providing compliant, secure WiFi to leveraging it as a powerful marketing and intelligence tool.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <GlassCard key={plan.title} className="text-center p-8 flex flex-col">
                    <CardHeader>
                      <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4`}>
                        <Icon className={`w-8 h-8 text-primary`} />
                      </div>
                      <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{plan.description}</p>
                    </CardContent>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- How It Works Section --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="How It Works: A Simple Path to Intelligence" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground">We make turning your venue into an intelligent space straightforward for any business owner.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="https://placehold.co/800x800.png" alt="Diagram showing the flow of WiFi data capture and engagement" width={800} height={800} className="rounded-lg" data-ai-hint="A clean, modern infographic with 3 steps: 1. A person connects to WiFi via a phone. 2. Their data (anonymized icon) goes to a secure cloud. 3. A marketing message is sent back to the phone. Use brand colors." />
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visitor Connects</h3>
                    <p className="text-muted-foreground">A guest connects to your free, secure WiFi using a simple, branded splash page on their device.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data is Securely Captured</h3>
                    <p className="text-muted-foreground">With full consent, valuable first-party data like name, email, and visit frequency is captured and added to your secure CRM.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Engage with Intelligence</h3>
                    <p className="text-muted-foreground">Use this data to trigger automated marketing, send targeted offers, or understand how people move through your space to improve operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- The Business Impact Section --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="What This Means For Your Business" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground">Our platform delivers tangible outcomes that align with the core objectives of every key stakeholder.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {businessOutcomes.map(outcome => {
                const Icon = outcome.icon;
                return (
                  <div key={outcome.title} className="group">
                    <Card className="perspex-card border-none p-8 text-center flex flex-col h-full">
                      <CardHeader>
                        <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <CardTitle className="text-2xl">{outcome.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{outcome.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- Technical Deep-Dive Section --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedHeading text="For the Experts: Technical Specifications" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground">A robust, secure, and flexible platform designed for enterprise demands.</p>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold">Key Platform Features</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Hardware-Agnostic: Overlays on your existing network infrastructure (Cisco Meraki, Aruba, Ruckus & more).</li>
                            <li>99.9% Uptime SLA: Enterprise-grade reliability for mission-critical operations.</li>
                            <li>Scalable Cloud Architecture: From a single location to thousands, the platform scales effortlessly.</li>
                            <li>Advanced Location Analytics: Utilizes WiFi, vBLE, and other sensors for precise indoor location data.</li>
                            <li>Multi-Language Support: Captive portals and communications available in over 25 languages.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold">Security & Compliance</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Data Privacy Compliance: Fully compliant with GDPR, CCPA, and POPIA by design.</li>
                            <li>Secure Authentication: Supports a range of methods including social logins, forms, and Passpoint (SecurePass).</li>
                            <li>Content Filtering: Optional 'Purple Shield' for CIPA-compliant, family-friendly web access.</li>
                            <li>Robust Data Encryption both in transit and at rest.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl font-semibold">Integration Capabilities</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground mb-4">With over 400 pre-built connectors and a robust API, we can integrate with virtually any system in your existing tech stack, including:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>**CRM Platforms:** Salesforce, HubSpot, Microsoft Dynamics, and more.</li>
                            <li>**Marketing Automation:** Mailchimp, ActiveCampaign, and other leading platforms.</li>
                            <li>**Hospitality Systems:** Integration with major Property Management Systems (PMS).</li>
                            <li>**Social & Review Platforms:** TripAdvisor, Facebook, Twitter, etc.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- The AI Gateway Vision Section --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 group">
            <Card className="perspex-card border-none p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4"><Rocket className="w-10 h-10 text-accent" /></div>
                <AnimatedHeading text="The Fuel for Your AI-Powered Future" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                  The data captured by our Intelligent WiFi platform is the essential fuel for the Flow AI Gateway. Every connection and data point builds the foundation for the next generation of hyper-local, AI-driven services that will anticipate, interact, and adapt in real-time.
                </p>
                <EnhancedButton asChild variant="outline" size="lg" glow>
                  <Link href="/ai-gateway">Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- Final CTA Section --- */}
        <CallToActionSection title="Ready to Build Your Intelligent WiFi Foundation?" description="Partner with Flow Networks to transform your WiFi from a cost center into an intelligent asset. Contact our experts today for a personalized consultation and let's engineer your success." ctaText="Request a Consultation" ctaLink="/contact?subject=IntelligentWiFiConsultation" />
      </div>
    </div>
  );
};

export default IntelligentWifiPage;
