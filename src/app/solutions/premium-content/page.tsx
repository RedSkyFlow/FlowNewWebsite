
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Tv2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Premium Content Delivery | Flow Networks',
  description: 'Learn how Flow Networks provides Premium Content Delivery solutions, leveraging CNNTAP, to enhance in-venue experiences via the AI Gateway.',
};

export default function PremiumContentPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Premium Content Delivery"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-center">
         <div className="flex justify-center mb-8">
            <Tv2 className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This section will detail Flow Networks' Premium Content Delivery solutions, featuring our partnership with CNNTAP. We will explain how access to premium news and entertainment content can be seamlessly integrated and potentially personalized through the AI Gateway, enriching the overall in-venue user experience.
        </p>
         <p className="text-md text-accent animate-pulse">
          Full content for this page is currently under development as per the strategic blueprint.
        </p>
      </div>
    </div>
  );
}
