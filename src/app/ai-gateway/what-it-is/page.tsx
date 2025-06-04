
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata: Metadata = {
  title: 'What is the AI Gateway? | Flow Networks',
  description: 'Understand the core concepts of the Flow Networks AI Gateway.',
};

export default function WhatIsAIGatewayPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="What is the AI Gateway?"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
        <p>
          This page will provide a detailed definition of the Flow Networks AI Gateway, drawing directly from strategic documents.
          It will explain the vision of transforming physical venues into intelligent, data-driven ecosystems
          through "bespoke AI agents and solutions," accessible "exclusively and securely when a user is authenticated
          on the venue's specific WiFi network".
        </p>
        <p>
          Content will elaborate on the "physical presence verification layer," the concept of "hyper-local services,"
          and the "secure, WiFi-authenticated gating of curated, venue-specific AI services".
          Clear, illustrative diagrams will be used to depict the interaction model.
        </p>
        <p className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <strong>Placeholder Content:</strong> More detailed information and diagrams as outlined in the website manifest (Section 5.2) will be added here.
        </p>
      </div>
    </div>
  );
}
