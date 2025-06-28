
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle, TrendingUp, ServerIcon as ServerIconLucide, Network } from 'lucide-react'; // Renamed ServerIcon to ServerIconLucide
import { AI_GATEWAY_SUB_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The AI Gateway | Flow Networks',
  description: 'Explore the Flow Networks AI Gateway - transforming venues with intelligent, presence-verified services through secure WiFi authentication.',
};

export default function AIGatewayPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="The Flow Networks AI Gateway"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        The AI Gateway is the central nervous system of your intelligent venue. It leverages your existing Wi-Fi infrastructure to provide secure,
        presence-verified access to bespoke AI agents, delivering hyper-local and context-aware experiences. We empower spaces to think, adapt, and deliver unparalleled value.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {AI_GATEWAY_SUB_LINKS.map((section) => (
          <Card key={section.label} className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-card hover:-translate-y-1">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                <section.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-foreground">{section.label}</CardTitle>
            </CardHeader>
            {/* <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4 text-center">{section.description}</p> 
            </CardContent> */}
            <div className="p-6 pt-4 mt-auto"> {/* Adjusted padding and margin for button */}
              <Button asChild className="w-full group">
                <Link href={section.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
         <AnimatedHeading
            text="Ready to integrate intelligence?"
            as="h2"
            className="font-headline text-2xl text-foreground mb-4"
          />
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            The AI Gateway is a core component of our broader solution set. Discover how it integrates with other intelligent services.
        </p>
        <Button asChild size="lg" variant="outline">
            <Link href="/solutions">
                Explore All Flow Networks Solutions
            </Link>
        </Button>
      </div>
    </div>
  );
}
