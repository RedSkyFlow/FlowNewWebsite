
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Wifi, Key, UserCheck, Cpu, Route } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'What is the AI Gateway? | Flow Networks',
  description: 'Understand the core concepts of the Flow Networks AI Gateway: secure WiFi authentication, physical presence verification, hyper-local services, and bespoke AI agents.',
};

export default function WhatIsAIGatewayPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="What is the AI Gateway?"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="max-w-4xl mx-auto text-muted-foreground space-y-8">
        <p className="text-lg md:text-xl text-center">
          The Flow Networks AI Gateway is a transformative system that redefines how physical venues interact with their users.
          It converts your existing venue WiFi into an intelligent and secure authentication layer, unlocking a world of
          bespoke AI-powered services exclusively for individuals physically present within your space.
        </p>
        
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
              <Key className="mr-3 h-7 w-7" /> Core Vision: Intelligent, Data-Driven Ecosystems
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Our vision is to empower physical venues to become intelligent, data-driven ecosystems. The AI Gateway enables this by deploying 
              <strong> bespoke AI agents and solutions</strong>, accessible <strong>exclusively and securely when a user is authenticated 
              on the venue's specific WiFi network</strong>. This approach transforms WiFi from a simple connectivity utility into a strategic
              asset for delivering unparalleled, hyper-local experiences.
            </p>
            <p>
              We aim to help your space to think, adapt, and deliver enhanced engagement, optimized operations, and new value streams.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-accent flex items-center">
                        <UserCheck className="mr-2 h-6 w-6" /> Physical Presence Verification Layer
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        A cornerstone of the AI Gateway is its robust <strong>physical presence verification layer</strong>. By requiring users to authenticate via the venue's WiFi, we ensure that services are delivered only to individuals genuinely on-site. This creates a secure and exclusive environment for interaction.
                    </p>
                    <p className="mt-2"><em>[Diagram: Illustrate user connecting to WiFi -> Authentication -> Access Granted to On-Premise AI Services]</em></p>
                </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-accent flex items-center">
                        <Route className="mr-2 h-6 w-6" /> Hyper-Local & Context-Aware Services
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        The verification of physical presence enables truly <strong>hyper-local and context-aware services</strong>. AI agents can provide information, assistance, or offers that are directly relevant to the user's immediate surroundings and current needs within the venue, leading to more meaningful and efficient interactions.
                    </p>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center">
                <Wifi className="mr-3 h-7 w-7" /> Secure, WiFi-Authenticated Gating
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The AI Gateway provides <strong>secure, WiFi-authenticated gating of curated, venue-specific AI services</strong>. 
              This means you have precise control over who accesses your intelligent services and what services are offered. This contrasts with generic digital services that lack the immediate context and verified presence our system ensures.
            </p>
            <p>
              This exclusivity is not a limitation but a premium feature, enhancing security, relevance, and value for both the venue and its users.
            </p>
            <p className="mt-4"><em>[Diagram: Illustrate Interaction Model: User connects to WiFi -> Authenticated -> Accesses Bespoke AI Agent -> Agent interacts with Flexible Backend (Cloud/On-Prem/Hybrid)]</em></p>
          </CardContent>
        </Card>
        
        <p className="text-center text-lg mt-12">
          Ultimately, the AI Gateway is more than just technology; it's a new model for service access and interaction,
          transforming your venue into a truly intelligent environment.
        </p>
      </div>
    </div>
  );
}
