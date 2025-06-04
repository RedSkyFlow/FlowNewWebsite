
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle, TrendingUp, ServerIcon } from 'lucide-react'; // Changed Server to ServerIcon

export const metadata: Metadata = {
  title: 'The AI Gateway | Flow Networks',
  description: 'Explore the Flow Networks AI Gateway - transforming venues with intelligent, presence-verified services through secure WiFi authentication.',
};

const gatewaySections = [
  { 
    title: 'What is the AI Gateway?', 
    description: 'Understand the core concepts: secure WiFi authentication, physical presence verification, curated AI agents, and hyper-local service delivery.', 
    href: '/ai-gateway/what-it-is',
    icon: HelpCircle,
  },
  { 
    title: 'Benefits of the AI Gateway', 
    description: 'Discover the advantages for your venue (efficiency, revenue, insights) and for your end-users (personalized, seamless services).', 
    href: '/ai-gateway/benefits',
    icon: TrendingUp,
  },
  { 
    title: 'The Technology', 
    description: 'Explore the secure infrastructure, bespoke AI agent development, and flexible backend hosting options (cloud, on-premise, hybrid).', 
    href: '/ai-gateway/technology',
    icon: ServerIcon, // Changed Server to ServerIcon
  },
];

export default function AIGatewayPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="The Flow Networks AI Gateway"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        Dive into the future of intelligent venues. Our AI Gateway leverages your existing WiFi infrastructure to provide secure,
        presence-verified access to bespoke AI agents, delivering hyper-local and context-aware experiences. We empower spaces to think, adapt, and deliver unparalleled value.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {gatewaySections.map((section) => (
          <Card key={section.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                <section.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-foreground">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4 text-center">{section.description}</p>
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
