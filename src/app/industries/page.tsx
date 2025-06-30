
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/constants';
import CallToActionSection from '@/components/sections/CallToActionSection';

export const metadata: Metadata = {
  title: 'AI Solutions by Industry',
  description: 'Explore tailored AI Gateway solutions and integrated services for Hospitality, Retail, Airports, Healthcare, Education, and more. Flow Networks empowers your venue with intelligent, presence-verified services.',
};

export default function IndustriesPage() {
  return (
    <>
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Tailored Solutions for Your Industry"
          as="h1"
          className="text-4xl font-bold text-center text-foreground sm:text-5xl md:text-6xl mb-6 !font-headline"
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
          Flow Networks understands that each industry has unique challenges and strategic goals. Our AI Gateway, combined with integrated partner services, provides tailored solutions that deliver tangible benefits and create new opportunities across various sectors.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((industry) => (
            <Card key={industry.id} className="group bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-500 ease-gentle shadow-lg hover:shadow-primary/20 hover:border-primary/30 will-change-transform hover:-translate-y-1">
              <CardHeader className="flex-row items-center space-x-4 p-6">
                <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground transition-colors group-hover:text-primary">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{industry.description.substring(0, 150)}...</p>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                  <Link href={`/industries/${industry.id}`}>
                    Explore Solutions <ArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </EnhancedButton>
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
