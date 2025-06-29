
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Wifi, MapPin, Tv, MailCheck, ShieldCheck as FamilyFriendlyWifiIcon, UserCheck as ProfessionalServicesIcon, CalendarDays as EventWifiIcon, DollarSign, Link as LinkIconLucide, Zap, CheckCircle, BarChart3, Users, Brain, Aperture, ArrowRight, LucideIcon, Search, Activity, Settings2, Lightbulb, Cpu, Award, BookOpen, Building, Briefcase, Monitor, Mail, Settings, ChevronRight, Home, Puzzle, Gift, ShieldCheck, MapPin as MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from "next/image";
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MAIN_NAV_LINKS, INDUSTRIES_DATA } from '@/lib/constants'; // For populating sections
import CallToActionSection from '@/components/sections/CallToActionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GlassCard from '@/components/shared/GlassCard';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import HomepageKeyPointsSection from '@/components/sections/HomepageKeyPointsSection';
import Logo from '@/components/shared/Logo';


// Section: Hero (Implemented based on user prompt)
const HeroSection = () => {
  return (
    <section 
      className="relative flex flex-col items-center text-center overflow-hidden pt-12 pb-20"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          className="relative mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <div className="transition-all duration-300 ease-out hover:scale-105 hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
            <Logo />
          </div>
        </motion.div>

        {/* Main parent container for the image and the overlaying text cards */}
        <motion.div 
          className="relative w-full max-w-6xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        >
          
          {/* 1. The container for the background image, with a glowing border */}
          <div 
            className="relative rounded-2xl p-px bg-gradient-animated"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--accent)))',
              animation: 'gradient-shift-brand 10s ease-in-out infinite',
              backgroundSize: '400% 400%'
            }}
          >
            <div className="bg-background rounded-[0.95rem] overflow-hidden">
              <Image
                src="/home_hero_background.jpg"
                alt="Abstract network visualization"
                width={1200}
                height={600}
                className="object-cover w-full h-auto"
                priority
                data-ai-hint="concert crowd technology"
              />
            </div>
          </div>
          
          {/* 2. Absolutely positioned container for the overlaying text cards */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 gap-4">
            
            {/* Card for Header */}
            <motion.div
              className="glass-card p-4 md:p-6 rounded-xl w-full max-w-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <AnimatedHeading
                text="Transform Your Venue. Grow Your Brand. With Intelligent Connectivity."
                as="h1"
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground !leading-tight !font-headline [text-shadow:0_0_20px_hsl(var(--primary)/0.5)]"
                wordAnimation
                staggerChildren={0.03}
              />
            </motion.div>

            {/* Card for Subtext */}
            <motion.div
              className="glass-card p-4 rounded-lg w-full max-w-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
               <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Seamlessly connecting people in physical spaces. Harnessing real-time data for unparalleled engagement and operational excellence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. Buttons remain below the main container */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/solutions" passHref>
            <EnhancedButton variant="primary" size="lg" glow>
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </EnhancedButton>
          </Link>
          <Link href="/contact" passHref>
            <EnhancedButton variant="tertiary" size="lg" glow>
               Request a Demo
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </EnhancedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


// Main Homepage Component
const HomePage: NextPage = () => {
  return (
    <div className="text-foreground min-h-screen font-body antialiased">
      <HeroSection />
      <HomepageKeyPointsSection />
    </div>
  );
};

export default HomePage;
