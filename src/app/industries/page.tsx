import { InfiniteMenu } from "@/components/shared/InfiniteMenu";
import { ParticleBackground } from "@/components/shared/ParticleBackground";

const industryItems = [
  {
    title: "Retail",
    description: "Drive footfall and increase basket size with personalized engagement.",
    image: "/Images/industries/reatail data.png",
    link: "/industries/retail"
  },
  {
    title: "Hospitality",
    description: "Enhance guest journeys through presence-verified intelligence.",
    image: "/Images/industries/Hotel concierge.png",
    link: "/industries/hospitality"
  },
  {
    title: "Stadiums",
    description: "Connect fans at scale and monetize every interaction.",
    image: "/Images/industries/Stadiums.png",
    link: "/industries/stadiums"
  },
  {
    title: "Airports",
    description: "Streamline passenger flow and boost non-aeronautical revenue.",
    image: "/Images/industries/Airports.png",
    link: "/industries/airports"
  },
  {
    title: "Shopping Malls",
    description: "Turn casual visitors into loyal customers with deep insights.",
    image: "/Images/industries/malls.png",
    link: "/industries/shopping-malls"
  },
  {
    title: "Public Transport",
    description: "Keep travelers connected and informed on the move.",
    image: "/Images/industries/transport.png",
    link: "/industries/public-transport"
  },
  {
    title: "Education",
    description: "Smart campus solutions for students and faculty connectivity.",
    image: "/Images/industries/campus wifi.png",
    link: "/industries/college-campuses"
  },
  {
    title: "Offices",
    description: "Optimized workspace connectivity for the modern enterprise.",
    image: "/Images/industries/Office WiFi.png",
    link: "/industries/offices"
  },
  {
    title: "Healthcare",
    description: "Secure, reliable patient and staff WiFi for critical environments.",
    image: "/Images/industries/Hospitals.png",
    link: "/industries/hospitals"
  }
];

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen bg-brand-base overflow-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">
      <ParticleBackground
        className="fixed inset-0 z-0"
        particleCount={30}
        speed={0.1}
        lineDistance={180}
      />

      <div className="relative z-10 flex flex-col items-center pt-32 h-screen">
        <div className="text-center mb-0 space-y-4 px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Intelligent Solutions for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent2">Human Space</span>
          </h1>
          <p className="text-xl text-brand-text/70">
            We don't just segment by sector; we architect experiences. Explore the Flow Ecosystem
            across the industries we're transforming.
          </p>
        </div>

        {/* 3D Infinite Menu Explorer */}
        <div className="flex-1 w-full relative -mt-10 overflow-hidden">
          <InfiniteMenu items={industryItems} />
        </div>
      </div>
    </main>
  );
}
