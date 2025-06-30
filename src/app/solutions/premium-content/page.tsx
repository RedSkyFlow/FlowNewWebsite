
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tv2, UserCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Premium Content Delivery | Flow Networks',
  description: 'Learn how Flow Networks integrates premium content solutions like CNNTAP, enhanced by AI Gateway authentication, to enrich the in-venue user experience.',
};

export default function PremiumContentPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Premium Content Delivery"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-muted-foreground space-y-8">
        <p className="text-lg md:text-xl text-center">
          Flow Networks enhances the in-venue experience by integrating premium content solutions, such as CNNTAP, made easily accessible and potentially more relevant through the AI Gateway.
        </p>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Tv2 className="mr-3 h-7 w-7" /> Elevating In-Venue Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              CNNTAP and similar premium content offerings primarily serve to elevate the overall quality of the in-venue experience. This aligns with the AI Gateway's goal of delivering exceptional visitor interactions. Key aspects include:
            </p>
            <ul>
              <li>Seamless access to premium news and entertainment upon Wi-Fi authentication via the AI Gateway.</li>
              <li>Contribution to guest comfort, satisfaction, and a premium atmosphere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
              <UserCheck className="mr-3 h-7 w-7" /> AI Gateway Synergy
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The AI Gateway enhances access to premium content by:
            </p>
            <ul>
              <li>Providing seamless authentication for content services upon Wi-Fi connection.</li>
              <li>Potentially using user profile information (e.g., language preference, general interests inferred by the AI) to guide users to relevant content categories within the partner offering.</li>
            </ul>
            <p>
              While the direct operational synergy with core AI data processing is less pronounced than with data capture or communication platforms, premium content is a valuable asset in the intelligent venue ecosystem orchestrated by the AI Gateway.
            </p>
            <p className="mt-4"><em>[More details on how AI Gateway authentication grants access or personalizes content aspects will be added.]</em></p>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
            <EnhancedButton asChild size="lg" variant="secondary" glow>
                <Link href="/ai-gateway">
                    Discover the AI Gateway Integration <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </EnhancedButton>
        </div>
      </div>
    </div>
  );
}
