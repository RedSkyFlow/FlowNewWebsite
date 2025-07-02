
'use client';

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedCard } from '@/components/ui/EnhancedCard';
import { cn } from '@/lib/utils';

const offerings = [
  {
    icon: Wifi,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    ctaLink: "/solutions/intelligent-wifi-infrastructure",
    ctaText: "Learn More"
  },
  {
    icon: Map,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    ctaLink: "/solutions/location-intelligence",
    ctaText: "Learn More"
  },
  {
    icon: Megaphone,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    ctaLink: "/solutions",
    ctaText: "Learn More"
  },
  {
    icon: DollarSign,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    ctaLink: "/solutions/wifi-monetisation",
    ctaText: "Learn More"
  },
  {
    icon: Handshake,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    ctaLink: "/solutions/professional-services",
    ctaText: "Learn More"
  },
  {
    icon: Sparkles,
    title: "The Future, Today",
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services.",
    ctaLink: "/platform-integrations/innovation-roadmap",
    ctaText: "See Our Vision"
  }
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="A Comprehensive Suite of Intelligent Venue Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline [text-shadow:0_0_20px_hsla(var(--primary)/0.4)]"
          wordAnimation
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
          We don't just provide connectivity; we deliver a complete ecosystem of tools designed to help you understand your space, engage your audience, and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, i) => (
            <EnhancedCard
              key={i}
              variant="3d"
              linkHref={offering.ctaLink}
              linkText={offering.ctaText}
            >
              <CardHeader className="text-left items-start p-6">
                  <div className="mb-4 inline-block bg-accent/10 p-3 rounded-full self-start shadow-[0_0_15px_hsla(var(--accent)/0.2)]">
                    <offering.icon className={cn("w-8 h-8 text-accent", "icon-focused-light")} />
                  </div>
                <CardTitle className={cn("font-headline text-xl text-foreground transition-colors", "text-floating-light")}>{offering.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-left p-6 pt-0">
                <p className="text-muted-foreground text-sm">{offering.description}</p>
              </CardContent>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
