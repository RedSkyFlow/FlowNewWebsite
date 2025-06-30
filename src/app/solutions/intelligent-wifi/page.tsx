
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Brain, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intelligent Wi-Fi & Venue Analytics | Flow Networks',
  description: 'Learn how Flow Networks leverages advanced Wi-Fi (Purple WiFi) for data capture and analytics, providing the essential foundation for the AI Gateway.',
};

export default function IntelligentWifiPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Intelligent Wi-Fi & Venue Analytics"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-muted-foreground space-y-8">
        <p className="text-lg md:text-xl text-center">
          Leveraging powerful platforms like Purple WiFi, Flow Networks transforms your venue's Wi-Fi into the primary sensory input for the AI Gateway. This isn't just about connectivity; it's about capturing rich data on user presence, identity, location, and behavior.
        </p>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Wifi className="mr-3 h-7 w-7" /> Foundational Data for AI
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              In the context of the AI Gateway, advanced Wi-Fi capabilities (via Purple WiFi) become the critical mechanism for data acquisition. This includes:
            </p>
            <ul>
              <li>User presence detection and identity capture (through captive portals, social logins).</li>
              <li>Real-time location tracking within the venue.</li>
              <li>Basic behavioral pattern analysis.</li>
            </ul>
            <p>
              This foundational data – who, where, and when – is the lifeblood for the AI Gateway's personalization and contextualization, enabling it to build user profiles and trigger relevant AI-driven interactions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
              <Brain className="mr-3 h-7 w-7" /> Flow Networks' Value: Beyond Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Our distinct value lies in strategically leveraging the data captured by Purple WiFi *specifically for the AI Gateway*. We focus on:
            </p>
            <ul>
              <li>Identifying specific data points most valuable for AI algorithms.</li>
              <li>Optimizing Wi-Fi system configurations for data harvesting in diverse environments.</li>
              <li>Ensuring seamless data structuring, transmission, and interpretation by the AI Gateway.</li>
            </ul>
            <p>
              Flow Networks acts as a strategic integrator, transforming raw Wi-Fi data into actionable insights and personalized experiences delivered via the AI Gateway.
            </p>
             <p className="mt-4"><em>[Details on specific Purple WiFi features relevant to data capture for AI Gateway will be enhanced here.]</em></p>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
            <EnhancedButton asChild size="lg" variant="secondary" glow>
                <Link href="/ai-gateway">
                    How This Powers the AI Gateway <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </EnhancedButton>
        </div>
      </div>
    </div>
  );
}
