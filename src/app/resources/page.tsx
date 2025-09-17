'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Wrench, Library } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const ResourcesPage: NextPage = () => {
  const resourceCategories = [
    { 
      icon: BookOpen, 
      title: 'Case Studies', 
      description: 'Explore real-world success stories. See how we\'ve partnered with industry leaders to deliver transformative results and measurable ROI.',
      ctaText: 'View Case Studies',
      ctaLink: '/resources/case-studies',
    },
    { 
      icon: FileText, 
      title: 'Guides & Articles', 
      description: 'Dive deep into the strategies and technologies shaping the future of intelligent venues with our in-depth guides, white papers, and articles.',
      ctaText: 'Read Our Guides',
      ctaLink: '/resources/guides-articles',
    },
    { 
      icon: Wrench, 
      title: 'Tools & Calculators', 
      description: 'Access practical tools to help you plan and justify your investment, including our ROI Calculator and other useful estimators.',
      ctaText: 'Use Our Tools',
      ctaLink: '/resources/tools',
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-4 inline-block"><Library className="w-12 h-12 text-accent" /></div>
            <AnimatedHeading text="The Flow Networks Knowledge Hub" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Explore our collection of expert insights, success stories, and practical tools designed to help you build and optimize your intelligent venue.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <GlassCard className="flex flex-col h-full text-center items-center">
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-sm">{category.description}</p>
                  </CardContent>
                  <CardFooter>
                    <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                      <Link href={category.ctaLink}>
                        {category.ctaText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection
          title="Ready to Become an Expert?"
          description="Our team is dedicated to helping you navigate the complexities of building an intelligent venue. Contact us for a personalized consultation based on your specific needs."
          ctaText="Talk to a Strategist"
          ctaLink="/contact?subject=ResourceConsultation"
        />
      </div>
    </div>
  );
};

export default ResourcesPage;