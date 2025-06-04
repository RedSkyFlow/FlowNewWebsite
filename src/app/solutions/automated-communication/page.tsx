
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automated Communication & Engagement | Flow Networks',
  description: 'Discover how Flow Networks utilizes advanced communication platforms like Everlytic, triggered by AI Gateway insights, to deliver targeted and contextual user engagement.',
};

export default function AutomatedCommunicationPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Automated Communication & Engagement"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-muted-foreground space-y-8">
        <p className="text-lg md:text-xl text-center">
          Flow Networks leverages powerful communication platforms like Everlytic as the primary engine for executing targeted, AI-driven communications. This transforms insights from the AI Gateway into proactive and personalized engagement.
        </p>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Send className="mr-3 h-7 w-7" /> The AI Gateway's Responsive Arm
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              If Wi-Fi analytics provide the "sensory input," advanced communication tools (via Everlytic) serve as a crucial "responsive action" arm for the AI Gateway. The AI Gateway processes data, identifies patterns, and detects real-time events. These insights are then translated into:
            </p>
            <ul>
              <li>Automated, highly contextual, and timely communications.</li>
              <li>Delivery via multiple channels: Email, SMS, Push Notifications.</li>
              <li>Interactions that are immediately relevant to the user's current context and behavior.</li>
            </ul>
            <p>
              For example, the AI Gateway might identify a visitor's interest and proximity to a product, triggering an Everlytic message with a relevant offer.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
              <MessageCircle className="mr-3 h-7 w-7" /> Conversational Handoff
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              A compelling opportunity exists for a seamless "conversational handoff" between the AI Gateway's real-time AI Agent and Everlytic's messaging capabilities.
            </p>
            <ul>
              <li>The AI Agent provides immediate support and information during a Wi-Fi session.</li>
              <li>For interactions requiring persistent or asynchronous follow-up (e.g., booking confirmations, feedback requests), the AI Gateway can trigger Everlytic messages.</li>
            </ul>
            <p>
              This ensures a consistent, comprehensive, and professional communication experience, extending the value of the interaction beyond the immediate session.
            </p>
            <p className="mt-4"><em>[Specific examples of AI-triggered campaigns and workflows via Everlytic will be detailed here.]</em></p>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="group">
                <Link href="/ai-gateway">
                    Learn How the AI Gateway Drives This <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
