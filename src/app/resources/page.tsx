
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Library } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | Flow Networks AI Gateway',
  description: 'Explore insights, articles, case studies, and whitepapers from Flow Networks. Learn more about the AI Gateway and the future of intelligent venues.',
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Resources & Insights"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
       <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Library className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to the Flow Networks knowledge hub. This section will feature a wealth of resources, including insightful blog posts, in-depth whitepapers, compelling case studies, and technical guides related to the AI Gateway, intelligent venue technology, and industry best practices. Our goal is to educate the market and share our expertise.
        </p>
        <p className="text-md text-accent animate-pulse">
          Content for our Blog, Case Studies, Whitepapers, and Datasheets is currently under development and will be populated progressively as per the strategic blueprint.
        </p>
      </div>
    </div>
  );
}
