
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Assuming images might be used for each industry card eventually
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/constants';
import CallToActionSection from '@/components/sections/CallToActionSection';

export const metadata: Metadata = {
  title: 'AI Solutions by Industry | Flow Networks AI Gateway',
  description: 'Explore tailored AI Gateway solutions and integrated services for Hospitality, Retail, Airports, Healthcare, Education, Franchise Networks, and more. Flow Networks empowers your venue with intelligent, presence-verified services.',
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
          Flow Networks understands that each industry has unique challenges, operational nuances, and strategic goals. Our AI Gateway, in conjunction with integrated partner services, provides tailored solutions that deliver tangible benefits. We translate the conceptual power of the AI Gateway into concrete, relatable solutions that address your specific vertical needs, transforming physical venues into intelligent, data-driven ecosystems.
        </p>
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
          Explore how we apply our suite of offerings—including the AI Gateway, Intelligent Wi-Fi (powered by Purple WiFi), Automated Communication (via Everlytic), and Premium Content (with CNNTAP)—to solve real-world problems and create new opportunities across various sectors.
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
                {/* Using the main description from INDUSTRIES_DATA for the overview */}
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
