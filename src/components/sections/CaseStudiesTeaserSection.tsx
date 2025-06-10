
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Building, Briefcase } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'Enterprise Network Transformation for Innovatech Corp',
    industry: 'Technology',
    icon: Building,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern office technology',
    summary: 'Discover how Flow Networks redesigned Innovatech\'s infrastructure for enhanced scalability and performance.',
    href: '/resources/case-studies/innovatech-corp',
  },
  {
    title: 'SMB Growth Powered by Secure Connectivity for LocalBiz Co.',
    industry: 'Retail',
    icon: Briefcase,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'small business retail',
    summary: 'Learn how our managed services helped LocalBiz Co. expand securely and efficiently.',
    href: '/resources/case-studies/localbiz-co',
  },
];

const CaseStudiesTeaserSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Proven Success Stories"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-6 !font-headline"
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12">
          See how Flow Networks has helped businesses like yours achieve their networking goals through innovative solutions and expert implementation.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} className="shadow-lg hover:shadow-xl transition-shadow bg-card overflow-hidden group flex flex-col">
              <div className="relative h-48 w-full">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={study.imageHint}
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-1">
                  <study.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold uppercase text-primary tracking-wider">{study.industry}</span>
                </div>
                <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{study.summary}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="text-primary p-0 h-auto group/link">
                  <Link href={study.href}>
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/5 hover:border-primary">
            <Link href="/resources/case-studies">
              View All Case Studies <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaserSection;
