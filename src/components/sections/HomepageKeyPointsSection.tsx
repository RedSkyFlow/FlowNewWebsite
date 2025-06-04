
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cpu, Eye, Lightbulb, TrendingUp, Users, Wifi } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { INDUSTRIES_DATA } from '@/lib/constants';

const benefits = [
  { title: 'Enhanced User Experience', description: 'Deliver hyper-local, personalized AI services accessible only to on-site users.', icon: Users },
  { title: 'Streamlined Operations', description: 'Automate tasks and assist staff with bespoke AI agents.', icon: Cpu },
  { title: 'New Revenue Streams', description: 'Unlock opportunities for targeted upselling and premium AI-driven services.', icon: TrendingUp },
  { title: 'Uncompromised Security', description: 'Leverage secure WiFi authentication for verified physical presence.', icon: CheckCircle },
];

const HomepageKeyPointsSection = () => {
  const industryTeasers = INDUSTRIES_DATA.filter(ind => ['hospitality', 'retail', 'airports'].includes(ind.id));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* What is the AI Gateway? Snippet */}
        <div className="mb-16 text-center">
          <AnimatedHeading
            text="What is the Flow Networks AI Gateway?"
            as="h2"
            className="text-3xl font-bold text-foreground sm:text-4xl mb-4 !font-headline"
          />
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            It's a revolutionary system that transforms your venue's WiFi into a secure key, granting physically present users exclusive access to bespoke AI agents and hyper-local services. 
            We empower your space to think, adapt, and deliver unparalleled experiences.
          </p>
          <Button asChild variant="link" className="mt-4 text-primary group">
            <Link href="/ai-gateway/what-it-is">
              Learn more about the AI Gateway <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Problem/Solution Framework */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <AnimatedHeading
              text="Tired of Impersonal Experiences & Operational Bottlenecks?"
              as="h3"
              className="text-2xl font-bold text-foreground sm:text-3xl mb-4 !font-headline"
            />
            <p className="text-muted-foreground md:text-lg">
              Many venues struggle with engaging users effectively, suffer from operational inefficiencies, and miss opportunities for personalized interaction. Generic solutions often fall short.
            </p>
          </div>
          <div>
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-headline flex items-center text-primary">
                  <Lightbulb className="mr-2 h-6 w-6" /> The Flow Networks Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI Gateway provides the transformative solution: a secure, presence-verified layer delivering curated AI services that directly address your venue's unique challenges and enhance user engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits Showcase */}
        <div className="mb-16">
          <AnimatedHeading
            text="Core Benefits of the AI Gateway"
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
                        <Link href={`/ai-agents/${industry.id}`}>
                        Explore {industry.name} Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/ai-agents">
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
