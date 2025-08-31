
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import type { Industry } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ParallaxSection } from '@/components/shared/ParallaxSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

type IndustryPageClientProps = {
  industry: Industry;
};

// This is the Client Component, responsible for rendering the UI and handling animations.
const IndustryPageClient: NextPage<IndustryPageClientProps> = ({ industry }) => {
  if (!industry) {
    // This is a fallback, but the server component should handle the notFound case.
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The requested industry solution could not be found.
        </p>
        <EnhancedButton asChild>
          <Link href="/industries">Explore Other Solutions</Link>
        </EnhancedButton>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      <ParallaxSection
        imageUrl={industry.image}
        altText={`Hero image for ${industry.name} solutions`}
        speed={0.3}
        className="h-[70vh] min-h-[500px]"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center h-full text-white">
            <Link href="/industries" className="text-sm font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: {industry.name}</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        </div>
      </ParallaxSection>

      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
                <div className="text-center max-w-3xl mx-auto">
                    <AnimatedHeading text="Our Bespoke Approach" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                    <p className="text-lg text-muted-foreground font-body">
                        {industry.description}
                    </p>
                </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text={`Core Solutions for ${industry.name}`} as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.features.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full text-center items-center">
                    <CardHeader>
                      <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full"><feature.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground text-sm">{feature.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title={`Ready to Elevate Your ${industry.name} Venue?`}
          description="Let's build a smarter, more efficient, and more engaging experience together. Contact our specialists today for a consultation tailored to your unique challenges."
          ctaText={industry.cta}
          ctaLink={`/contact?subject=${industry.name}Solution`}
        />
      </div>
    </div>
  );
};

export default IndustryPageClient;
