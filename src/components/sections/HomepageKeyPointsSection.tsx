
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Lightbulb, Settings2, Sparkles, Users, Zap, Network, Wifi, Send, Tv2 } from 'lucide-react'; // Added Network, Wifi, Send, Tv2
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { INDUSTRIES_DATA } from '@/lib/constants';

const corePillars = [
  {
    title: 'The AI Gateway', // Updated title
    description: "The central nervous system of your intelligent venue, orchestrating bespoke AI agents for hyper-personalized services and operational excellence.",
    icon: Network, // Changed from Cpu
    href: '/ai-gateway', 
    linkText: 'Explore AI Gateway'
  },
  {
    title: 'Intelligent Wi-Fi & Analytics',
    description: "Transform Wi-Fi data (via Purple WiFi) into actionable insights. Understand presence, behavior, and demographics to fuel the AI Gateway.",
    icon: Wifi,
    href: '/solutions/intelligent-wifi', 
    linkText: 'Learn about Smart Wi-Fi'
  },
  {
    title: 'Automated Communication',
    description: "Deliver AI-triggered, personalized messages (via Everlytic) using Email, SMS, and Push Notifications, enhancing user engagement.",
    icon: Send,
    href: '/solutions/automated-communication', 
    linkText: 'Discover Automated Messaging'
  },
  {
    title: 'Premium Content Delivery',
    description: "Elevate in-venue experiences with seamless access to premium news and entertainment (via CNNTAP), integrated through the AI Gateway.",
    icon: Tv2,
    href: '/solutions/premium-content', 
    linkText: 'Explore Content Solutions'
  },
];

const benefits = [
  { title: 'Hyper-Personalized Experiences', description: 'Deliver uniquely relevant interactions tailored to each individual user, enhancing satisfaction and engagement.', icon: Users },
  { title: 'Actionable Venue Intelligence', description: 'Gain deep insights from integrated data sources, enabling smarter decisions and proactive service delivery.', icon: Lightbulb },
  { title: 'Streamlined System Integration', description: 'Connect disparate venue systems through the AI Gateway, creating a unified and efficient operational environment.', icon: Settings2 },
  { title: 'Enhanced Operational Efficiency', description: 'Automate routine tasks, empower staff with AI-driven tools, and optimize resource allocation.', icon: Zap },
];

const HomepageKeyPointsSection = () => {
  const industryTeasers = INDUSTRIES_DATA.filter(ind => ['hospitality', 'retail', 'airports'].includes(ind.id));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* What is the AI Gateway? Snippet */}
        <div className="mb-16 text-center">
          <AnimatedHeading
            text="The AI Gateway: Your Venue's Intelligent Core"
            as="h2"
            className="text-3xl font-bold text-foreground sm:text-4xl mb-4 !font-headline"
          />
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            Flow Networks' AI Gateway uses your venue's Wi-Fi as its central nervous system, connecting visitors to bespoke AI agents. This enables hyper-personalized experiences, unlocking new levels of engagement and operational efficiency. It's more than connectivity; it's the future of intelligent spaces.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary group">
            <Link href="/ai-gateway"> 
              Learn more about the AI Gateway <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Core Pillars Section */}
        <div className="mb-20">
          <AnimatedHeading
            text="Our Integrated Solutions: Powered by the AI Gateway"
            as="h2"
            className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((pillar) => (
              <Card key={pillar.title} className="shadow-lg hover:shadow-xl transition-shadow bg-card flex flex-col">
                <CardHeader className="items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                    <pillar.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-muted-foreground text-sm mb-4">{pillar.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full group border-primary/50 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary">
                    <Link href={pillar.href}>
                      {pillar.linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/solutions"> 
                Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Problem/Solution Framework */}
        <div className="mb-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-muted/30 p-8 rounded-lg">
            <AnimatedHeading
              text="Struggling with Impersonal Experiences & Disconnected Systems?"
              as="h3"
              className="text-2xl font-bold text-foreground sm:text-3xl mb-4 !font-headline"
            />
            <p className="text-muted-foreground md:text-lg">
              Many venues face challenges with fragmented data, generic user interactions, and operational inefficiencies, failing to unlock the full potential of their physical spaces.
            </p>
          </div>
          <div>
            <Card className="bg-card shadow-lg border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl font-headline flex items-center text-primary">
                  <Sparkles className="mr-2 h-6 w-6" /> The Flow Networks AI Gateway Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI Gateway intelligently orchestrates your venue's data and services through its Wi-Fi backbone. It provides the transformative solution: a secure, presence-verified layer delivering curated AI services that directly address your unique challenges and enhance user engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits Showcase */}
        <div className="mb-16">
          <AnimatedHeading
            text="Unlock Transformative Benefits"
            as="h2"
            className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/ai-gateway/benefits"> 
                Discover All Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Industry Teasers */}
        <div>
          <AnimatedHeading
            text="Tailored AI Solutions for Your Industry"
            as="h2"
            className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {industryTeasers.map((industry) => (
              <Card key={industry.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col bg-card">
                <CardHeader className="flex-row items-center space-x-4">
                  <industry.icon className="w-10 h-10 text-accent" />
                  <CardTitle className="font-headline text-xl text-foreground">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{industry.description.substring(0,120)}...</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full group border-primary/50 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary">
                        <Link href={`/industries/${industry.id}`}>
                        Explore {industry.name} Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/industries">
                View All Industry Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageKeyPointsSection;
