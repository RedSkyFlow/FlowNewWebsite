'use client';

import Link from 'next/link';
import Image from "next/image";
import { ArrowRight, BookOpen, Building, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';

const caseStudies = [
  {
    title: 'Enterprise Network Transformation for Innovatech Corp',
    industry: 'Technology',
    icon: Building,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern office tech',
    summary: 'See how a complete overhaul of network infrastructure led to a 40% increase in operational efficiency and readiness for AI-driven tools.',
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
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Real Results, Real Impact"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4"
          wordAnimation
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground font-body md:text-lg mb-12">
          Explore how Flow Networks has partnered with organizations like yours to deliver transformative network solutions and measurable success.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <GlassCard key={study.title} className="group p-0 overflow-hidden flex flex-col">
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
        <div className="text-center mt-16">
          <EnhancedButton asChild size="lg" variant="outline" glow>
            <Link href="/resources/case-studies">
              Explore All Case Studies <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaserSection;