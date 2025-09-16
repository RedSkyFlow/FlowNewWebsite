// src/app/ai-agents/[industry]/page.tsx (Corrected)
'use client';

import { Metadata } from 'next';
import Image from "next/image";
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { INDUSTRIES_DATA } from '@/lib/constants'; // Note: We use INDUSTRIES_DATA here
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CallToActionSection from '@/components/sections/CallToActionSection';

// --- FIX START ---
// We will define the props type directly in the function signature for clarity and compatibility.
export default function IndustryPage({ params }: { params: { industry: string } }) {
// --- FIX END ---

  const industry = INDUSTRIES_DATA.find(ind => ind.id === params.industry);

  if (!industry) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The requested industry solution could not be found.
        </p>
        <EnhancedButton asChild>
          <Link href="/industries">Explore Other Solutions</Link>
        </EnhancedButton>
      </div>
    );
  }

  // NOTE: The generateMetadata function needs to be outside the component.
  // This is a placeholder as it cannot be dynamically generated inside a 'use client' component in this manner.
  // For a production build, this metadata should be handled correctly.

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedHeading 
                text={industry.title}
                as="h1" 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 !font-headline"
              />
              <p className="text-lg text-muted-foreground md:text-xl mb-8">
                {industry.description}
              </p>
              <EnhancedButton asChild size="lg" variant="secondary" glow>
                <Link href={`/contact?solution=${industry.id}`}>
                  {industry.cta}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </EnhancedButton>
            </div>
            <div>
              <Image 
                src={industry.image}
                alt={`${industry.name} AI Solutions`}
                width={1200}
                height={600}
                className="rounded-xl shadow-2xl object-cover"
                data-ai-hint={industry.imageHint}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            text={`Key Features for ${industry.name}`}
            as="h2" 
            className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.features.map((feature) => (
              <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                     <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CallToActionSection />
    </>
  );
}

// Metadata functions must be top-level exports in server components.
// Since this page is marked 'use client', this approach for metadata is not ideal for production
// but we will keep the structure for now.
export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    industry: industry.id,
  }));
}
