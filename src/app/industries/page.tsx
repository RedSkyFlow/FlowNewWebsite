'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const IndustriesPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <p className="font-semibold text-accent mb-4 text-gradient-animated">Tailored Solutions for Your World</p>
          <AnimatedHeading text="Intelligence, Engineered for Your Industry" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            We don't believe in one-size-fits-all. We provide solutions engineered to solve the unique challenges of your world. Explore how the Flow Networks ecosystem is transforming industries, one intelligent venue at a time.
          </motion.p>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {INDUSTRIES_DATA.map((industry, i) => (
              <motion.div 
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="h-full"
              >
                <GlassCard className="flex flex-col h-full text-center items-center">
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-sm">{industry.description}</p>
                  </CardContent>
                  <CardFooter>
                    <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                      <Link href={`/industries/${industry.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
            <div className="mb-4 inline-block"><Building2 className="w-10 h-10 text-accent" /></div>
            <AnimatedHeading text="Don't See Your Industry?" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
              Our platform is designed for flexibility. If you don't see your specific vertical listed, it doesn't mean we can't help. Our core technologies can be adapted to solve challenges in virtually any physical environment.
            </p>
            <div className="mt-8">
              <EnhancedButton asChild variant="secondary" glow>
                <Link href="/contact?subject=CustomIndustrySolution">Discuss a Custom Solution</Link>
              </EnhancedButton>
            </div>
          </Card>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to See What's Possible?"
          description="Let's explore how our intelligent venue ecosystem can be tailored to the specific needs and goals of your industry. Contact us for a personalized consultation."
          ctaText="Book an Industry-Specific Demo"
          ctaLink="/contact?subject=IndustryDemo"
        />
      </div>
    </div>
  );
};

export default IndustriesPage;