// src/components/sections/WhyChooseUsSection.tsx
'use client';

import { type LucideIcon, Lock, Puzzle, Rocket, Brain } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import ScrollAnimatedSection from '../shared/ScrollAnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';

const whyChooseItems: { icon: LucideIcon; title: string; description:string }[] = [
  {
    icon: Lock,
    title: 'Unmatched Security & Control',
    description: "Our AI Gateway model ensures that your valuable data and bespoke services are only accessible to authenticated users physically present in your venue. You control who sees what, when.",
  },
  {
    icon: Brain,
    title: 'Deep, Actionable Insights',
    description: "We go beyond simple analytics. Our platform translates raw location and engagement data into clear, actionable intelligence that drives operational efficiency and revenue.",
  },
  {
    icon: Puzzle,
    title: 'Bespoke, Integrated Solutions',
    description: "We don't believe in one-size-fits-all. We develop custom AI agents and workflows that integrate seamlessly with your existing systems (PMS, POS, CRM) for a truly unified solution.",
  },
  {
    icon: Rocket,
    title: 'Future-Ready Platform',
    description: "Our solutions are built on a scalable, flexible foundation. We are constantly innovating, ensuring your venue is always ready for the next generation of AI-powered experiences.",
  },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-20 md:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <AnimatedHeading
                    text="The Flow Networks Advantage"
                    as="h2"
                    className="text-3xl font-bold text-center sm:text-4xl"
                    wordAnimation={true}
                />
                <p className="mx-auto max-w-3xl text-center text-muted-foreground font-body md:text-lg mt-4 mb-16">
                    We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just intelligent, but transformative. Here’s why industry leaders choose us.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseItems.map((item, index) => (
                        <ScrollAnimatedSection key={item.title} delay={index * 0.1} className="h-full group">
                           {/* THE FIX: Added overflow-hidden to the Card to constrain its content. */}
                           <Card className={cn("perspex-card border-none h-full flex flex-col text-center items-center overflow-hidden")}>
                                <CardHeader className="items-center">
                                    <div className="p-3 rounded-full bg-primary/20 flex items-center justify-center mb-4 icon-illuminated-light">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl text-floating-light">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.description}</p>
                                </CardContent>
                           </Card>
                        </ScrollAnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
