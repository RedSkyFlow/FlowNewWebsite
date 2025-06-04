
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automated Communication & Engagement | Flow Networks',
  description: 'Discover Flow Networks\' Automated Communication solutions, powered by Everlytic, to deliver AI-triggered, targeted messages and enhance user engagement.',
};

export default function AutomatedCommunicationPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Automated Communication & Engagement"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Send className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This page will explore Flow Networks' Automated Communication and Engagement solutions, highlighting our integration with Everlytic. We will showcase how the AI Gateway can trigger timely, personalized, and context-aware communications (Email, SMS, Push Notifications) to engage users effectively based on real-time insights and on-premise actions.
        </p>
        <p className="text-md text-accent animate-pulse">
          Full content for this page is currently under development as per the strategic blueprint.
        </p>
      </div>
    </div>
  );
}
