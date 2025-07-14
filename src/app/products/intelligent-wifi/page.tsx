
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, DatabaseZap, Users, ShieldCheck, Wifi, Link as LinkIcon, Lock, MessageSquare, DollarSign, Wand2 } from 'lucide-react';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

export const metadata: Metadata = {
  title: 'Intelligent Venue WiFi | Flow Networks',
  description: "Transform your venue's WiFi into a powerful engine for data capture, analytics, and engagement. Explore plans and features powered by Purple and orchestrated by Flow Networks.",
};

const plans = [
    {
        name: "Connect",
        tier: "Foundation Tier",
        icon: LinkIcon,
        description: "Establish a secure, compliant, and professionally branded WiFi presence. The essential first step for any venue.",
        features: ["Secure Captive Portal", "Branded Splash Pages", "Basic Network Analytics", "Full Data Law Compliance"],
        color: "primary"
    },
    {
        name: "Capture",
        tier: "Data-Driven Tier",
        icon: DatabaseZap,
        description: "Our most popular offering. Unlock rich first-party data, integrate with your CRM, and gain deep behavioral insights.",
        features: ["All Connect Features", "First-Party Data Capture", "Seamless CRM Integration", "Detailed WiFi Analytics"],
        color: "secondary"
    },
    {
        name: "Engage",
        tier: "Personalization Tier",
        icon: Users,
        description: "The ultimate solution for creating hyper-personalized guest journeys and maximizing engagement at every touchpoint.",
        features: ["All Capture Features", "Customized Access Journeys", "Passpoint Authentication", "Fully Managed Service Options"],
        color: "accent"
    }
];

const addOns = [
    {
        icon: Lock,
        title: "SecurePass",
        description: "A game-changer for presence detection. Uses app-based authentication for automatic, secure re-connection, enabling powerful real-time engagement."
    },
    {
        icon: ShieldCheck,
        title: "Shield (Content Filtering)",
        description: "Provide a family-friendly browsing experience. This DNS-level safety feature is the technology behind our Friendly WiFi certification."
    },
    {
        icon: MessageSquare,
        title: "Surveys",
        description: "Gather immediate, high-value customer feedback with real-time, in-venue surveys that boast exceptionally high response rates."
    },
    {
        icon: DollarSign,
        title: "Paid WiFi",
        description: "Monetize your network by offering premium, high-speed WiFi access tiers, creating a direct revenue stream from your connectivity."
    },
];


export default function IntelligentWifiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/10 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-primary font-semibold mb-2 flex items-center"><Wifi className="mr-2 h-5 w-5" />INTELLIGENT VENUE WIFI</p>
              <AnimatedHeading 
                text="The Foundation of Your Intelligent Venue"
                as="h1" 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 !font-headline"
              />
              <p className="text-lg text-muted-foreground md:text-xl mb-8">
                This isn't just about connectivity. We transform your WiFi network into the central nervous system of your venue—a powerful engine for data capture, visitor analytics, and hyper-personalized engagement, laying the groundwork for the AI Gateway.
              </p>
              <div className="flex items-center gap-4">
                 <EnhancedButton asChild size="lg" variant="secondary" glow>
                    <Link href="/contact?solution=intelligent-wifi">
                      Request a Demo
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </EnhancedButton>
                  <p className="text-sm text-muted-foreground">Powered by Purple.ai</p>
              </div>
            </div>
            <div className="flex justify-center">
                 <Image 
                    src="https://placehold.co/1200x800.png"
                    alt="Data visualization of network connectivity"
                    width={500}
                    height={500}
                    className="rounded-xl shadow-2xl object-cover"
                    data-ai-hint="network data visualization"
                    priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedHeading 
                text="Solutions Scaled to Your Ambition"
                as="h2" 
                className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-6 !font-headline"
            />
            <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground mb-12">
                Our Intelligent WiFi is built on Purple's tiered platform, allowing you to start with the essentials and scale up to advanced personalization as your needs evolve.
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <ScrollAnimatedSection key={plan.name} delay={index * 0.1}>
                        <Card className={`text-left bg-card h-full flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 border-t-4 border-${plan.color}/70`}>
                            <CardHeader>
                                <div className={`p-3 rounded-full bg-${plan.color}/10 inline-block mb-3`}>
                                    <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                                </div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{plan.tier}</p>
                                <CardTitle className="font-headline text-2xl text-foreground">{plan.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                                <ul className="space-y-2">
                                  {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center text-sm">
                                      <ShieldCheck className={`w-4 h-4 text-${plan.color} mr-2 shrink-0`} />
                                      <span className="text-foreground/90">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-4 mt-auto">
                                <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                                    <Link href="/contact?plan={plan.name}">Compare Plans</Link>
                                </EnhancedButton>
                            </div>
                        </Card>
                    </ScrollAnimatedSection>
                ))}
            </div>
        </div>
      </section>

       {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedHeading 
                text="Enhance Your Platform with Powerful Add-Ons"
                as="h2" 
                className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {addOns.map((addOn, index) => (
                    <ScrollAnimatedSection key={addOn.title} delay={index * 0.1}>
                        <div className="group relative p-6 bg-card h-full rounded-lg text-center border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                            <div className="p-3 rounded-full bg-primary/10 inline-block mb-3 transition-transform duration-300 group-hover:scale-110">
                                <addOn.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{addOn.title}</h3>
                            <p className="text-sm text-muted-foreground">{addOn.description}</p>
                        </div>
                    </ScrollAnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* The Flow Networks Value */}
       <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                    <Image 
                        src="https://placehold.co/1200x800.png"
                        alt="Flow Networks expert team integrating systems"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-2xl object-cover"
                        data-ai-hint="team collaboration diagram"
                    />
                </div>
                <div className="order-1 md:order-2 max-w-xl">
                    <p className="text-accent font-semibold mb-2 flex items-center"><Wand2 className="mr-2 h-5 w-5" />THE FLOW NETWORKS ADVANTAGE</p>
                    <AnimatedHeading 
                        text="Strategic Integration, Not Just Installation"
                        as="h2" 
                        className="text-3xl font-bold text-foreground sm:text-4xl mb-6 !font-headline"
                    />
                    <p className="text-lg text-muted-foreground mb-6">
                        While we leverage Purple's powerful platform, our unique value lies in strategically architecting how its data fuels the AI Gateway. We are not just implementers; we are integrators who transform raw Wi-Fi data into actionable intelligence for our AI agents.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}

    