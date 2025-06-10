
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ChevronRight, Settings } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/5 to-background py-20 md:py-32 overflow-hidden">
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
          text="Powering Your Digital Future with Advanced Network Solutions."
          as="h1"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 !font-headline"
          wordAnimation
          staggerChildren={0.03}
        />
        <AnimatedHeading
          text="Flow Networks delivers robust, scalable, and secure networking infrastructure and services to drive your business forward."
          as="h2"
          className="text-xl font-semibold tracking-tight text-primary sm:text-2xl md:text-3xl mb-6 !font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
          wordAnimation
          staggerChildren={0.03}
        />

        <motion.p
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We specialize in designing, implementing, and managing cutting-edge network solutions that empower organizations to innovate and thrive in an interconnected world.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Link href="/solutions">
              Explore Our Solutions
              <Settings className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group shadow-md border-primary/50 text-primary hover:bg-primary/5 hover:border-primary transform transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
          <path d="M-0.24,75.61 C186.36,194.54 349.20,-62.81 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="wave-shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
