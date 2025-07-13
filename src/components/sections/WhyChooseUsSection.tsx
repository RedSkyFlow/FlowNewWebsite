
'use client';

import { type LucideIcon, Lock, Puzzle, Rocket, Brain } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '../shared/ScrollAnimatedSection';
import { Card } from '@/components/ui/card';

const whyChooseItems: { icon: LucideIcon; title: string; description: string }[] = [
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
        <section className="py-20 md:py-28 bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50 z-0"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <AnimatedHeading
                    text="Flow Networks Advantage"
                    as="h2"
                    className="text-3xl font-bold text-center sm:text-4xl !font-headline [text-shadow:0_0_20px_hsla(var(--primary)/0.4)]"
                    wordAnimation={true}
                />
                <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mt-4 mb-16">
                    We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just intelligent, but transformative. Here’s why industry leaders choose us.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {whyChooseItems.map((item, index) => (
                        <ScrollAnimatedSection key={item.title} delay={index * 0.1} className="h-full">
                           <div className="group h-full">
                             <Card className="perspex-card border-none h-full flex flex-col p-6 text-center items-center">
                                  <div className="relative z-10 p-3 rounded-full bg-primary/20 flex items-center justify-center mb-4 shadow-lg shadow-primary/10">
                                      <item.icon className="w-8 h-8 text-primary" />
                                  </div>
                                  <h3 className="relative z-10 text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                  <p className="relative z-10 text-muted-foreground text-sm leading-relaxed flex-grow">{item.description}</p>
                             </Card>
                           </div>
                        </ScrollAnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
