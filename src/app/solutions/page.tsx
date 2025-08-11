
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import GlassCard from '@/components/shared/GlassCard';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SolutionsPage: NextPage = () => {
  const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
  const solutionPillars = solutionsNavLink?.subLinks || [];
  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent', 'hover-glow-impact', 'hover-glow-premium', 'hover-glow-innovation'];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <ScrollAnimatedSection as="div" className="py-16 md:py-24 pt-32 md:pt-40 text-center">
        <AnimatedHeading
          text="Integrated Solutions for Intelligent Venues"
          as="h1"
          className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
          Flow Networks delivers integrated solutions designed to transform your physical spaces into dynamic, responsive, and intelligent environments, orchestrated by our visionary AI Gateway.
        </p>
      </ScrollAnimatedSection>
      
      <ScrollAnimatedSection as="div" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutionPillars.map((solution, i) => (
            <motion.div
              key={solution.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <GlassCard className={cn("flex flex-col h-full text-center items-center", glowClasses[i % glowClasses.length])}>
                <CardHeader className="items-center p-6">
                  {solution.icon && (
                    <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                      <solution.icon className="w-10 h-10 text-primary" />
                    </div>
                  )}
                  <CardTitle className="font-headline text-xl text-foreground">{solution.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6">
                  <p className="text-muted-foreground text-sm mb-4">{solution.shortDescription}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto w-full">
                  <EnhancedButton asChild variant="link" size="sm" className="p-0 h-auto font-semibold group">
                    <Link href={solution.href}>
                      <span className="flex items-center gap-2">Learn More <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 h-4 w-4" /></span>
                    </Link>
                  </EnhancedButton>
                </CardFooter>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </ScrollAnimatedSection>
      
      <div className="py-16 md:py-24">
        <CallToActionSection />
      </div>
    </div>
  );
};

export default SolutionsPage;
