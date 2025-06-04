
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cpu, DatabaseZap, MapPin, CheckCircle, HelpCircle } from 'lucide-react'; // Replaced Server with DatabaseZap, Brain with Cpu

export const metadata: Metadata = {
  title: 'Why Flow Networks? | The Unique AI Gateway Advantage',
  description: 'Discover the unique differentiators and compelling competitive advantages of choosing the Flow Networks AI Gateway for intelligent, presence-verified in-venue services.',
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Secure WiFi for Physical Presence Verification & Authenticated Access',
    description: "Our AI Gateway uses your venue's WiFi for secure authentication, ensuring services are exclusively for physically present users. This provides unparalleled control and relevance.",
  },
  {
    icon: Cpu, // Changed from Brain
    title: 'Curated, Bespoke AI Agents & Services',
    description: "We don't offer generic AI. Flow Networks develops or customizes AI agents tailored to your specific venue needs, leading to impactful and context-aware interactions.",
  },
  {
    icon: DatabaseZap, // Changed from Server
    title: 'Flexible Backend Hosting for AI & Data',
    description: "Choose cloud, central on-premise, or hybrid hosting for your AI agents and data. This flexibility ensures compliance, integration, performance, and cost-effectiveness.",
  },
  {
    icon: MapPin,
    title: 'Hyper-Local Experience Delivery',
    description: "WiFi-gated access enables the delivery of services acutely aware of the user's immediate context within your venue, offering timely and valuable interactions.",
  },
  {
    icon: CheckCircle,
    title: 'Focus on Actionable AI Services',
    description: "Beyond analytics, our AI Gateway provides tools that actively enhance operations or user experiences, helping staff and directly assisting users.",
  },
];

export default function WhyFlowNetworksPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Why Choose Flow Networks?"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        In a market with diverse "smart venue" offerings, Flow Networks provides a distinct and powerful solution.
        Our AI Gateway is built on a unique, integrated model that addresses specific challenges and unlocks new opportunities for your venue.
      </p>

      <div className="mb-16">
        <AnimatedHeading
            text="Our Unique Approach: The Integrated AI Gateway"
            as="h2"
            className="text-3xl font-bold text-center text-primary sm:text-4xl mb-8 !font-headline"
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
            Flow Networks offers more than just individual features; we provide a holistic system. 
            The true power lies in the synergy of <strong>secure WiFi authentication</strong> for physical presence verification, 
            the deployment of <strong>curated and bespoke AI agents</strong>, the delivery of <strong>hyper-local experiences</strong>, 
            and the architectural freedom offered by <strong>flexible backend hosting</strong>. This integrated approach is what truly sets us apart.
        </p>
      </div>
      
      <AnimatedHeading
        text="Key Differentiators"
        as="h2"
        className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
      />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {differentiators.map((item) => (
          <Card key={item.title} className="shadow-lg hover:shadow-xl transition-shadow bg-card">
            <CardHeader className="flex-row items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10 mt-1">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted/50 p-8 rounded-lg shadow">
        <AnimatedHeading
            text="Competitive Edge & Addressing Your Concerns"
            as="h3"
            className="text-2xl font-bold text-accent sm:text-3xl mb-6 !font-headline"
        />
        <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
            <p>
                The Flow Networks AI Gateway provides a specialized intelligence layer that many generic platforms or analytics tools don't offer. 
                We focus on secure, presence-verified access to AI services that are tailored to your on-site users and operational needs.
            </p>
            <p>
                <em>(Detailed comparisons and FAQ addressing common sales objections as outlined in the website manifest (Section 5.4, Table) will be expanded here in a future phase.)</em>
            </p>
             <HelpCircle className="mx-auto h-10 w-10 text-accent my-4" />
            <p>
                Wondering how this compares to other solutions you've seen? Our AI Gateway is designed to complement powerful AI platforms by providing the crucial "last-mile" delivery and authentication for in-venue services. It leverages analytics to fuel actionable AI, rather than just reporting data.
            </p>
        </div>
      </div>
    </div>
  );
}
