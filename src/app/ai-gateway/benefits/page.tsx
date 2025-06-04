
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Zap, ShieldCheck, BarChart3, Handshake, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Benefits of the AI Gateway | Flow Networks',
  description: 'Discover the powerful advantages of implementing the Flow Networks AI Gateway for your venue and your end-users, from operational efficiency to hyper-personalized experiences.',
};

const venueBenefits = [
  {
    icon: Zap,
    title: 'Improved Operational Efficiency',
    description: 'Automate routine tasks, provide AI-assisted support for staff, and streamline workflows, freeing up human resources for higher-value activities.',
  },
  {
    icon: BarChart3,
    title: 'New Revenue Opportunities',
    description: 'Leverage AI for targeted upselling, cross-selling, and the delivery of premium, AI-driven services, creating new income streams.',
  },
  {
    icon: ShieldCheck,
    title: 'Enhanced Security & Control',
    description: 'Ensure services are delivered only to physically present, authenticated users, providing greater control over service access and data security.',
  },
  {
    icon: Handshake, // Placeholder for Insights
    title: 'Valuable Data-Driven Insights',
    description: 'Gain deeper understanding of user behavior and preferences through AI agent interactions, enabling better decision-making and service optimization.',
  },
];

const endUserBenefits = [
  {
    icon: Users,
    title: 'Highly Personalized Experiences',
    description: 'Receive context-aware information, offers, and assistance tailored to individual needs and location within the venue.',
  },
  {
    icon: Gift, // Placeholder for seamless access
    title: 'Seamless Access to Relevant Services',
    description: 'Effortlessly connect to AI agents that provide immediate assistance, information, or functionalities relevant to their current situation.',
  },
  {
    icon: Zap,
    title: 'Exclusive In-Venue Content & Features',
    description: 'Access unique functionalities, offers, or information available only to authenticated users physically present in the venue.',
  },
];

export default function AIGatewayBenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Benefits of the AI Gateway"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Benefits for the Venue */}
        <div>
          <AnimatedHeading
            text="For Your Venue"
            as="h2"
            className="text-3xl font-bold text-center text-primary sm:text-4xl mb-10 !font-headline"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {venueBenefits.map((benefit) => (
              <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader className="flex-row items-center space-x-4 pb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits for the End-User */}
        <div>
          <AnimatedHeading
            text="For Your End-Users"
            as="h2"
            className="text-3xl font-bold text-center text-accent sm:text-4xl mb-10 !font-headline"
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {endUserBenefits.map((benefit) => (
              <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow bg-card">
                 <CardHeader className="items-center text-center pb-3">
                  <div className="p-3 rounded-full bg-accent/10 mb-2">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
