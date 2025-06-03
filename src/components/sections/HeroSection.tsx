'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-background py-20 md:py-32 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float opacity-50"
        initial={{ opacity:0, scale:0.5 }}
        animate={{ opacity:0.5, scale:1 }}
        transition={{ duration:1, delay: 0.5}}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-lg animate-float [animation-delay:-1.5s] opacity-50"
        initial={{ opacity:0, x: 50 }}
        animate={{ opacity:0.5, x:0 }}
        transition={{ duration:1, delay: 0.7}}
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Powered by Next-Gen AI Gateway Technology
          </div>
        </motion.div>
        
        <AnimatedHeading 
          text="Unlock Your Business Potential with FlowAI Gateway" 
          as="h1" 
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 !font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
          wordAnimation
          staggerChildren={0.03}
        />
        
        <motion.p 
          className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Integrate sophisticated AI capabilities seamlessly into your workflows. FlowAI Gateway offers tailored AI agent solutions, adapting content from flowhq.co.za and leveraging Purple.ai's innovations to drive efficiency and growth.
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              Get Started Free
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="group shadow-md border-primary/50 text-primary hover:bg-primary/5 hover:border-primary transform transition-transform duration-300 hover:scale-105">
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave Separator */}
      <div className="wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%;'}}>
          <path d="M-0.24,75.61 C186.36,194.54 349.20,-62.81 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="wave-shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
