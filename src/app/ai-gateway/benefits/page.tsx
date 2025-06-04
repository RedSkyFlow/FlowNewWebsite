
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata: Metadata = {
  title: 'Benefits of the AI Gateway | Flow Networks',
  description: 'Discover the advantages of the Flow Networks AI Gateway for venues and end-users.',
};

export default function AIGatewayBenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Benefits of the AI Gateway"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
        <p>
          This page will expand on the advantages of the AI Gateway, categorizing them for clarity:
        </p>
        <h3 className="font-headline text-foreground">For the Venue:</h3>
        <ul>
          <li>Improved operational efficiency (e.g., AI-assisted staff, automation of routine tasks).</li>
          <li>New revenue opportunities (e.g., targeted upselling, premium AI-driven services).</li>
          <li>Enhanced security and control over service delivery.</li>
          <li>Valuable data-driven insights derived from AI agent interactions.</li>
        </ul>
        <h3 className="font-headline text-foreground">For the End-User:</h3>
        <ul>
          <li>Highly personalized and contextual experiences.</li>
          <li>Seamless access to relevant services.</li>
          <li>Exclusive content or functionalities available only in-venue.</li>
        </ul>
        <p className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <strong>Placeholder Content:</strong> More detailed explanations and examples as outlined in the website manifest (Section 5.2) will be added here.
        </p>
      </div>
    </div>
  );
}
