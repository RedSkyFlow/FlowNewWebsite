'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, School, GraduationCap, BarChart3, ShieldCheck, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const EducationCommercePage: NextPage = () => {
  const platformFeatures = [
    { 
      icon: ShoppingCart, 
      title: 'Cashless Canteen & Tuck Shop', 
      description: 'Eliminate cash on campus. Students can pay for meals and items instantly using pre-loaded accounts via cards, wristbands, or biometrics.' 
    },
    { 
      icon: GraduationCap, 
      title: 'Fee & Fundraising Collection', 
      description: 'Simplify the collection of school fees, trip payments, and fundraising contributions through a secure, centralized digital platform for parents.' 
    },
    { 
      icon: BarChart3, 
      title: 'Real-Time Financial Control', 
      description: 'Gain a clear, real-time overview of all financial activity on campus. Track sales, manage inventory, and simplify reconciliation for your administrative team.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/allxs" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Allxs
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Allxs Platform Deep Dive</p>
            <AnimatedHeading text="Education Commerce: The Modern, Cashless Campus" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Create a safer, more efficient, and data-driven environment for students, parents, and staff with the market-leading integrated commerce solution for schools.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="From Cash Risks to Campus Control" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Managing cash on a school campus is a constant source of risk and administrative burden—from security concerns to the time-consuming process of counting and reconciliation.</span>
                  <br/>
                  <span>The Allxs platform eliminates these challenges entirely. By creating a closed-loop cashless ecosystem, you foster a safer environment, dramatically improve the speed of service in places like canteens, and provide parents with a simple, secure way to manage their child's funds.</span>
                </p>
              </div>
              <div>
                <Image src="/images/allxs-education-hero.jpg" alt="A student happily paying for a healthy lunch in a modern school canteen using a simple tap-to-pay card." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A bright, clean, and modern school cafeteria. A smiling student is tapping a branded school ID card on a POS terminal to pay for a tray of healthy food. The cashier is also smiling. The atmosphere is efficient, safe, and positive." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="An All-in-One Solution for Your School" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformFeatures.map((feature) => (
                <GlassCard key={feature.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><ShieldCheck className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="A Proven Leader in Education" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Allxs is the trusted partner for some of the most prestigious academic institutions, including the African Leadership Academy, St John's College, and Kingsmead College. Our platform is proven to deliver up to a 90% faster transaction time and a 40% reduction in cash handling costs.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Modernize Your Campus?"
          description="Join the growing number of schools embracing a safer, more efficient cashless ecosystem. Contact us for a personalized demo for your institution."
          ctaText="Request a School Demo"
          ctaLink="/contact?subject=EducationSolutionDemo"
        />
      </div>
    </div>
  );
};

export default EducationCommercePage;