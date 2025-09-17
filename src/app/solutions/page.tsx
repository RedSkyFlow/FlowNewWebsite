
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';

import { MAIN_NAV_LINKS } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const SolutionsPage: NextPage = () => {
  const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
  const allSolutions = solutionsNavLink?.subLinks || [];

  const businessSolutions = allSolutions.filter(
    s => s.category === 'Business Solutions'
  );
  
  const technicalSolutions = allSolutions.filter(
    s => s.category === 'Technical Solutions' || s.category === 'Services' || s.category === 'Vision & Innovation'
  );

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />

      {/* --- 1. Hero Section --- */}
      <ScrollAnimatedSection as="section" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="font-semibold text-accent mb-4 text-gradient-animated">Our Ecosystem</p>
              <AnimatedHeading 
                text="From Vision to Value: Your Toolkit for an Intelligent Venue"
                as="h1"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter"
                wordAnimation 
              />
              <motion.p 
                className="mt-6 text-lg md:text-xl text-muted-foreground font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Flow Networks provides a comprehensive ecosystem of solutions. Whether you're looking to enhance guest engagement, optimize operations, or build a future-ready foundation, our platform has you covered.
              </motion.p>
            </div>
            <div>
              <motion.div
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Card className="perspex-card border-none">
                  <Image 
                    src="/images/solutions/solutions-hub-hero.png"
                    alt="A conceptual 'Solutions Hub' dashboard, showing interconnected app icons for various Flow Networks solutions, rendered in a sophisticated dark theme with glowing elements."
                    width={800}
                    height={600}
                    className="rounded-lg object-cover"
                    data-ai-hint="conceptual solutions hub dashboard"
                    priority
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* --- 2. Business Solutions Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="Solutions for Business Growth"
            as="h2"
            className="text-3xl font-bold text-center sm:text-4xl mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {businessSolutions.map((solution, i) => (
              <motion.div
                key={solution.href}
                className="group h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="perspex-card border-none h-full flex flex-col text-center items-center p-6 hover:shadow-glow-secondary">
                  <CardHeader className="items-center">
                    {solution.icon && (
                      <div className="p-4 rounded-full bg-secondary/20 inline-block mb-4">
                        <solution.icon className="w-8 h-8 text-secondary" />
                      </div>
                    )}
                    <CardTitle className="font-headline text-xl text-foreground">{solution.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{solution.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="pt-4 mt-auto">
                    <EnhancedButton asChild variant="outline" size="sm">
                      <Link href={solution.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- 3. Technical Solutions Section --- */}
      <ScrollAnimatedSection as="section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="Technical, Service & Innovation Solutions"
            as="h2"
            className="text-3xl font-bold text-center sm:text-4xl mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {technicalSolutions.map((solution, i) => (
              <motion.div
                key={solution.href}
                className="group h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                 <Card className="perspex-card border-none h-full flex flex-col text-center items-center p-6 hover:shadow-glow-primary">
                  <CardHeader className="items-center">
                    {solution.icon && (
                      <div className="p-4 rounded-full bg-primary/20 inline-block mb-4">
                        <solution.icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <CardTitle className="font-headline text-xl text-foreground">{solution.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{solution.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="pt-4 mt-auto">
                    <EnhancedButton asChild variant="outline" size="sm">
                      <Link href={solution.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* --- 4. Final CTA Section --- */}
      <CallToActionSection />
    </div>
  );
};

export default SolutionsPage;
