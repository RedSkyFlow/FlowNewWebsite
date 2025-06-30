
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Library, FileText, MessageSquareQuote, Mic2 } from 'lucide-react'; // Mic2 for Webinars

export const metadata: Metadata = {
  title: 'Resources | Flow Networks AI Gateway',
  description: 'Explore insights, articles, case studies, and whitepapers from Flow Networks. Learn more about the AI Gateway, intelligent venue technology, and the future of hyper-personalized experiences.',
};

const resourceTypes = [
  {
    name: "Blog & Articles",
    icon: FileText,
    description: "Thought leadership, industry insights, AI Gateway explanations, and deep dives into use cases.",
    status: "Coming Soon"
  },
  {
    name: "Case Studies",
    icon: MessageSquareQuote,
    description: "Real-world examples of AI Gateway implementations, showcasing problems, solutions, and results.",
    status: "Coming Soon"
  },
  {
    name: "Whitepapers & eBooks",
    icon: Library,
    description: "In-depth content on AI Gateway strategy, ROI, specific industry applications, and technical aspects.",
    status: "Coming Soon"
  },
  {
    name: "Webinars & Events",
    icon: Mic2,
    description: "Join us for live discussions, product demonstrations, and industry expert panels.",
    status: "Coming Soon"
  }
];

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
          Welcome to the Flow Networks knowledge hub. This section is dedicated to establishing Flow Networks as a thought leader in intelligent venue solutions. We aim to educate the market on the nuances and benefits of the AI Gateway concept and provide in-depth information for various stages of the buyer's journey.
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Our resources will support our Search Engine Optimization (SEO) efforts and help you understand how to leverage AI for transformative in-venue experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {resourceTypes.map((resource) => (
          <Card key={resource.name} className="shadow-lg bg-card">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <resource.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl text-foreground">{resource.name}</CardTitle>
              </div>
               {resource.status && <span className="text-xs text-accent font-semibold">{resource.status}</span>}
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{resource.description}</p>
            </CardContent>
            {/* Future: Link to specific resource category page if created */}
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-md text-muted-foreground animate-pulse">
          Our comprehensive library of blog posts, case studies, whitepapers, and datasheets is currently under development and will be populated progressively as per our strategic blueprint. Stay tuned for valuable content!
        </p>
      </div>
    </div>
  );
}
