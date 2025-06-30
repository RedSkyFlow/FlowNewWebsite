
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Zap, Wifi, Send, Tv2, ArrowRight } from 'lucide-react'; // Zap for AI Platforms

export const metadata: Metadata = {
  title: 'Our Partners | Flow Networks AI Gateway',
  description: 'Flow Networks collaborates with leading technology providers like Purple WiFi, Everlytic, and CNNTAP to deliver comprehensive intelligent venue solutions, all orchestrated by the AI Gateway.',
};

const partnerCategories = [
  {
    name: "Intelligent Wi-Fi & Analytics Partners",
    icon: Wifi,
    description: "Foundational data capture and analytics from partners like Purple WiFi, providing the essential insights that fuel the AI Gateway.",
    examplePartner: "Purple WiFi",
    learnMoreLink: "/solutions/intelligent-wifi" // Link to our solution page leveraging this
  },
  {
    name: "Communication & Engagement Partners",
    icon: Send,
    description: "Advanced platforms like Everlytic for AI-triggered, targeted messaging, enabling proactive and personalized user engagement.",
    examplePartner: "Everlytic",
    learnMoreLink: "/solutions/automated-communication"
  },
  {
    name: "Premium Content Partners",
    icon: Tv2,
    description: "Enriching in-venue experiences with premium content through partners like CNNTAP, seamlessly integrated via the AI Gateway.",
    examplePartner: "CNNTAP",
    learnMoreLink: "/solutions/premium-content"
  },
  {
    name: "AI & Technology Platform Partners",
    icon: Zap, // Representing AI/Tech platforms
    description: "Collaborations with leading AI platforms and technology providers to enhance the backend capabilities and ensure robust infrastructure for the AI Gateway.",
    examplePartner: "Leading AI & Cloud Providers",
    learnMoreLink: "/ai-gateway/technology"
  }
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Flow Networks Partner Ecosystem"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Handshake className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          At Flow Networks, we believe in the power of collaboration. Our partnerships are crucial to delivering robust, integrated, and value-driven intelligent venue solutions. The AI Gateway is designed to orchestrate and enhance the capabilities of leading technologies, creating a sum greater than its parts.
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Our philosophy is to integrate best-in-class services, adding Flow Networks' unique value through expert implementation, strategic integration (especially with the AI Gateway), and the delivery of comprehensive, intelligent solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {partnerCategories.map((category) => (
          <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <category.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl text-foreground">{category.name}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Example: {category.examplePartner}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="outline" className="w-full group">
                <Link href={category.learnMoreLink}>
                  See in Our Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center bg-muted/30 p-8 md:p-12 rounded-lg">
        <AnimatedHeading
            text="Become a Flow Networks Partner"
            as="h2"
            className="text-2xl font-bold text-accent sm:text-3xl mb-4 !font-headline"
        />
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Interested in joining our ecosystem and co-creating the future of intelligent venues? We're looking for technology providers, system integrators, and strategic allies.
        </p>
        <Button asChild size="lg" className="btn-secondary-glow">
          <Link href="/contact?interest=partnership">
            Inquire About Partnership
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground italic">
          [More detailed information on partnership models and benefits will be added in a future phase.]
        </p>
      </div>
    </div>
  );
}
