
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Wifi, Send, Tv2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Solutions | Flow Networks AI Gateway',
  description: 'Explore Flow Networks\' comprehensive solutions, including the AI Gateway, Intelligent Wi-Fi, Automated Communication, and Premium Content delivery.',
};

const solutionPillars = [
  { 
    title: 'The AI Gateway', 
    description: 'The central nervous system of your intelligent venue, orchestrating bespoke AI agents for hyper-personalized services and operational excellence.', 
    href: '/ai-gateway',
    icon: Network,
  },
  { 
    title: 'Intelligent Wi-Fi & Venue Analytics', 
    description: 'Leverage advanced Wi-Fi capabilities (via Purple WiFi) for rich data capture, venue analytics, and foundational insights that power the AI Gateway.', 
    href: '/solutions/intelligent-wifi',
    icon: Wifi,
  },
  { 
    title: 'Automated Communication & Engagement', 
    description: 'Utilize sophisticated communication tools (via Everlytic) to deliver AI-triggered, targeted messages, enhancing user engagement and interaction.', 
    href: '/solutions/automated-communication',
    icon: Send,
  },
  {
    title: 'Premium Content Delivery',
    description: 'Elevate the in-venue experience with seamless access to premium news and entertainment (via CNNTAP), integrated via the AI Gateway.',
    href: '/solutions/premium-content',
    icon: Tv2,
  }
];

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Flow Networks Solutions"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        Discover how Flow Networks integrates cutting-edge technologies to create intelligent venues. Our solutions are designed to transform your physical spaces into dynamic, responsive environments, delivering unparalleled value to both your operations and your users.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {solutionPillars.map((solution) => (
          <Card key={solution.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                <solution.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-foreground">{solution.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4 text-center">{solution.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full group">
                <Link href={solution.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
