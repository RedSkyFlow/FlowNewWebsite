
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu, Server, Network, Settings2, DatabaseZap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Gateway Technology | Flow Networks',
  description: 'A high-level overview of the secure infrastructure, AI agent development, and flexible backend hosting architecture powering the Flow Networks AI Gateway.',
};

const techPillars = [
  {
    icon: ShieldCheck,
    title: 'Secure AI Gateway Infrastructure',
    points: [
      "Utilizes intelligent WiFi for robust user authentication.",
      "Implements strong security protocols to ensure trusted access.",
      "Verifies physical presence, gating services to on-site users only.",
      "Provides a secure foundation for all AI interactions.",
    ],
    diagramNote: "[Diagram: Showcasing WiFi authentication, secure data channels, and presence verification flow.]"
  },
  {
    icon: Settings2, // Changed from Cpu
    title: 'Venue-Specific AI Agent Solutions',
    points: [
      "Development of bespoke AI agents tailored to unique venue needs.",
      "AI agents designed for various roles: concierge, support, operational assistance.",
      "Customization process to align with specific business objectives.",
      "Seamless integration capabilities with existing venue systems.",
    ],
    diagramNote: "[Diagram: Illustrating AI agent types and their interaction with venue systems.]"
  },
  {
    icon: DatabaseZap, // Changed from Server
    title: 'Flexible Backend Hosting Architecture',
    points: [
      "Supports Cloud, Central On-Premise, and Hybrid hosting models.",
      "Ensures scalability to meet fluctuating demands.",
      "Offers data control and sovereignty to meet compliance needs (e.g., HIPAA).",
      "Optimizes performance and integrates with existing enterprise infrastructure.",
    ],
    diagramNote: "[Diagram: Comparing Cloud, On-Premise, and Hybrid hosting models with their respective benefits.]"
  }
];

export default function AIGatewayTechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="The AI Gateway Technology"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
        The Flow Networks AI Gateway is built on a robust and flexible technological foundation, designed to deliver secure, intelligent, and highly relevant services. Here’s a high-level overview of its key components:
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techPillars.map((pillar) => (
          <Card key={pillar.title} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col bg-card">
            <CardHeader className="items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-3">
                    <pillar.icon className="w-12 h-12 text-primary" />
                </div>
              <CardTitle className="font-headline text-2xl text-foreground">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                {pillar.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {pillar.diagramNote && (
                <p className="mt-4 text-sm text-accent/80 italic">{pillar.diagramNote}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="mt-16 text-center prose prose-lg max-w-3xl mx-auto text-muted-foreground">
          <p>This flexible and secure architecture ensures that the AI Gateway can be adapted to a wide range of venue types and operational requirements, providing a future-proof platform for in-venue intelligence.</p>
      </div>
    </div>
  );
}
