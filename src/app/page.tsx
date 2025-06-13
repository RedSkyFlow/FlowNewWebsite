
import type { NextPage } from 'next';
import Link from 'next/link';
import { Wifi, MapPin as MapIcon, Tv as MonitorIcon, MailCheck, ShieldCheck as FamilyFriendlyWifiIcon, UserCheck as ProfessionalServicesIcon, CalendarDays as EventWifiIcon, DollarSign, Link as LinkIcon, Zap, CheckCircle, BarChart3, Users, Brain, Aperture, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Helper for consistent section padding
const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
};

// Section: Hero
const HeroSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903] text-center min-h-[70vh] flex flex-col justify-center items-center">
      <div className="container mx-auto px-6">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E2FDFF] mb-6 leading-tight">
          Flow Networks: Engineering Future Connectivity
        </h1>
        <p className="text-lg md:text-xl text-[#E2FDFF]/80 max-w-3xl mx-auto mb-10">
          We architect and deploy cutting-edge network solutions, empowering your business with intelligent infrastructure for tomorrow's demands.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/solutions" passHref>
            <button className="bg-[#0282F2] hover:bg-[#0272d2] text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
              Explore Solutions
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="border-2 border-[#0282F2] text-[#0282F2] hover:bg-[#0282F2] hover:text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out w-full sm:w-auto">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

// Section: Key Offerings Overview
interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const offeringsData: Offering[] = [
  { icon: Wifi, title: 'Intelligent WiFi', description: 'High-performance, secure wireless networks tailored for your needs.', href: '/solutions/intelligent-wifi' },
  { icon: MapIcon, title: 'Location Intelligence', description: 'Unlock valuable insights from user movement and behavior within your venue.', href: '/solutions/location-intelligence' },
  { icon: MonitorIcon, title: 'Digital Content & Signage', description: 'Engaging digital displays and dynamic content delivery systems.', href: '/solutions/digital-content-signage' },
  { icon: MailCheck, title: 'Email & SMS Marketing', description: 'Targeted communication strategies to boost engagement and growth.', href: '/solutions/email-sms-marketing' },
];

const KeyOfferingsSection = () => {
  return (
    <SectionWrapper className="bg-[#0F0E08]"> {/* Slightly lighter dark shade for contrast */}
      <div className="container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-4">Our Core Offerings</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-12 max-w-2xl mx-auto">
          Discover our suite of solutions designed to enhance connectivity, gather insights, and drive engagement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offeringsData.map((offering) => (
            <Link key={offering.title} href={offering.href} passHref>
              <div className="bg-[#1A1913] p-6 rounded-xl shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:bg-[#F46036] hover:shadow-orange-500/30 group cursor-pointer">
                <div className="p-3 mb-4 bg-[#0282F2] rounded-full text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#F46036]">
                  <offering.icon size={32} />
                </div>
                <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-2 group-hover:text-white">{offering.title}</h3>
                <p className="text-sm text-[#E2FDFF]/70 group-hover:text-white/90 flex-grow">{offering.description}</p>
                <ArrowRight className="mt-4 text-[#0282F2] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" size={20}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Section: Key Benefits
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}
const benefitsData: Benefit[] = [
  { icon: Zap, title: 'Enhanced Connectivity', description: 'Reliable, high-speed network performance for all users and devices.' },
  { icon: BarChart3, title: 'Actionable Insights', description: 'Data-driven understanding of your venue for smarter decision-making.' },
  { icon: Users, title: 'Improved User Experience', description: 'Seamless and engaging digital interactions for your customers and staff.' },
  { icon: Brain, title: 'Future-Ready Infrastructure', description: 'Scalable and secure networks built to adapt to evolving technological demands.' },
];

const KeyBenefitsSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903]">
      <div className="container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-4">The Flow Networks Advantage</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-12 max-w-2xl mx-auto">
          Partnering with us means unlocking tangible benefits that drive growth and efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => (
            <div key={benefit.title} className="bg-[#1A1913] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="p-4 mb-5 bg-[#FFCB47] rounded-full text-[#0A0903]">
                <benefit.icon size={36} />
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#E2FDFF]/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Section: Client Success (Placeholder)
const ClientSuccessSection = () => {
  return (
    <SectionWrapper className="bg-[#0F0E08]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#E2FDFF] mb-4">Trusted By Industry Leaders</h2>
        <p className="text-[#E2FDFF]/70 mb-8 max-w-xl mx-auto">
          We're proud to partner with businesses of all sizes to achieve their connectivity goals.
        </p>
        <div className="flex justify-center items-center space-x-8 opacity-60">
          {/* Placeholder for logos */}
          <span className="text-2xl font-headline">Logo Placeholder 1</span>
          <span className="text-2xl font-headline">Logo Placeholder 2</span>
          <span className="text-2xl font-headline">Logo Placeholder 3</span>
        </div>
        <p className="mt-8 text-sm text-[#E2FDFF]/50 italic">(Client logos and testimonials coming soon)</p>
      </div>
    </SectionWrapper>
  );
};

// Section: Future Tease
const FutureTeaseSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0282F2]/30 via-[#F46036]/20 to-[#FFCB47]/20 p-8 rounded-xl shadow-2xl">
          <Aperture size={40} className="mx-auto mb-4 text-[#FFCB47]" />
          <h3 className="font-headline text-2xl font-semibold text-[#E2FDFF] mb-3">Innovating for Tomorrow</h3>
          <p className="text-[#E2FDFF]/80 text-md">
            Flow Networks is pioneering the next wave of intelligent venue solutions. We're building the foundation for AI-driven experiences that will redefine interaction and efficiency. Stay tuned for what's next.
          </p>
          <Link href="/about#vision" passHref> {/* Hypothetical link */}
            <button className="mt-6 text-[#FFCB47] font-semibold hover:underline">
              Learn More About Our Vision <ArrowRight className="inline ml-1" size={18}/>
            </button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};


// Main Homepage Component
const HomePage: NextPage = () => {
  return (
    <div className="bg-[#0A0903] text-[#E2FDFF] min-h-screen font-body antialiased">
      {/*
        Metadata should be handled via Next.js Metadata API in layout.tsx or this page directly
        e.g., export const metadata = { title: 'Flow Networks', description: '...' };
        For simplicity in this single file update, I'm omitting <Head>
      */}
      <HeroSection />
      <KeyOfferingsSection />
      <KeyBenefitsSection />
      <ClientSuccessSection />
      <FutureTeaseSection />
    </div>
  );
};

export default HomePage;

    