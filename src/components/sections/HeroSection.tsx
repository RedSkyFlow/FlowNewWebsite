
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
// import Image from 'next/image'; // Image not currently used in this version
import { ChevronRight, Network } from 'lucide-react'; // Replaced Wifi with Network for AI Gateway CTA

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/5 to-background py-20 md:py-32 overflow-hidden">
      {/* Floating decorative elements - can be kept or modified */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float opacity-30"
        initial={{ opacity:0, scale:0.5 }}
        animate={{ opacity:0.3, scale:1 }}
        transition={{ duration:1, delay: 0.5}}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-lg animate-float [animation-delay:-1.5s] opacity-30"
        initial={{ opacity:0, x: 50 }}
        animate={{ opacity:0.3, x:0 }}
        transition={{ duration:1, delay: 0.7}}
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <AnimatedHeading
          text="Your Venue's Wi-Fi: The Central Nervous System for Intelligent Services."
          as="h1"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 !font-headline"
          wordAnimation
          staggerChildren={0.03}
        />
        <AnimatedHeading
          text="Unlock Exclusive In-Venue AI with the Flow Networks Gateway"
          as="h2"
          className="text-xl font-semibold tracking-tight text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 !font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
          wordAnimation
          staggerChildren={0.03}
        />

        <motion.p
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Flow Networks introduces the AI Gateway, a revolutionary approach using Wi-Fi as the intelligent core of your physical venue. We connect visitors to personalized AI services, transforming spaces into dynamic, responsive environments and unlocking new levels of engagement and operational efficiency.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Link href="/ai-gateway"> 
              Discover the AI Gateway
              <Network className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group shadow-md border-primary/50 text-primary hover:bg-primary/5 hover:border-primary transform transition-transform duration-300 hover:scale-105">
            <Link href="/industries">
              Explore Industry Solutions
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave Separator - can be kept or modified */}
      <div className="wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
          <path d="M-0.24,75.61 C186.36,194.54 349.20,-62.81 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="wave-shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
