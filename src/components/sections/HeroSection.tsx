
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ChevronRight, Settings, Zap } from 'lucide-react'; // Changed icon

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Subtle background elements for depth, inspired by Dribbble's clean complexity */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 via-transparent to-transparent rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block mb-6 px-4 py-2 text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full"
        >
          Flow Networks: Engineering Your Digital Momentum
        </motion.div>

        <AnimatedHeading
          text="Advanced Network Solutions for a Connected Future."
          as="h1"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 !font-headline"
          wordAnimation
          staggerChildren={0.02}
        />
        
        <motion.p
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We architect, implement, and manage resilient and secure network infrastructures, empowering your business to innovate, scale, and lead in today's interconnected world.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="group btn-primary-glow rounded-lg px-8 py-3 text-base font-semibold" // Dribbble inspired button style
          >
            <Link href="/solutions">
              Explore Our Solutions
              <Zap className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:animate-pulse" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="group rounded-lg px-8 py-3 text-base font-semibold border-primary/40 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary"
          >
            <Link href="/contact">
              Request a Consultation
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Removing the wave container for a cleaner, more modern look as per Dribbble inspiration */}
      {/* <div className="wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
          <path d="M-0.24,75.61 C186.36,194.54 349.20,-62.81 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="wave-shape-fill"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
