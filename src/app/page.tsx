
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


// Section: Hero (Transformed based on Blueprint v2.1)
const HeroSection = () => {
  const floatingCardAnimation = (delay: number) => ({
    y: ["0rem", "-0.75rem", "0rem"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section className="relative bg-[#0A0903] text-[#E2FDFF] pt-28 pb-32 md:pt-40 md:pb-40 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#007A80]/10 via-transparent to-[#6A0DAD]/10"></div>
      
      {/* Floating Card Elements (Layered Effect) */}
      <motion.div className="absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        <motion.div 
            className="absolute top-[15%] left-[10%] opacity-50"
            animate={floatingCardAnimation(0)}
        >
            <GlassCard className="!p-4 !rounded-xl !border-primary/20">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="font-semibold text-sm">Secure Access</span>
              </div>
            </GlassCard>
        </motion.div>
        <motion.div 
            className="absolute bottom-[20%] left-[25%] opacity-50"
            animate={floatingCardAnimation(1)}
        >
            <GlassCard className="!p-4 !rounded-xl !border-accent/20">
              <div className="flex items-center gap-3">
                <MapIcon className="h-6 w-6 text-accent" />
                <span className="font-semibold text-sm">Location Analytics</span>
              </div>
            </GlassCard>
        </motion.div>
        <motion.div 
            className="absolute top-[25%] right-[8%] opacity-50"
            animate={floatingCardAnimation(0.5)}
        >
            <GlassCard className="!p-4 !rounded-xl !border-secondary/20">
               <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" />
                <span className="font-semibold text-sm">Guest Engagement</span>
              </div>
            </GlassCard>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-20">

        <motion.div
          className="relative w-[200px] h-[200px] mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <Image
            src="/Flow%203D%20Logo-%20Hero.png"
            alt="Flow Networks 3D Hero Logo"
            width={200}
            height={200}
            priority
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.15) 48%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 52%, transparent 60%)',
              backgroundSize: '400% 400%',
              maskImage: 'url("/Flow%203D%20Logo-%20Hero.png")',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url("/Flow%203D%20Logo-%20Hero.png")',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
            initial={{ backgroundPosition: '150% -150%' }}
            animate={{ backgroundPosition: '-150% 150%' }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
              repeatDelay: 8,
            }}
          />
        </motion.div>

        <AnimatedHeading
          text="Intelligent Venue WiFi"
          as="h1"
          className="text-4xl font-bold tracking-tight text-[#E2FDFF] sm:text-5xl md:text-6xl lg:text-7xl !leading-tight mb-8 !font-headline [text-shadow:0_0_25px_#0282F280]"
          wordAnimation
          staggerChildren={0.02}
        />
        
        <motion.p
          className="mx-auto max-w-3xl text-lg text-[#E2FDFF]/80 md:text-xl lg:text-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The secure, authenticated gateway to hyper-local services, actionable analytics, and unparalleled guest experiences. Transform your space into a smart, data-driven environment.
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
              <Zap className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:animate-pulse" />
            </EnhancedButton>
          </Link>
          <Link href="/contact" passHref>
            <EnhancedButton variant="tertiary" size="lg" glow>
               Request a Consultation
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
      <HomepageKeyPointsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CaseStudiesTeaserSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
