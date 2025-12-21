import { Button } from "@/components/ui/button";

import { ShoppingBag, Coffee, Building2, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const IndustryCard = ({ icon: Icon, title, description, colorClass, delay }: { icon: any, title: string, description: string, colorClass: string, delay?: number }) => (
  <div
    className="glass-card h-full p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <div className={cn("p-4 rounded-2xl mb-6 flex items-center justify-center bg-opacity-20", colorClass)}>
      <Icon size={32} className="text-foreground" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
  </div>
);

export default function IndustriesPage() {
  return (
    <div className="container py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
          Tailored for Your Industry
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how Flow Networks transforms guest WiFi into a strategic asset across different sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a href="/industries/retail" className="group block h-full no-underline" aria-label="Learn more about Retail solutions">
          <IndustryCard
            icon={ShoppingBag}
            title="Retail"
            description="Drive footfall and increase basket size. Send personalized offers to shoppers while they are in-store."
            colorClass="bg-primary/20 text-primary"
          />
        </a>
        <a href="/industries/hospitality" className="group block h-full no-underline" aria-label="Learn more about Hospitality solutions">
          <IndustryCard
            icon={Coffee}
            title="Hospitality"
            description="Enhance the guest experience. Collect feedback in real-time, promote on-site amenities, and build loyalty."
            colorClass="bg-secondary/20 text-secondary"
          />
        </a>
        <a href="/industries/venues" className="group block h-full no-underline" aria-label="Learn more about Venues solutions">
          <IndustryCard
            icon={Building2}
            title="Venues"
            description="Monetize your WiFi network. Engage thousands of fans simultaneously with exclusive content and promotions."
            colorClass="bg-accent/20 text-accent"
          />
        </a>
        <a href="/industries/public-transport" className="group block h-full no-underline" aria-label="Learn more about Public Transport solutions">
          <IndustryCard
            icon={Plane}
            title="Transport"
            description="Improve passenger satisfaction. Provide seamless connectivity in transit hubs and deliver travel updates."
            colorClass="bg-muted/20 text-muted-foreground"
          />
        </a>
      </div>
    </div>
  );
}
