
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import CoreOfferingsSection from '@/components/sections/CoreOfferingsSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import MouseFollowerGlow from '@/components/shared/MouseFollowerGlow';

const HeroSection = () => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen py-20"
    >
      <ParticleBackground 
          colors={['#007A80', '#0282F2', '#FFCB47']} 
          speed={0.2}
          particleCount={35}
        />
      <MouseFollowerGlow />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center gap-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/FlowAINew3DLogo_on_DarkPrimary.png"
            alt="Flow Networks 3D Logo - Intelligent Venue Solutions"
            width={128}
            height={128}
            className="drop-shadow-[0_0_30px_hsla(var(--accent)/0.3)] transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_40px_hsla(var(--accent)/0.5)]"
            priority
          />
        </motion.div>
        
        <AnimatedHeading
          text="Transform Your Venue. Grow Your Brand. With Intelligent Connectivity."
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter text-foreground [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] text-gradient-animated"
          wordAnimation
        />

        <motion.p 
          className="max-w-3xl text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Seamlessly connecting people in physical spaces. Harnessing real-time data for unparalleled engagement and operational excellence.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <EnhancedButton asChild variant="primary" size="lg" glow>
            <Link href="/solutions">
              Explore Our Solutions
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </EnhancedButton>
          <EnhancedButton asChild variant="secondary" size="lg" glow>
            <Link href="/contact">
              Request a Demo
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </EnhancedButton>
        </motion.div>

      </div>
    </section>
  );
};


const HomePage: NextPage = () => {
  return (
    <div className="text-foreground min-h-screen font-body antialiased">
      <HeroSection />
      <CoreOfferingsSection />
    </div>
  );
};

export default HomePage;
