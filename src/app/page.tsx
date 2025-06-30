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
import AnimatedBorder from '@/components/shared/AnimatedBorder';


// Section: Hero (Implemented based on user prompt)
const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center justify-center text-center overflow-hidden min-h-[85vh] py-12"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Main parent container for the image and the overlaying text/buttons */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        >
          
          {/* 1. The container for the background image, with a glowing border */}
          <AnimatedBorder
            containerClassName="relative rounded-2xl overflow-hidden"
            className="bg-background rounded-[0.95rem] overflow-hidden relative"
          >
            <Image
              src="/home_hero_background.jpg"
              alt="A futuristic, panoramic view of a smart city or advanced venue, with data visualizations and network lines."
              width={2400}
              height={1200}
              className="w-full h-auto"
              priority
              data-ai-hint="network technology abstract"
            />
          </AnimatedBorder>
          
          {/* 2. Absolutely positioned overlaying elements */}

          {/* Header Text - POSITIONED TOP-RIGHT */}
          <motion.div
            className="absolute top-16 right-8 z-10 w-full max-w-3xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <AnimatedHeading
              text="Transform Your Venue. Grow Your Brand. With Intelligent Connectivity."
              as="h1"
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-foreground !leading-tight !font-headline [text-shadow:0_0_40px_hsl(var(--primary)/0.8),0_0_10px_hsl(var(--primary-foreground)/0.6)] text-right"
              wordAnimation
              staggerChildren={0.03}
            />
          </motion.div>

          {/* Card for Subtext - POSITIONED BOTTOM-LEFT */}
          <motion.div
            className="absolute bottom-28 left-8 md:left-12 z-10 w-full max-w-lg"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
              Seamlessly connecting people in physical spaces. Harnessing real-time data for unparalleled engagement and operational excellence.
            </p>
          </motion.div>

          {/* 3. Buttons positioned over the image - POSITIONED BOTTOM-LEFT */}
          <motion.div
            className="absolute bottom-8 left-8 md:left-12 z-20 flex flex-col sm:flex-row items-start justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/solutions" passHref>
              <EnhancedButton variant="secondary" size="md" glow>
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </EnhancedButton>
            </Link>
            <Link href="/contact" passHref>
              <EnhancedButton variant="tertiary" size="md" glow>
                Request Your Demo
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </EnhancedButton>
            </Link>
          </motion.div>

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
