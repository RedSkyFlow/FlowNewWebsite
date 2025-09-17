
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, BrainCircuit, Sparkles, Briefcase } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';

// Placeholder data for open positions
const openPositions = [
  { title: 'Senior AI Engineer', department: 'Engineering', location: 'Remote / Johannesburg', href: '#', },
  { title: 'Lead Product Designer (UX/UI)', department: 'Design', location: 'Remote', href: '#', },
  { title: 'Enterprise Account Executive', department: 'Sales', location: 'Cape Town', href: '#', },
  { title: 'Network Solutions Architect', department: 'Engineering', location: 'Johannesburg', href: '#', },
];

const CareersPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Join Our Mission</p>
            <AnimatedHeading text="Build the Future of Intelligent Venues" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              We are a team of innovators, engineers, and strategists passionate about building the technology that will power the next generation of physical spaces. If you're driven by complex challenges and a powerful vision, you're in the right place.
            </p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Why Work at Flow Networks?" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <ul className="space-y-6 text-lg text-muted-foreground font-body">
                  <li className="flex items-start"><BrainCircuit className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><span><strong>Solve Meaningful Problems:</strong> Work on cutting-edge technology that has a real, tangible impact on how people experience the physical world.</span></li>
                  <li className="flex items-start"><Sparkles className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><span><strong>A Culture of Innovation:</strong> We are pioneers. You'll be encouraged to experiment, learn, and contribute to a vision that is defining an industry.</span></li>
                  <li className="flex items-start"><Users className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" /><span><strong>Collaborate with the Best:</strong> Join a diverse, talented team that values collaboration, transparency, and a shared commitment to excellence.</span></li>
                </ul>
              </div>
              <div>
                <Image src="/images/company/careers-hero.jpg" alt="A diverse and happy team from Flow Networks posing for a group photo." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="An authentic, energetic photo of a diverse group of people (our team). They should look genuinely happy and collaborative. Avoid stiff, corporate headshots. A modern office or a casual outdoor setting would work well." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Open Positions" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="max-w-4xl mx-auto">
              <GlassCard className="p-4">
                <div className="space-y-4">
                  {openPositions.map((position) => (
                    <Link href={position.href} key={position.title} className="block p-6 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{position.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="outline"><Briefcase className="w-3 h-3 mr-1.5"/>{position.department}</Badge>
                            <span className="text-sm text-muted-foreground">{position.location}</span>
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <EnhancedButton variant="ghost" className="group-hover:text-primary">
                            View Opening <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </EnhancedButton>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Don't See a Fit? Reach Out Anyway."
          description="We are always looking for exceptional talent. If you believe you have what it takes to help us build the future, send us your resume and tell us why you'd be a great fit for our mission."
          ctaText="Contact Our Talent Team"
          ctaLink="/contact?subject=GeneralCareerInquiry"
        />
      </div>
    </div>
  );
};

export default CareersPage;
