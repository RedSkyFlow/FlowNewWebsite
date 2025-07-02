'use client';

import { type LucideIcon, Lock, Puzzle, Rocket, Brain } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '../shared/ScrollAnimatedSection';
import { EnhancedCard } from '@/components/ui/EnhancedCard';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';


type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Content from "Home Page Content - Section 3 - Why Choose Us - Key Benefits.md"
const whyChooseItems: WhyChooseItem[] = [
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
        <ScrollAnimatedSection>
            <section className="py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedHeading
                        text="The Flow Networks Advantage"
                        as="h2"
                        className="text-3xl font-bold text-center sm:text-4xl !font-headline [text-shadow:0_0_20px_hsla(var(--primary)/0.4)]"
                        wordAnimation={true}
                    />
                    <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mt-4 mb-16">
                        We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just intelligent, but transformative. Here’s why industry leaders choose us.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {whyChooseItems.map((item, index) => (
                            <ScrollAnimatedSection key={item.title} delay={index * 0.1}>
                                <EnhancedCard
                                    variant="3d"
                                    glowColor="primary"
                                    className="h-full"
                                >
                                    <CardHeader className="items-center text-center p-6">
                                        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                            <item.icon className="w-12 h-12 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center p-6 pt-0">
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </EnhancedCard>
                            </ScrollAnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollAnimatedSection>
    );
};

export default WhyChooseUsSection;
