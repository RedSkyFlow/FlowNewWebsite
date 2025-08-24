'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Zap, UsersRound, UserSquare } from 'lucide-react';
import Image from 'next/image';import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const PartnersPage: NextPage = () => {
  const partnerPrograms = [
    {
      icon: UsersRound,
      title: 'Reseller Program', 
      description: 'Integrate our industry-leading solutions into your own portfolio. We provide the technology, training, and support you need to successfully sell to your existing client base.',
      ctaText: 'Become a Reseller',
      ctaLink: '/contact?subject=ResellerProgram',
    },
    { 
      icon: UserSquare, 
      title: 'Agent Program',
      description: 'Earn significant commissions by referring new clients to Flow Networks. Ideal for consultants and industry influencers who want to recommend a trusted, high-value solution.',
      ctaText: 'Become an Agent',
      ctaLink: '/contact?subject=AgentProgram',
    },
  ];

  const techPartners = ['purple', 'allxs', 'everlytic', 'cnntap', 'friendly-wifi'];
  const logoPath = (name: string) => {
    switch (name) {
      case 'purple':
        return '/images/logos/purple-logo-white-v2.svg';
      case 'allxs':
        return '/images/logos/Allxs_logo.png';
      case 'everlytic':
        return '/images/logos/Everlytic logo.png';
      case 'cnntap':
        return '/images/logos/CNN HPP logo.webp';
      case 'friendly-wifi':
        return '/images/logos/Friendly Wifi Approved Partner.png';
      default: return ''; // Or a placeholder path if needed
    }
  };

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Growth Through Collaboration</p>
            <AnimatedHeading text="Partner with Flow Networks" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              Our ecosystem is built on the power of partnership. Whether you're a technology leader, a reseller, or a consultant, we provide the tools and support to help you succeed.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading text="Our Technology Partners" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            <p className="text-lg text-muted-foreground font-body">We integrate best-in-class technologies to build our comprehensive solutions. These are the industry leaders that form the backbone of our platform.</p>
          </div>
          <Card className="perspex-card p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {techPartners.map(partner => (
                <Image key={partner} src={logoPath(partner)} alt={`${partner} Logo`} width={150} height={50} className="opacity-80 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </Card>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading text="Join Our Partner Network" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerPrograms.map((program) => (
              <GlassCard key={program.title} className="flex flex-col text-center items-center">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-body text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <EnhancedButton asChild variant="secondary" glow>
                    <Link href={program.ctaLink}>{program.ctaText}</Link>
                  </EnhancedButton>
                </CardFooter>
              </GlassCard>
            ))}
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection
          title="Have a Different Partnership in Mind?"
          description="We are always open to exploring new and innovative ways to collaborate. If you have an idea for a partnership, we'd love to hear it."
          ctaText="Propose a Partnership"
          ctaLink="/contact?subject=CustomPartnership"
        />
      </div>
    </div>
  );
};

export default PartnersPage;