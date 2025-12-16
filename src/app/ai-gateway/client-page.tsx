'use client';

import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight } from 'lucide-react';
import { AI_GATEWAY_SUB_LINKS } from '@/lib/constants';

export default function AIGatewayClientPage() {
    return (<>
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <AnimatedHeading
                text="The Flow Networks AI Gateway"
                as="h1"
                className="text-4xl font-bold text-foreground sm:text-5xl mb-6 !font-headline"
            />
            <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg mb-12">
                The AI Gateway is the central nervous system of your intelligent venue. It leverages your existing Wi-Fi infrastructure to provide secure,
                presence-verified access to bespoke AI agents, delivering hyper-local and context-aware experiences. We empower spaces to think, adapt, and deliver unparalleled value.
            </p>
        </div>

        <div className="container mx-auto px-4 py-0 md:py-0">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-16 md:pb-24">
                {AI_GATEWAY_SUB_LINKS.map((section) => (
                    <Card key={section.label} className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-card hover:-translate-y-1">
                        <CardHeader className="items-center text-center">
                            <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                                {section.icon && <section.icon className="w-10 h-10 text-primary" />}
                            </div>
                            <CardTitle className="font-headline text-xl text-foreground">{section.label}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm mb-4 text-center">{section.shortDescription}</p>
                        </CardContent>
                        <div className="p-6 pt-4 mt-auto">
                            <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                                <Link href={section.href}>
                                    Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </EnhancedButton>
                        </div>
                    </Card>
                ))}
            </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <AnimatedHeading
                text="Ready to integrate intelligence?"
                as="h2"
                className="font-headline text-2xl text-foreground mb-4"
            />
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                The AI Gateway is a core component of our broader solution set. Discover how it integrates with other intelligent services.
            </p>
            <EnhancedButton asChild size="lg" variant="outline">
                <Link href="/solutions">
                    Explore All Flow Networks Solutions
                </Link>
            </EnhancedButton>
        </div>
    </>
    );
}
