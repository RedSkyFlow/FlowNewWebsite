'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wifi, DatabaseZap, Megaphone, Lock, ShieldCheck, ClipboardList, DollarSign, Rocket, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import CallToActionSection from '@/components/sections/CallToActionSection';
import Image from 'next/image';

const IntelligentWifiPage: NextPage = () => {
  const plans = [
    {
      icon: Wifi,
      title: 'Connect: The Foundation',
      description: 'Provide a frictionless, secure, and fully branded WiFi experience over your existing infrastructure. This free tier ensures enterprise-grade performance, 99.9% uptime, and full compliance with data privacy laws like POPIA and GDPR.',
      color: 'primary'
    },
    {
      icon: DatabaseZap,
      title: 'Capture: The Intelligence Engine',
      description: 'Turn your WiFi into your most valuable data source. Capture rich, opt-in first-party data through customizable splash pages, seamlessly integrating with your CRM to build detailed customer profiles and unlock powerful analytics.',
      color: 'secondary'
    },
    {
      icon: Megaphone,
      title: 'Engage: The Personalization Suite',
      description: 'Leverage captured data to deliver hyper-personalized messages, targeted promotions, and real-time surveys. Drive loyalty, increase spend, and enhance your reputation with advanced automation and full suite integrations.',
      color: 'accent'
    }
  ];

  const addOns = [
    { icon: DollarSign, title: 'Paid WiFi & Monetisation', description: 'Generate new revenue streams by offering premium, high-speed access tiers and sponsored login experiences.' },
    { icon: ClipboardList, title: 'Real-Time Visitor Surveys', description: 'Gather immediate, in-venue feedback with highly effective surveys, boasting an average 92% response rate.' },
    { icon: ShieldCheck, title: 'Purple Shield Content Filtering', description: 'Ensure a safe, family-friendly browsing environment by blocking inappropriate content. Bundled with Friendly WiFi certification.' },
    { icon: Lock, title: 'SecurePass & Passpoint', description: 'Enable seamless, automatic, and secure WiFi connections for returning visitors using app-based authentication.' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* --- Hero Section --- */}
      <ScrollAnimatedSection as="section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Placeholder for ATMOS-DATA-FLOW-01 */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background opacity-95"></div>
            <Image 
                src="https://placehold.co/1920x1080.png" 
                alt="Abstract background visualization of data flow" 
                layout="fill" 
                objectFit="cover" 
                className="opacity-10"
                data-ai-hint="A dark, cinematic 3D render of bokeh light particles and soft light trails in brand colors (teal, blue) moving horizontally. Extremely shallow depth of field, very subtle motion. Elegant and minimal."
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="font-semibold text-accent mb-4 text-gradient-animated">Powered by Purple.ai</p>
          <AnimatedHeading
            text="Intelligent WiFi: More Than Connectivity. It's Your Venue's Central Nervous System."
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter"
            wordAnimation
          />
          <motion.p 
            className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our enterprise-grade WiFi platform transforms your physical space into an intelligent ecosystem, providing the essential foundation for capturing data, engaging visitors, and unlocking the future of AI-driven services.
          </motion.p>
        </div>
      </ScrollAnimatedSection>

      {/* --- The Three Pillars Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <GlassCard key={plan.title} className="text-center p-8" glowColor={plan.color as 'primary' | 'secondary' | 'accent'}>
                <CardHeader>
                  <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}/10 mb-4`}>
                    <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardContent>
              </GlassCard>
            ))}
          </div>
           <div className="text-center mt-12">
                <EnhancedButton asChild variant="primary" size="lg" glow>
                    <Link href="/contact?subject=ComparePlans">
                        Compare Full Plan Features
                    </Link>
                </EnhancedButton>
            </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- Key Add-Ons Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="Enhance Your Platform with Powerful Add-Ons"
            as="h2"
            className="text-3xl sm:text-4xl text-center font-bold mb-12"
            wordAnimation
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <GlassCard className="p-6 text-left h-full" glowColor="accent">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- The Flow Networks Advantage Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <AnimatedHeading text="The Flow Networks Advantage" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                    <p className="text-muted-foreground mb-4 text-lg">A powerful platform is only as good as the strategy behind it. When you partner with Flow Networks, you get more than just world-class technology—you get a dedicated team of experts committed to maximizing its value for your specific business.</p>
                    <ul className="space-y-4 text-muted-foreground mt-6">
                        <li className="flex items-start gap-4">
                            <Users className="w-6 h-6 text-secondary mr-2 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Strategic Consulting</h4>
                                <p className="text-sm">We work with you to align the platform’s capabilities with your core business objectives, ensuring a clear path to ROI.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Wrench className="w-6 h-6 text-secondary mr-2 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Expert Integration & Managed Services</h4>
                                <p className="text-sm">Our professional services team handles the complex integrations and can fully manage the platform, freeing your internal teams to focus on what they do best.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2">
                    <AnimatedAccentBorder variant="prominent" color="secondary">
                        <Image 
                            src="https://placehold.co/800x600.png" 
                            alt="Flow Networks team collaborating on a strategic plan" 
                            width={800} 
                            height={600}
                            className="rounded-lg object-cover"
                            data-ai-hint="A diverse team of professionals in a modern office, collaborating around a large digital screen displaying network architecture and data analytics. Professional, expert atmosphere."
                        />
                    </AnimatedAccentBorder>
                </div>
            </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- The AI Gateway Vision Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedAccentBorder variant="prominent" color="accent">
            <div className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="w-10 h-10 text-accent" />
              </div>
              <AnimatedHeading
                text="The Fuel for Your AI-Powered Future"
                as="h2"
                className="text-3xl sm:text-4xl font-bold mb-4"
              />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
                The data captured by our Intelligent WiFi platform is the essential fuel for the Flow AI Gateway. Every connection, every piece of data, and every interaction today builds the foundation for the next generation of hyper-local, AI-driven services that will anticipate, interact, and adapt in real-time.
              </p>
              <EnhancedButton asChild variant="outline" size="lg" glow>
                <Link href="/solutions/ai-gateway">
                  Explore the AI Gateway Vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </EnhancedButton>
            </div>
          </AnimatedAccentBorder>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- Final CTA Section --- */}
      <CallToActionSection 
        title="Ready to Build Your Intelligent WiFi Foundation?"
        description="Partner with Flow Networks to transform your WiFi from a cost center into an intelligent asset. Contact our experts today for a personalized consultation and let's engineer your success."
        ctaText="Request a Consultation"
        ctaLink="/contact?subject=IntelligentWiFiConsultation"
      />
    </div>
  );
};

export default IntelligentWifiPage;