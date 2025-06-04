
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Partners | Flow Networks AI Gateway',
  description: 'Flow Networks collaborates with leading technology providers to deliver comprehensive intelligent venue solutions. Learn about our partner ecosystem.',
};

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Flow Networks Partner Ecosystem"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Handshake className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          At Flow Networks, we believe in the power of collaboration. Our partnerships with leading technology providers like Purple WiFi, Everlytic, and CNNTAP are crucial to delivering robust, integrated, and value-driven intelligent venue solutions. This section will detail our partnership philosophy, showcase our key partners, and explain how this ecosystem enhances the capabilities of the AI Gateway.
        </p>
        <p className="text-md text-accent animate-pulse">
          Full content for this page, including details on specific partner integrations and how to become a partner, is currently under development as per the strategic blueprint.
        </p>
      </div>
    </div>
  );
}
