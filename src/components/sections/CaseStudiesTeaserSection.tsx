// src/components/sections/CaseStudiesTeaserSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Hotel, Drama } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';

// Placeholder data, consistent with case-studies/page.tsx
const featuredStudies = [
  {
    title: 'Enhancing the Guest Experience at The Grand Plaza',
    industry: 'Hotels',
    icon: Hotel,
    image: '/images/industries/hotels-hero.jpg',
    summary: 'Seamless WiFi and personalized engagement drove a 15% increase in positive reviews.',
    href: '/resources/case-studies/grand-plaza', // Note: This will be a 404 until the page is created
  },
  {
    title: 'Powering a High-Density Stadium Network',
    industry: 'Stadiums',
    icon: Drama,
    image: '/images/industries/Stadiums.png',
    summary: 'A flawless, high-density solution handled 50,000+ concurrent users without issue.',
    href: '/resources/case-studies/titans-stadium', // Note: This will be a 404 until the page is created
  },
];

const CaseStudiesTeaserSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading
            text="Real-World Results"
            as="h2"
            className="text-3xl font-bold sm:text-4xl"
          />
          <p className="text-lg text-muted-foreground font-body mt-4">
            Our platform isn't just theory. We deliver tangible, measurable results for the most demanding venues.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredStudies.map((study) => (
            <GlassCard key={study.title} className="group p-0 overflow-hidden flex flex-col hover-glow-primary">
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
        <div className="text-center mt-12">
            <EnhancedButton asChild variant="outline">
                <Link href="/resources/case-studies">View All Case Studies</Link>
            </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaserSection;
