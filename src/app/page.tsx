
import type { NextPage } from 'next';
import Link from 'next/link';
import { Wifi, MapPin as MapIcon, Tv as MonitorIcon, MailCheck, ShieldCheck as FamilyFriendlyWifiIcon, UserCheck as ProfessionalServicesIcon, CalendarDays as EventWifiIcon, DollarSign, Link as LinkIcon, Zap, CheckCircle, BarChart3, Users, Brain, Aperture, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Helper for consistent section padding
const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
};

// Section: Hero
const HeroSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903] text-center min-h-[75vh] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Subtle background glow elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#0282F2]/10 via-transparent to-transparent rounded-full -translate-x-1/4 -translate-y-1/4 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#F46036]/10 via-transparent to-transparent rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E2FDFF] mb-8 leading-tight [text-shadow:0_0_15px_#0282F260]">
          Flow Networks: Engineering Future Connectivity
        </h1>
        <p className="text-lg md:text-xl text-[#E2FDFF]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          We architect and deploy cutting-edge network solutions, empowering your business with intelligent infrastructure for tomorrow's demands.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/solutions" passHref>
            <button className="bg-[#0282F2] hover:bg-[#0272d2] text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-[#0282F2]/40 w-full sm:w-auto">
              Explore Solutions
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="border-2 border-[#0282F2] text-[#0282F2] hover:bg-[#0282F2]/20 hover:text-[#E2FDFF] font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out w-full sm:w-auto shadow-md hover:shadow-[#0282F2]/30">
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
    <SectionWrapper className="bg-[#0F0E08]">
      <div className="container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-6 [text-shadow:0_0_10px_#E2FDFF30]">Our Core Offerings</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          Discover our suite of solutions designed to enhance connectivity, gather insights, and drive engagement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offeringsData.map((offering) => (
            <Link key={offering.title} href={offering.href} passHref>
              <div className="bg-gradient-to-br from-[#1A1913] to-[#100F0A] p-6 rounded-xl shadow-[0_10px_30px_-15px_rgba(2,130,242,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(2,130,242,0.3)] h-full flex flex-col items-center text-center transition-all duration-300 ease-in-out group cursor-pointer transform hover:-translate-y-1">
                <div className="p-4 mb-5 bg-[#0282F2]/20 rounded-full text-[#0282F2] transition-all duration-300 group-hover:bg-[#0282F2]/30 group-hover:scale-110">
                  <offering.icon size={36} />
                </div>
                <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-3 group-hover:text-[#FFCB47] transition-colors duration-300">{offering.title}</h3>
                <p className="text-sm text-[#E2FDFF]/70 group-hover:text-[#E2FDFF]/80 flex-grow mb-4">{offering.description}</p>
                <ArrowRight className="mt-auto text-[#0282F2]/70 group-hover:text-[#FFCB47] transition-all duration-300 group-hover:translate-x-1" size={24}/>
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-6 [text-shadow:0_0_10px_#E2FDFF30]">The Flow Networks Advantage</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          Partnering with us means unlocking tangible benefits that drive growth and efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => (
            <div key={benefit.title} className="bg-gradient-to-tl from-[#1A1913] to-[#100F0A] p-8 rounded-xl shadow-[0_10px_30px_-15px_rgba(244,96,54,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(244,96,54,0.3)] flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="p-5 mb-6 bg-[#F46036]/20 rounded-full text-[#F46036] transition-all duration-300 group-hover:bg-[#F46036]/30 group-hover:scale-110">
                <benefit.icon size={40} />
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-3 group-hover:text-[#FFCB47] transition-colors duration-300">{benefit.title}</h3>
              <p className="text-sm text-[#E2FDFF]/70 group-hover:text-[#E2FDFF]/80">{benefit.description}</p>
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#E2FDFF] mb-6 [text-shadow:0_0_10px_#E2FDFF30]">Trusted By Industry Leaders</h2>
        <p className="text-[#E2FDFF]/70 mb-10 max-w-xl mx-auto leading-relaxed">
          We're proud to partner with businesses of all sizes to achieve their connectivity goals.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Placeholder for logos - replace with actual SVGs or images */}
          <span className="text-2xl font-headline text-[#E2FDFF]/50">ClientLogo1</span>
          <span className="text-2xl font-headline text-[#E2FDFF]/50">ClientLogo2</span>
          <span className="text-2xl font-headline text-[#E2FDFF]/50">ClientLogo3</span>
          <span className="text-2xl font-headline text-[#E2FDFF]/50">ClientLogo4</span>
        </div>
        <p className="mt-10 text-sm text-[#E2FDFF]/50 italic">(Client logos and testimonials coming soon)</p>
      </div>
    </SectionWrapper>
  );
};

// Section: Future Tease
const FutureTeaseSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-tr from-[#0282F2]/10 via-[#0A0903] to-[#0A0903] p-8 md:p-12 rounded-2xl shadow-2xl shadow-[#0282F2]/20 border border-[#0282F2]/20 hover:border-[#0282F2]/40 transition-all duration-300">
          <Aperture size={48} className="mx-auto mb-6 text-[#FFCB47]" />
          <h3 className="font-headline text-2xl md:text-3xl font-semibold text-[#E2FDFF] mb-4">Innovating for Tomorrow</h3>
          <p className="text-[#E2FDFF]/80 text-md md:text-lg mb-6 leading-relaxed">
            Flow Networks is pioneering the next wave of intelligent venue solutions. We're building the foundation for AI-driven experiences that will redefine interaction and efficiency. Stay tuned for what's next.
          </p>
          <Link href="/about#vision" passHref>
            <button className="text-[#FFCB47] font-semibold hover:text-[#E2FDFF] transition-colors duration-300 group inline-flex items-center">
              Learn More About Our Vision <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20}/>
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
      <HeroSection />
      <KeyOfferingsSection />
      <KeyBenefitsSection />
      <ClientSuccessSection />
      <FutureTeaseSection />
    </div>
  );
};

export default HomePage;

    