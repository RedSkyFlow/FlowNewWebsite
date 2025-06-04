
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Gateway | Flow Networks',
  description: 'Explore the Flow Networks AI Gateway - transforming venues with intelligent, presence-verified services.',
};

const gatewaySections = [
  { title: 'What is the AI Gateway?', description: 'Understand the core concepts, mechanics, and vision behind our innovative AI Gateway.', href: '/ai-gateway/what-it-is' },
  { title: 'Benefits of the AI Gateway', description: 'Discover the advantages for your venue and your end-users, from efficiency to enhanced experiences.', href: '/ai-gateway/benefits' },
  { title: 'The Technology', description: 'A high-level overview of the secure infrastructure, AI agent development, and flexible backend options.', href: '/ai-gateway/technology' },
];

export default function AIGatewayPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="The Flow Networks AI Gateway"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12">
        Dive into the future of intelligent venues. Our AI Gateway leverages your existing WiFi infrastructure to provide secure,
        presence-verified access to bespoke AI agents, delivering hyper-local and context-aware experiences.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {gatewaySections.map((section) => (
          <Card key={section.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full group">
                <Link href={section.href}>
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
