import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingCard = ({ title, price, features, recommended, delay }: { title: string, price: string, features: string[], recommended?: boolean, delay?: number }) => (
    <div
        className={cn(
            "relative flex flex-col h-full p-8 transition-all duration-300",
            recommended ? "laser-border bg-card/50" : "glass-card hover:bg-card/40"
        )}
    >
        {recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-primary/20">
                Most Popular
            </div>
        )}
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <div className="text-4xl font-extrabold mb-8 text-white">
            {price}
        </div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground items-start">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                </li>
            ))}
        </ul>
        <Button 
            className={cn(
                "w-full",
                recommended ? "btn-primary" : "btn-outline"
            )}
            variant={recommended ? "default" : "outline"}
        >
            Choose {title}
        </Button>
    </div>
);

export default function PricingPage() {
    return (
        <div className="container py-24">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that fits your business needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <PricingCard
                    title="Connect"
                    price="Free"
                    features={[
                        "Branded Splash Page",
                        "Social Login",
                        "Basic Analytics",
                        "Bandwidth Management"
                    ]}
                />
                <PricingCard
                    title="Capture"
                    price="Contact Us"
                    recommended={true}
                    features={[
                        "Everything in Connect",
                        "CRM Integration",
                        "Data Capture Fields",
                        "Email Validation",
                        "SMS Authentication"
                    ]}
                />
                <PricingCard
                    title="Engage"
                    price="Contact Us"
                    features={[
                        "Everything in Capture",
                        "Marketing Automation",
                        "Sentiment Analysis",
                        "Real-time Triggers",
                        "Micro-surveys"
                    ]}
                />
            </div>
        </div>
    );
}
