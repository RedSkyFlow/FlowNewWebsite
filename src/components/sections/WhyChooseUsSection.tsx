
'use client';

import { type LucideIcon, Lock, Puzzle, Rocket, Brain } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '../shared/ScrollAnimatedSection';
import { FlowNetworksFeatureCard } from '../shared/NeonGlassCardExamples';

type WhyChooseItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: 'Unmatched Security & Control',
    description: "Our AI Gateway model ensures that your valuable data and bespoke services are only accessible to authenticated users physically present in your venue. You control who sees what, when.",
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Deep, Actionable Insights',
    description: "We go beyond simple analytics. Our platform translates raw location and engagement data into clear, actionable intelligence that drives operational efficiency and revenue.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-white" />,
    title: 'Bespoke, Integrated Solutions',
    description: "We don't believe in one-size-fits-all. We develop custom AI agents and workflows that integrate seamlessly with your existing systems (PMS, POS, CRM) for a truly unified solution.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
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
                           <FlowNetworksFeatureCard
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                           />
                        </ScrollAnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
