
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles, ArrowRight } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const offerings = [
  {
    icon: Wifi,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    ctaLink: "/solutions/intelligent-wifi",
  },
  {
    icon: Map,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    ctaLink: "/solutions/location-intelligence",
  },
  {
    icon: Megaphone,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    ctaLink: "/solutions",
  },
  {
    icon: DollarSign,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    ctaLink: "/solutions/wifi-monetisation",
  },
  {
    icon: Handshake,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    ctaLink: "/solutions/professional-services",
  },
  {
    icon: Sparkles,
    title: "The Future, Today",
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services.",
    ctaLink: "/ai-gateway",
  }
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0A0903]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="A Comprehensive Suite of Intelligent Venue Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
          wordAnimation
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
          We don't just provide connectivity; we deliver a complete ecosystem of tools designed to help you understand your space, engage your audience, and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, i) => (
            <div key={i} className="group h-full">
              <Card className="bg-card border border-transparent hover:border-accent/30 transition-all duration-300 flex flex-col h-full text-left p-4 shadow-lg hover:shadow-accent/10">
                <CardHeader>
                    <div className="mb-4 inline-block bg-accent/10 p-3 rounded-full self-start shadow-[0_0_15px_hsla(var(--accent)/0.2),_0_0_40px_hsla(var(--accent)/0.1)] transition-all duration-300 group-hover:shadow-[0_0_25px_hsla(var(--accent)/0.4),_0_0_60px_hsla(var(--accent)/0.2)]">
                      <offering.icon className="w-8 h-8 text-accent" />
                    </div>
                  <CardTitle className="font-headline text-xl text-foreground">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{offering.description}</p>
                </CardContent>
                <CardFooter>
                    <Link href={offering.ctaLink} className="group/link inline-flex items-center text-sm font-semibold text-accent hover:text-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
