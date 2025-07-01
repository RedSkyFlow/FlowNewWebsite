
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles, ArrowRight } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { cn } from '@/lib/utils';

const offerings = [
  {
    icon: Wifi,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    href: "/solutions/intelligent-wifi-infrastructure",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)]",
    ctaText: "Learn More"
  },
  {
    icon: Map,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    href: "/solutions/location-intelligence",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)]",
    ctaText: "Learn More"
  },
  {
    icon: Megaphone,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    href: "/solutions",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)]",
    ctaText: "Learn More"
  },
  {
    icon: DollarSign,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    href: "/solutions/wifi-monetisation",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)]",
    ctaText: "Learn More"
  },
  {
    icon: Handshake,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    href: "/solutions/professional-services",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--primary)/0.4)]",
    ctaText: "Learn More"
  },
  {
    icon: Sparkles,
    title: "The Future, Today",
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services.",
    href: "/platform-integrations/innovation-roadmap",
    glowClass: "hover:shadow-[0_0_30px_hsla(var(--secondary)/0.5)]", // Special blue glow for emphasis
    ctaText: "See Our Vision"
  }
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0F0E08]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="A Comprehensive Suite of Intelligent Venue Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline text-glow-primary"
          wordAnimation
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
          We don't just provide connectivity; we deliver a complete ecosystem of tools designed to help you understand your space, engage your audience, and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, i) => (
            <Card
              key={i}
              className={cn(
                "group h-full flex flex-col transform-gpu transition-all duration-slow ease-gentle",
                "bg-card/30 backdrop-blur-md border border-primary/20", // Glassmorphism
                "shadow-[var(--shadow-level-3)]", // Base shadow
                "hover:border-primary/40 hover:shadow-[var(--shadow-level-5)]", // Hover border & shadow
                offering.glowClass, // Applies the hover glow color
                "md:hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateY(-8px)_scale(1.03)]", // 3D hover effect on medium screens and up
                "md:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)]" // Initial 3D perspective
              )}
            >
              <CardHeader className="text-left items-start p-6">
                  <div className="mb-4 inline-block bg-accent/10 p-3 rounded-full self-start shadow-[0_0_15px_hsla(var(--accent)/0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_hsla(var(--accent)/0.4)]">
                    <offering.icon className="w-8 h-8 text-accent" />
                  </div>
                <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-left p-6 pt-0">
                <p className="text-muted-foreground text-sm">{offering.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-4 mt-auto">
                <Link href={offering.href} className="group/link inline-flex items-center text-sm font-semibold text-accent hover:text-foreground transition-colors">
                  {offering.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
