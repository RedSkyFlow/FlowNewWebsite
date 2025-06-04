
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/constants';
import CallToActionSection from '@/components/sections/CallToActionSection';

export const metadata: Metadata = {
  title: 'AI Solutions by Industry | Flow Networks AI Gateway',
  description: 'Explore tailored AI Gateway solutions for various industries including Hospitality, Retail, Airports, Healthcare, Education, and more. Flow Networks empowers your venue with intelligent, presence-verified services.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="Tailored AI Solutions for Your Industry"
            as="h1"
            className="text-4xl font-bold text-center text-foreground sm:text-5xl md:text-6xl mb-6 !font-headline"
          />
          <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
            Flow Networks understands that each industry has unique challenges and opportunities. Our AI Gateway and integrated solutions are designed to be adaptable, providing bespoke AI agents and services that address specific vertical needs. Explore how we transform physical venues into intelligent, data-driven ecosystems across various sectors.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry) => (
              <Card key={industry.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                <CardHeader className="flex-row items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{industry.description.substring(0, 150)}...</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full group">
                    <Link href={`/industries/${industry.id}`}>
                      Explore {industry.name} Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
}
