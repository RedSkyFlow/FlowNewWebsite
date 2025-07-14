
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, DatabaseZap, Users, ShieldCheck, Wifi } from 'lucide-react';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

export const metadata: Metadata = {
  title: 'Intelligent Venue WiFi | Flow Networks',
  description: "Transform your venue's WiFi into a powerful engine for data capture, analytics, and engagement. Powered by Purple and orchestrated by Flow Networks.",
};

const keyFeatures = [
    {
        icon: DatabaseZap,
        title: "Rich First-Party Data Capture",
        description: "Turn your WiFi network into your most valuable source of customer data. Capture demographics, contact info, and visit frequency through a seamless, branded login experience."
    },
    {
        icon: BarChart3,
        title: "Advanced Location Analytics",
        description: "Go beyond simple connection counts. Generate heatmaps, analyze visitor flow, and understand dwell times to gain deep insights into how your physical space is being used."
    },
    {
        icon: Users,
        title: "CRM & Marketing Integration",
        description: "Seamlessly sync captured data with over 400 platforms, including Salesforce, HubSpot, and Mailchimp, to enrich customer profiles and power targeted marketing campaigns."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Security & Compliance",
        description: "Provide a secure, stable, and scalable guest WiFi experience that is fully compliant with global data privacy regulations like GDPR and POPIA, ensuring peace of mind for you and your visitors."
    }
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

      {/* What it is Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedHeading 
                text="More Than an Amenity—It's an Asset"
                as="h2" 
                className="text-3xl font-bold text-foreground sm:text-4xl mb-6 !font-headline"
            />
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-12">
                In the context of the AI Gateway, your WiFi network becomes the primary mechanism for data acquisition. It's the critical first step in understanding who is in your venue, where they are, and when they are there. This foundational data is the lifeblood for all subsequent AI-driven personalization and contextual interactions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyFeatures.map((feature, index) => (
                    <ScrollAnimatedSection key={feature.title} delay={index * 0.1}>
                        <Card className="text-left bg-card h-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                            <CardHeader>
                                <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-xl text-foreground">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </ScrollAnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* The Flow Networks Value */}
       <section className="py-16 md:py-24 bg-background">
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
                    <AnimatedHeading 
                        text="The Flow Networks Advantage: Strategic Integration"
                        as="h2" 
                        className="text-3xl font-bold text-foreground sm:text-4xl mb-6 !font-headline"
                    />
                    <p className="text-lg text-muted-foreground mb-6">
                        While we leverage Purple's powerful platform, our unique value lies in strategically architecting how its data fuels the AI Gateway. We are not just implementers; we are integrators who transform raw Wi-Fi data into actionable intelligence.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                            <span><strong>Data Optimization:</strong> We identify and structure the specific data points most valuable for AI algorithms.</span>
                        </li>
                        <li className="flex items-start">
                             <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                            <span><strong>Configuration Expertise:</strong> We optimize system configurations for robust data harvesting in diverse and challenging environments.</span>
                        </li>
                        <li className="flex items-start">
                             <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                            <span><strong>Seamless AI Handoff:</strong> We ensure flawless data transmission and interpretation by the AI Gateway, enabling real-time, personalized experiences.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}

// Add a new helper component for check circle list items if needed
const CheckCircle = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

    