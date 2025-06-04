
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us | Flow Networks',
  description: 'Learn about Flow Networks mission, vision, and how we are revolutionizing intelligent venues.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="About Flow Networks"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
        <h2 className="font-headline text-foreground">Our Mission & Vision</h2>
        <p>
          Flow Networks is dedicated to transforming physical venues into intelligent, data-driven ecosystems.
          Our vision is to empower spaces to think, adapt, and deliver unparalleled, hyper-local experiences
          by making WiFi the authenticated gateway to a new realm of curated on-premise AI capabilities.
        </p>
        <p>
          We aim to be the leading provider of AI Gateway solutions, enabling businesses to unlock new value,
          enhance engagement, and optimize operations through secure, presence-verified intelligent services.
        </p>
        
        <p className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <strong>Phase 1 Content:</strong> Mission and Vision. Further details like Leadership Team and Our Story will be added in later phases as per manifest (Section 5.7).
        </p>

        <div className="mt-12 text-center">
          <h2 className="font-headline text-2xl text-foreground mb-4">Get in Touch</h2>
          <p className="mb-6">
            Interested in learning more or discussing your venue's needs? We'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
