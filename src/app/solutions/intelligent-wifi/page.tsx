
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intelligent Wi-Fi & Venue Analytics | Flow Networks',
  description: 'Learn about Flow Networks\' Intelligent Wi-Fi and Venue Analytics solutions, leveraging Purple WiFi for data capture and insights that power the AI Gateway.',
};

export default function IntelligentWifiPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Intelligent Wi-Fi & Venue Analytics"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Wifi className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          This section will detail Flow Networks' solutions for Intelligent Wi-Fi and Venue Analytics, primarily leveraging our strategic partnership with Purple WiFi. We'll explore how robust Wi-Fi infrastructure and advanced analytics provide the foundational data capture and insights essential for the AI Gateway to deliver hyper-personalized experiences and actionable intelligence.
        </p>
        <p className="text-md text-accent animate-pulse">
          Full content for this page is currently under development as per the strategic blueprint.
        </p>
      </div>
    </div>
  );
}
