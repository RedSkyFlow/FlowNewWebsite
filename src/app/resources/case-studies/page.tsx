'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building, Briefcase, Hotel, Drama } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

// Placeholder data for all case studies
const allCaseStudies = [
  { title: 'Enterprise Network Transformation for Innovatech Corp', industry: 'Technology', icon: Building, image: '/images/case-studies/innovatech.jpg', summary: 'A complete overhaul of network infrastructure led to a 40% increase in operational efficiency.', href: '#', },
  { title: 'SMB Growth Powered by Secure Connectivity', industry: 'Retail', icon: Briefcase, image: '/images/case-studies/localbiz.jpg', summary: 'Managed services and secure WiFi helped LocalBiz Co. expand their operations efficiently.', href: '#', },
  { title: 'Enhancing the Guest Experience at The Grand Plaza', industry: 'Hotels', icon: Hotel, image: '/images/case-studies/grandplaza.jpg', summary: 'Seamless WiFi and personalized engagement drove a 15% increase in positive reviews.', href: '#', },
  { title: 'Powering a High-Density Stadium Network', industry: 'Stadiums', icon: Drama, image: '/images/case-studies/stadium.jpg', summary: 'A flawless, high-density solution handled 50,000+ concurrent users without issue.', href: '#', },
  { title: 'Cashless Transformation for a Major Music Festival', industry: 'Events', icon: Drama, image: '/images/case-studies/festival.jpg', summary: 'Allxs integration led to a 25% increase in per-capita spend and eliminated queues.', href: '#', },
  { title: 'Operational Efficiency in Quick-Service Retail', industry: 'Hospitality', icon: Briefcase, image: '/images/case-studies/mcdonalds.jpg', summary: 'Intelligent WiFi reduced IT engineer visits by 90% across hundreds of locations.', href: '#', },
];

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/resources" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Resources
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Our Work in Action</p>
            <AnimatedHeading text="Real Results, Real Impact" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCaseStudies.map((study) => (
                <GlassCard key={study.title} className="group p-0 overflow-hidden flex flex-col">
                  <div className="relative h-52 w-full overflow-hidden"> 
                    <Image 
                      src={study.image} 
                      alt={study.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> 
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <study.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs font-semibold uppercase text-primary tracking-wider">{study.industry}</span>
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-primary">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{study.summary}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-2 mt-auto"> 
                    <EnhancedButton asChild variant="link" size="sm" className="p-0 h-auto font-semibold">
                      <Link href={study.href}>
                        Read Case Study <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Write Your Own Success Story?"
          description="Let's discuss the challenges your venue is facing. Our team can architect a tailored solution designed to deliver the kind of measurable results you see here."
          ctaText="Become Our Next Case Study"
          ctaLink="/contact?subject=CaseStudyInquiry"
        />
      </div>
    </div>
  );
};

export default CaseStudiesPage;