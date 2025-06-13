
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-[#0282F2]/10 via-transparent to-transparent rounded-full -translate-x-1/3 -translate-y-1/3 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-[#F46036]/10 via-transparent to-transparent rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E2FDFF] mb-8 leading-tight [text-shadow:0_0_25px_#0282F280]">
          Flow Networks: Engineering Future Connectivity
        </h1>
        <p className="text-lg md:text-xl text-[#E2FDFF]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          We architect and deploy cutting-edge network solutions, empowering your business with intelligent infrastructure for tomorrow's demands.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/solutions" passHref>
            <button className="bg-[#0282F2] hover:bg-[#0272d2] text-white font-semibold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_8px_30px_rgb(2,130,242,0.3)] hover:shadow-[0_10px_40px_rgb(2,130,242,0.4)] w-full sm:w-auto">
              Explore Solutions
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="border-2 border-[#0282F2] text-[#0282F2] hover:bg-[#0282F2]/10 hover:text-[#E2FDFF] font-semibold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_5px_20px_rgb(2,130,242,0.2)] hover:shadow-[0_8px_30px_rgb(2,130,242,0.3)] w-full sm:w-auto">
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
  splashImageHint: string;
}

const offeringsData: Offering[] = [
  { icon: Wifi, title: 'Intelligent WiFi', description: 'High-performance, secure wireless networks tailored for your venue\'s specific needs and user demands.', href: '/solutions/intelligent-wifi', splashImageHint: 'secure wifi network' },
  { icon: MapIcon, title: 'Location Intelligence', description: 'Unlock valuable insights from user movement, behavior patterns, and presence data within your space.', href: '/solutions/location-intelligence', splashImageHint: 'analytics dashboard map' },
  { icon: MonitorIcon, title: 'Digital Content & Signage', description: 'Engaging digital displays and dynamic content delivery systems for information and advertising.', href: '/solutions/digital-content-signage', splashImageHint: 'digital ad screen' },
  { icon: MailCheck, title: 'Email & SMS Marketing', description: 'Automated and targeted communication strategies to boost engagement and drive conversions.', href: '/solutions/email-sms-marketing', splashImageHint: 'marketing campaign stats' },
];

const KeyOfferingsSection = () => {
  return (
    <SectionWrapper className="bg-[#0F0E08]">
      <div className="container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-6 [text-shadow:0_0_15px_#E2FDFF40]">Our Core Offerings</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-20 max-w-2xl mx-auto leading-relaxed">
          Discover our suite of solutions designed to enhance connectivity, gather insights, and drive engagement through intuitive digital touchpoints.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
          {offeringsData.map((offering, index) => (
            <Link key={offering.title} href={offering.href} passHref>
              <div 
                 className={`group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 
                 drop-shadow-[0_10px_20px_rgba(2,130,242,0.15)] hover:drop-shadow-[0_15px_30px_rgba(2,130,242,0.25)]
                 ${index % 2 === 0 ? 'rotate-[-4deg] hover:rotate-[-6deg]' : 'rotate-[4deg] hover:rotate-[6deg]'}`}
              >
                {/* iPhone Mockup */}
                <div className="relative mx-auto w-[280px] h-[570px] bg-black/70 border-[3px] border-neutral-700/80 rounded-[36px] shadow-2xl p-2 backdrop-blur-sm">
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-800 rounded-full z-10"></div> {/* Notch */}
                  <div className="w-full h-full bg-[#0A0903] rounded-[28px] overflow-hidden">
                    <Image 
                      src={`https://placehold.co/260x530.png/0A0903/E2FDFF?text=${encodeURIComponent(offering.description)}`}
                      alt={`${offering.title} - ${offering.description.substring(0,40)}...`}
                      width={260}
                      height={530}
                      className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      data-ai-hint={offering.splashImageHint}
                    />
                  </div>
                </div>
                {/* Content Below Phone */}
                <div className="mt-6 text-center px-2">
                  <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-2 group-hover:text-[#FFCB47] transition-colors duration-300">{offering.title}</h3>
                  {/* Description is now on the phone screen */}
                  <div className="inline-flex items-center text-[#0282F2]/80 group-hover:text-[#FFCB47] transition-colors duration-300 font-medium text-sm">
                    Explore
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-6 [text-shadow:0_0_15px_#E2FDFF40]">The Flow Networks Advantage</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          Partnering with us means unlocking tangible benefits that drive growth and efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => (
            <div key={benefit.title} className="bg-gradient-to-tl from-[#1A1913]/90 to-[#100F0A]/95 backdrop-blur-sm p-8 rounded-xl shadow-[0_10px_30px_-15px_rgba(244,96,54,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(244,96,54,0.25)] flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 group border border-white/10">
              <div className="p-5 mb-6 bg-[#F46036]/15 rounded-full text-[#F46036] transition-all duration-300 group-hover:bg-[#F46036]/25 group-hover:scale-110">
                <benefit.icon size={36} /> {/* Adjusted icon size */}
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#E2FDFF] mb-6 [text-shadow:0_0_15px_#E2FDFF40]">Trusted By Industry Leaders</h2>
        <p className="text-[#E2FDFF]/70 mb-10 max-w-xl mx-auto leading-relaxed">
          We're proud to partner with businesses of all sizes to achieve their connectivity goals.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300 ease-in-out">
          {/* Placeholder for logos - replace with actual SVGs or images */}
          <span className="text-3xl font-headline text-[#E2FDFF]/40 hover:text-[#E2FDFF]/60 transition-colors">ClientLogo1</span>
          <span className="text-3xl font-headline text-[#E2FDFF]/40 hover:text-[#E2FDFF]/60 transition-colors">ClientLogo2</span>
          <span className="text-3xl font-headline text-[#E2FDFF]/40 hover:text-[#E2FDFF]/60 transition-colors">ClientLogo3</span>
          <span className="text-3xl font-headline text-[#E2FDFF]/40 hover:text-[#E2FDFF]/60 transition-colors">ClientLogo4</span>
        </div>
        <p className="mt-12 text-sm text-[#E2FDFF]/50 italic">(Client logos and testimonials coming soon)</p>
      </div>
    </SectionWrapper>
  );
};

// Section: Future Tease
const FutureTeaseSection = () => {
  return (
    <SectionWrapper className="bg-[#0A0903]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-tr from-[#0282F2]/10 via-transparent to-transparent p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(2,130,242,0.15)] border border-[#0282F2]/20 hover:border-[#0282F2]/40 transition-all duration-300 ease-in-out transform hover:scale-102">
          <Aperture size={48} className="mx-auto mb-6 text-[#FFCB47]" /> {/* Slightly smaller icon */}
          <h3 className="font-headline text-2xl md:text-3xl font-semibold text-[#E2FDFF] mb-4 [text-shadow:0_0_10px_#FFCB4750]">Innovating for Tomorrow</h3>
          <p className="text-[#E2FDFF]/80 text-md md:text-lg mb-6 leading-relaxed">
            Flow Networks is pioneering the next wave of intelligent venue solutions. We're building the foundation for AI-driven experiences that will redefine interaction and efficiency. Stay tuned for what's next.
          </p>
          <Link href="/about#vision" passHref> {/* Assumes a #vision anchor on the about page */}
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
