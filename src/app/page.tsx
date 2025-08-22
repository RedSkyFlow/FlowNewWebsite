
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CoreOfferingsSection from '@/components/sections/CoreOfferingsSection';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-center py-20 md:py-0">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div 
        className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeIn}>
           <Image
            src="/Images/Flow-2D-logo.png"
            alt="Flow AI 2D Logo"
            width={128}
            height={128}
            className="mx-auto mb-6 transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ filter: 'drop-shadow(0 0 1rem hsla(var(--primary) / 0.5))' }}
            priority
          />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <AnimatedHeading
            text="Transform Your Venue. Grow Your Brand. With Intelligent Connectivity."
            as="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold !leading-tight tracking-tighter text-gradient-animated"
            wordAnimation={true}
          />
        </motion.div>

        <motion.p 
          className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body"
          variants={fadeIn}
        >
          Seamlessly connecting people in physical spaces. Harnessing real-time data for unparalleled engagement and operational excellence.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={fadeIn}
        >
          <EnhancedButton asChild variant="secondary" size="lg" glow>
            <Link href="/get-started">
              Get Started for Free
            </Link>
          </EnhancedButton>
          <EnhancedButton asChild variant="outline" size="lg" glow>
            <Link href="/solutions">
              Explore Solutions
            </Link>
          </EnhancedButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      
      <main className="flex-1 relative z-10">
        <CoreOfferingsSection />
      </main>
    </>
  );
};

export default HomePage;
