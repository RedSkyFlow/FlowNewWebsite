
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata: Metadata = {
  title: 'Why Flow Networks? | Flow Networks',
  description: 'Discover the unique differentiators and competitive advantages of choosing Flow Networks AI Gateway.',
};

export default function WhyFlowNetworksPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Why Choose Flow Networks?"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
        <p>
          This section will clearly articulate Flow Networks' unique selling propositions (USPs) and compelling competitive advantages.
          It will address why a prospective client should choose Flow Networks over alternatives or the status quo.
        </p>
        <h3 className="font-headline text-foreground">Our Unique Approach:</h3>
        <p>Reiterating the integrated AI Gateway model – the synergy of secure WiFi authentication, bespoke AI agents, hyper-local experiences, and flexible backend hosting.</p>
        <h3 className="font-headline text-foreground">Key Differentiators:</h3>
        <p>Expanding on: Secure WiFi Access, Bespoke AI, Flexible Backend, Hyper-Local Delivery, Actionable AI.</p>
        <h3 className="font-headline text-foreground">Competitive Edge & Addressing Concerns (FAQ):</h3>
        <p>Subtly countering competitor types and proactively answering anticipated sales objections.</p>

        <p className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <strong>Placeholder Content:</strong> Detailed explanations, comparisons, and FAQs as outlined in the website manifest (Section 5.4) will be added here.
        </p>
      </div>
    </div>
  );
}
