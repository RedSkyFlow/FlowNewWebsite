
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ChevronRight, Zap } from 'lucide-react'; 

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle background elements for depth */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-gradient-to-tl from-accent/5 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block mb-8 px-5 py-2.5 text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full shadow-sm"
        >
          Flow Networks: Engineering Your Digital Momentum
        </motion.div>

        <AnimatedHeading
          text="Advanced Network Solutions for a Connected Future."
          as="h1"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl !leading-tight mb-8 !font-headline"
          wordAnimation
          staggerChildren={0.02}
        />
        
        <motion.p
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-12 leading-relaxed"
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
            className="group btn-primary-glow rounded-lg px-10 py-7 text-lg font-semibold" 
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
            className="group rounded-lg px-10 py-7 text-lg font-semibold border-foreground/20 text-foreground/80 hover:bg-foreground/5 hover:border-foreground/30 hover:text-foreground"
          >
            <Link href="/contact">
              Request a Consultation
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
