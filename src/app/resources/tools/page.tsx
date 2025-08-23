
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ROICalculator from '@/components/shared/ROICalculator';

const ToolsPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/resources" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Resources
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Practical Utilities</p>
            <AnimatedHeading text="Tools & Calculators" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              Make data-driven decisions for your venue. Our practical tools are designed to help you quantify the potential impact and ROI of implementing Flow Networks solutions.
            </p>
          </div>
        </ScrollAnimatedSection>

        <ROICalculator />
        
        <CallToActionSection 
          title="Ready for a Personalized Estimate?"
          description="While our tools provide a great starting point, a personalized consultation can uncover deeper insights. Contact our specialists for a detailed analysis tailored to your unique venue."
          ctaText="Get a Custom ROI Analysis"
          ctaLink="/contact?subject=CustomROIAnalysis"
        />
      </div>
    </div>
  );
};

export default ToolsPage;
