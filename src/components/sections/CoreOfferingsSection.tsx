// src/components/sections/CoreOfferingsSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, BarChart3, Megaphone, DollarSign, Handshake, Rocket, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const offerings = [
  {
    icon: Wifi,
    title: 'Intelligent WiFi & Access',
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi is the gateway to all your venue's intelligent capabilities.",
    ctaLink: '/products/intelligent-wifi',
    glowClass: 'hover-glow-primary', // Teal
  },
  {
    icon: BarChart3,
    title: 'Location Intelligence',
    description: 'Understand your space like never before. Turn real-time visitor movement and presence data into actionable insights for operational excellence.',
    ctaLink: '/products/intelligent-wifi/location-intelligence',
    glowClass: 'hover-glow-secondary', // Blue
  },
  {
    icon: Megaphone,
    title: 'WiFi Marketing',
    description: 'Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email/SMS campaigns.',
    ctaLink: '/solutions/wifi-marketing',
    glowClass: 'hover-glow-accent', // Yellow
  },
  {
    icon: DollarSign,
    title: 'WiFi Monetisation',
    description: 'Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.',
    ctaLink: '/solutions/wifi-monetisation',
    glowClass: 'hover-glow-primary', // Teal
  },
  {
    icon: Handshake,
    title: 'Professional Services',
    description: 'From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.',
    ctaLink: '/partners',
    glowClass: 'hover-glow-secondary', // Blue
  },
  {
    icon: Rocket,
    title: 'The AI Gateway Vision',
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven, presence-verified services.",
    ctaLink: '/ai-gateway',
    glowClass: 'hover-glow-accent', // Yellow
  },
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedHeading
            text="Our Intelligent Venue Ecosystem"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            wordAnimation={true}
          />
          <p className="text-lg text-muted-foreground font-body">
            We deliver a complete suite of solutions designed to help you understand your physical space, engage your audience, and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <GlassCard className={cn("flex flex-col h-full", offering.glowClass)}>
                <CardHeader>
                  <div className="mb-4 inline-block bg-accent/10 p-3 rounded-full">
                    <offering.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm font-body">{offering.description}</p>
                </CardContent>
                <CardFooter>
                  <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                    <Link href={offering.ctaLink}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </EnhancedButton>
                </CardFooter>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
