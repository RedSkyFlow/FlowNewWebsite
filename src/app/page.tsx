
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


// Section: Hero (Implemented based on user prompt)
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Abstract network visualization"
        fill
        className="object-cover z-0"
        data-ai-hint="abstract network"
        priority
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(135deg, hsla(180, 82%, 25%, 0.4) 0%, hsla(60, 54%, 3%, 0.8) 50%, hsla(284, 86%, 36%, 0.4) 100%)' }}
      ></div>

      {/* Placeholder for future MouseFollowerGlow component */}
      {/* <MouseFollowerGlow /> */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">

        <motion.div
          className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <Image
            src="/FlowAINew3DLogo_on_DarkPrimary.png"
            alt="Flow Networks 3D Logo - Intelligent Venue Solutions"
            width={200}
            height={200}
            priority
            className="transition-all duration-300 ease-out hover:scale-105 hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          />
        </motion.div>

        <AnimatedHeading
          text="Transform Your Venue. Grow Your Brand. With Intelligent Connectivity."
          as="h1"
          className="text-4xl font-bold tracking-tight text-[#E2FDFF] sm:text-5xl md:text-6xl lg:text-7xl !leading-tight mb-8 !font-headline [text-shadow:0_0_25px_hsl(var(--primary)/0.5)]"
          wordAnimation
          staggerChildren={0.03}
        />
        
        <motion.p
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Seamlessly connecting people in physical spaces. Harnessing real-time data for unparalleled engagement and operational excellence.
        </motion.p>
        
        <motion.p
          className="mx-auto max-w-3xl text-base text-muted-foreground/80 md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
           Flow Networks provides cutting-edge solutions that bridge the physical and digital realms, empowering organizations to drive meaningful improvements and deliver curated experiences tailored to every visitor.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
    <div className="bg-background text-foreground min-h-screen font-body antialiased">
      <HeroSection />
      {/* Other sections will be added here as per user instructions */}
    </div>
  );
};

export default HomePage;
