
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Wifi, MapPin, Tv, MailCheck, ShieldCheck as FamilyFriendlyWifiIcon, UserCheck as ProfessionalServicesIcon, CalendarDays as EventWifiIcon, DollarSign, Link as LinkIconLucide, Zap, CheckCircle, BarChart3, Users, Brain, Aperture, ArrowRight, LucideIcon, Search, Activity, Settings2, Lightbulb, Cpu, Award, BookOpen, Building, Briefcase, Monitor, Mail, Settings, ChevronRight, Home, Puzzle, Gift, ShieldCheck, MapPin as MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MAIN_NAV_LINKS, INDUSTRIES_DATA } from '@/lib/constants'; // For populating sections
import CallToActionSection from '@/components/sections/CallToActionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GlassCard from '@/components/shared/GlassCard';


// Section: Hero (Transformed based on Blueprint v2.1)
const HeroSection = () => {
  const floatingCardAnimation = (delay: number) => ({
    y: ["0rem", "-0.75rem", "0rem"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section className="relative bg-[#0A0903] text-[#E2FDFF] pt-28 pb-32 md:pt-48 md:pb-40 overflow-hidden min-h-[90vh] flex items-center">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block mb-8 px-5 py-2.5 text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full shadow-sm"
        >
          The Future of Venue Connectivity is Here
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
          <Button
            asChild
            size="lg"
            className="group bg-accent text-[#003d43] rounded-lg px-10 py-7 text-lg font-semibold border border-transparent hover:border-accent hover:bg-transparent hover:text-primary transition-all duration-300 glow-accent glow-accent-hover"
          >
            <Link href="/solutions">
              Explore Our Solutions
              <Zap className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:animate-pulse" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="group bg-transparent border border-accent text-primary hover:bg-accent hover:text-[#003d43] rounded-lg px-10 py-7 text-lg font-semibold transition-all duration-300 glow-accent glow-accent-hover"
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


// --- HomepageKeyPointsSection ---
const HomepageKeyPointsSection = () => {
  // Extracting first 4 solutions, ensuring they have icons and descriptions
  const solutionsNav = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
  const corePillars = solutionsNav?.subLinks?.slice(0, 4).map(pillar => ({
    title: pillar.label,
    description: pillar.shortDescription || `Explore our expert ${pillar.label.toLowerCase()} services.`,
    icon: pillar.icon || Settings2, // Fallback icon
    href: pillar.href,
    linkText: `Explore ${pillar.label}`
  })) || [
    // Fallback data if constants are not structured as expected
    { title: 'Intelligent WiFi', description: "Seamless, high-performance wireless connectivity tailored to your venue's needs.", icon: Wifi, href: '/solutions/flow-ai-gateway', linkText: 'Explore Smart WiFi' },
    { title: 'AI Integrations', description: "Unlock valuable insights from user movement and behavior within your space.", icon: Puzzle, href: '/solutions/ai-integrations', linkText: 'Discover Insights' },
    { title: 'WiFi Monetisation', description: "Dynamic content and communication tools to captivate your audience.", icon: DollarSign, href: '/solutions/wifi-monetisation', linkText: 'Engage Users' },
    { title: 'Sponsored WiFi', description: "Expert consultation, design, and support for your network infrastructure.", icon: Gift, href: '/solutions/sponsored-wifi', linkText: 'Our Expertise' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Comprehensive Network Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl mb-6 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg lg:text-xl mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Flow Networks delivers a spectrum of advanced networking services, from intelligent infrastructure to strategic insights, ensuring your business stays connected and competitive.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePillars.map((pillar, i) => (
            <motion.div
              key={pillar.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="bg-card shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-primary/40 h-full hover:-translate-y-1">
                <CardHeader className="items-center text-center p-6 md:p-8 pt-8 md:pt-10">
                  <div className="p-4 rounded-full bg-primary/10 inline-block mb-5 transition-transform duration-300 group-hover:scale-110">
                    <pillar.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-muted-foreground text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">{pillar.description}</p>
                </CardContent>
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Button asChild variant="link" className="w-full group/link text-primary font-semibold hover:text-primary/80 text-sm lg:text-base">
                    <Link href={pillar.href || '/solutions'}>
                      {pillar.linkText || 'Learn More'} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
         <div className="text-center mt-20">
          <Button asChild size="lg" className="group btn-primary-glow rounded-lg px-8 py-4 text-base lg:text-lg font-semibold">
            <Link href="/solutions"> 
              Explore All Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};


// --- WhyChooseUsSection ---
const WhyChooseUsSection = () => {
  type WhyChooseItem = {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  
  const whyChooseItems: WhyChooseItem[] = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Our certified engineers bring years of experience in designing and managing complex network infrastructures for diverse industries.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliability & Security',
      description: 'We prioritize robust security protocols and resilient network designs to ensure maximum uptime and protect your critical assets.',
    },
    {
      icon: Brain, 
      title: 'Strategic Partnership',
      description: 'We collaborate closely with you to understand your unique business goals and deliver tailored, future-proof solutions.',
    },
    {
      icon: Settings, 
      title: 'Innovative Technology',
      description: 'Leveraging cutting-edge technologies and best practices to provide you with scalable and efficient network solutions.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-muted/20"> 
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Why Partner with Flow Networks?"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choosing the right network solutions provider is crucial. Flow Networks stands out through commitment to excellence, innovation, and client success.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> 
          {whyChooseItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full text-center bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-border/50 flex flex-col hover:-translate-y-1"> 
                <CardHeader className="pt-8 pb-4">
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CaseStudiesTeaserSection ---
const CaseStudiesTeaserSection = () => {
  const caseStudies = [
    {
      title: 'Enterprise Network Transformation for Innovatech Corp',
      industry: 'Technology',
      icon: Building,
      image: 'https://placehold.co/600x400.png',
      imageHint: 'modern office tech',
      summary: 'Discover how Flow Networks redesigned Innovatech\'s infrastructure for enhanced scalability, performance, and future growth.',
      href: '/resources', // Updated to general resources page
    },
    {
      title: 'SMB Growth Powered by Secure Connectivity for LocalBiz Co.',
      industry: 'Retail',
      icon: Briefcase,
      image: 'https://placehold.co/600x400.png',
      imageHint: 'small retail store',
      summary: 'Learn how our managed services and secure WiFi solutions helped LocalBiz Co. expand their operations efficiently and safely.',
      href: '/resources', // Updated to general resources page
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-muted/20"> 
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Real Results, Real Impact"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore how Flow Networks has partnered with organizations like yours to deliver transformative network solutions and measurable success.
        </motion.p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-primary/30 h-full hover:-translate-y-1"> 
                <div className="relative h-52 w-full overflow-hidden"> 
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={study.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> 
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <study.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold uppercase text-primary tracking-wider">{study.industry}</span>
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{study.summary}</p>
                </CardContent>
                <div className="p-6 pt-2 mt-auto"> 
                  <Button asChild variant="link" className="text-primary p-0 h-auto group/link font-semibold hover:text-primary/80">
                    <Link href={study.href}>
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="group rounded-lg px-8 py-3 text-base font-semibold border-primary/50 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary">
            <Link href="/resources"> 
              Explore All Case Studies <BookOpen className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
            </Link>
          </Button>
        </div>
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
    

    




