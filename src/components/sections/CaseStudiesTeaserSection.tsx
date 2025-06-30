
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Building, Briefcase } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Image from "next/image";
import { EnhancedButton } from '../ui/enhanced-button';

const caseStudies = [
  {
    title: 'Enterprise Network Transformation for Innovatech Corp',
    industry: 'Technology',
    icon: Building,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern office tech',
    href: '/resources/case-studies/innovatech-corp', 
  },
  {
    title: 'SMB Growth Powered by Secure Connectivity for LocalBiz Co.',
    industry: 'Retail',
    icon: Briefcase,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'small retail store',
    summary: 'Learn how our managed services and secure WiFi solutions helped LocalBiz Co. expand their operations efficiently and safely.',
    href: '/resources/case-studies/localbiz-co', 
  },
];

const CaseStudiesTeaserSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20 backdrop-blur-sm"> 
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Real Results, Real Impact"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
          wordAnimation
        />
        <p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
        >
          Explore how Flow Networks has partnered with organizations like yours to deliver transformative network solutions and measurable success.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="group bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-slow ease-gentle shadow-[var(--shadow-level-1)] hover:shadow-[var(--shadow-level-4),var(--glow-secondary)] hover:border-secondary/30 will-change-transform will-change-shadow will-change-border-color hover:scale-[1.02] hover:-translate-y-[4px]">
              <div className="relative h-52 w-full overflow-hidden"> 
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={study.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> 
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <study.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold uppercase text-primary tracking-wider">{study.industry}</span>
                </div>
                <CardTitle className="font-headline text-xl text-foreground transition-colors group-hover:text-primary">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{study.summary}</p>
              </CardContent>
              <div className="p-6 pt-2 mt-auto"> 
                <EnhancedButton asChild variant="tertiary" size="sm" className="p-0 h-auto font-semibold">
                  <Link href={study.href}>
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </EnhancedButton>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <EnhancedButton asChild size="lg" variant="outline" glow>
            <Link href="/resources/case-studies"> 
              Explore All Case Studies <BookOpen className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
            </Link>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaserSection;
