
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { cn } from '@/lib/utils';
import { EnhancedButton } from '../ui/enhanced-button';

const offerings = [
  {
    icon: Wifi,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    href: "/solutions/intelligent-wifi-infrastructure",
    glowClass: "hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)]"
  },
  {
    icon: Map,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    href: "/solutions/location-intelligence",
    glowClass: "hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)]"
  },
  {
    icon: Megaphone,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    href: "/solutions",
    glowClass: "hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)]"
  },
  {
    icon: DollarSign,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    href: "/solutions/wifi-monetisation",
    glowClass: "hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)]"
  },
  {
    icon: Handshake,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    href: "/solutions/professional-services",
    glowClass: "hover:shadow-[0_0_20px_hsla(var(--primary)/0.5)]"
  },
  {
    icon: Sparkles,
    title: "The Future, Today",
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services.",
    href: "/platform-integrations/innovation-roadmap",
    glowClass: "hover:shadow-[0_0_25px_hsla(var(--secondary)/0.5)]", // Special purple glow
    borderColor: "border-secondary/20 hover:border-secondary/40"
  }
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0F0E08]">
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
            <Card key={i} className={cn("group bg-background/30 backdrop-blur-lg rounded-xl flex flex-col transition-all duration-300 ease-gentle hover:-translate-y-2", offering.glowClass, offering.borderColor || 'border-primary/20 hover:border-primary/40' )}>
              <CardHeader className="text-center items-center">
                  <div className="p-4 rounded-full bg-accent/10 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <offering.icon className="w-8 h-8 text-accent" />
                  </div>
                <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground text-sm">{offering.description}</p>
              </CardContent>
              <div className="p-6 pt-4 mt-auto">
                <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                  <Link href={offering.href}>Learn More</Link>
                </EnhancedButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
