
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata: Metadata = {
  title: 'AI Gateway Technology | Flow Networks',
  description: 'Overview of the technology powering the Flow Networks AI Gateway.',
};

export default function AIGatewayTechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="The AI Gateway Technology"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
        <p>
          This page will provide a high-level overview of the technical components of the AI Gateway:
        </p>
        <h3 className="font-headline text-foreground">Secure AI Gateway Infrastructure:</h3>
        <p>Detailing the role of intelligent WiFi, authentication mechanisms, and security protocols that ensure trusted access.</p>
        <h3 className="font-headline text-foreground">Venue-Specific AI Agent Solutions:</h3>
        <p>Explaining the bespoke nature of the AI agents, the types of agents, development process, and integration capabilities.</p>
        <h3 className="font-headline text-foreground">Flexible Backend Hosting Architecture:</h3>
        <p>Outlining cloud, central on-premise, and hybrid hosting options and their advantages (scalability, data control, compliance, performance).</p>
        <p className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <strong>Placeholder Content:</strong> More technical details and diagrams as outlined in the website manifest (Section 5.2) will be added here.
        </p>
      </div>
    </div>
  );
}
