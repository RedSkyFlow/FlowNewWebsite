
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Wifi, MapPin as MapIcon, Tv as MonitorIcon, MailCheck, ShieldCheck as FamilyFriendlyWifiIcon, UserCheck as ProfessionalServicesIcon, CalendarDays as EventWifiIcon, DollarSign, Link as LinkIcon, Zap, CheckCircle, BarChart3, Users, Brain, Aperture, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
            <motion.button 
              className="bg-[#0282F2] hover:bg-[#0272d2] text-white font-semibold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_8px_30px_rgb(2,130,242,0.3)] hover:shadow-[0_10px_40px_rgb(2,130,242,0.4)] w-full sm:w-auto"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Solutions
            </motion.button>
          </Link>
          <Link href="/contact" passHref>
            <motion.button 
              className="border-2 border-[#0282F2] text-[#0282F2] hover:bg-[#0282F2]/10 hover:text-[#E2FDFF] font-semibold py-3.5 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_5px_20px_rgb(2,130,242,0.2)] hover:shadow-[0_8px_30px_rgb(2,130,242,0.3)] w-full sm:w-auto"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
            </motion.button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- KeyOfferingsSection ---

interface PhoneOffering {
  icon: LucideIcon;
  title: string;
  features: string[]; // Changed from description to features
  splashImageHint: string;
}

const offeringsData: PhoneOffering[] = [
  { 
    icon: Wifi, 
    title: 'Intelligent WiFi', 
    features: [ // Array of features
      "High-performance, secure access.",
      "Seamless user onboarding & engagement.",
      "Branded captive portals with data capture.",
      "Foundation for venue analytics & insights."
    ], 
    splashImageHint: 'wifi login screen analytics' 
  },
  { 
    icon: MapIcon, 
    title: 'Location Intelligence', 
    features: [
      "Track user movement & dwell times.",
      "Optimize layouts, staffing & operations.",
      "Understand behavioral patterns in real-time.",
      "Data-driven decision making for growth."
    ], 
    splashImageHint: 'map analytics dashboard' 
  },
  { 
    icon: MonitorIcon, 
    title: 'Digital Content & Signage', 
    features: [
      "Dynamic content delivery on any screen.",
      "Engaging information & wayfinding displays.",
      "Impactful advertising & promotional platform.",
      "Centralized content management & scheduling."
    ], 
    splashImageHint: 'digital signage promotion screen' 
  },
  { 
    icon: MailCheck, 
    title: 'Email & SMS Marketing', 
    features: [
      "Targeted communication campaigns.",
      "Automated messaging workflows triggered by behavior.",
      "Boost customer loyalty & drive conversions.",
      "Personalized engagement at scale."
    ], 
    splashImageHint: 'marketing email on phone' 
  },
];

const PhoneScreenContent: React.FC<{ title: string; features: string[]; IconComponent: LucideIcon }> = ({ title, features, IconComponent }) => (
  <div className="p-4 sm:p-6 text-[#E2FDFF] h-full flex flex-col items-center text-left overflow-y-auto scrollbar-hide justify-start pt-6 sm:pt-8 md:pt-10">
    <IconComponent className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 md:mb-8 text-[#FFCB47] shrink-0" />
    <h4 className="font-headline text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-white text-center w-full px-1">{title}</h4>
    <ul className="space-y-2 sm:space-y-3 w-full px-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-left">
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFCB47] mr-2 sm:mr-3 shrink-0 mt-0.5 sm:mt-1 [filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.6))]" />
          <span className="text-sm sm:text-base text-[#E2FDFF]/90 leading-normal tracking-wide">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PhoneRender: React.FC<{ 
  offering: PhoneOffering;
  className?: string; 
  isGhost?: boolean; 
  angle?: number;
}> = ({ offering, className, isGhost = false, angle = 0 }) => (
  <div 
    className={cn(
      "relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] md:w-[340px] md:h-[680px] transition-all duration-500 ease-out",
      "bg-[#100F0A] border border-neutral-700 rounded-3xl p-1.5", 
      isGhost 
        ? "opacity-20 filter blur-md" 
        : "shadow-[0_10px_20px_rgba(0,0,0,0.3),_0_0_0_1.5px_rgba(200,200,255,0.07),_0_0_45px_rgba(2,130,242,0.3)]",
      className
    )}
    style={{
      transform: `rotateY(${angle}deg) scale(${isGhost ? 0.95 : 1})`,
      transformStyle: 'preserve-3d',
    }}
  >
    {/* Notch */}
    <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-[#0A0903] rounded-full z-20"></div>
    {/* Screen */}
    <div className="w-full h-full bg-gradient-to-br from-[#0A0903] via-[#0F0E08]/95 to-[#0282F2]/10 rounded-2xl overflow-hidden relative z-10">
      <PhoneScreenContent title={offering.title} features={offering.features} IconComponent={offering.icon} />
    </div>
  </div>
);


const KeyOfferingsSection = () => {
  return (
    <SectionWrapper className="bg-[#0F0E08] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-[#E2FDFF] mb-6 [text-shadow:0_0_15px_#E2FDFF40]">Our Core Offerings</h2>
        <p className="text-center text-[#E2FDFF]/70 mb-20 sm:mb-24 md:mb-28 max-w-2xl mx-auto leading-relaxed">
          Discover our suite of solutions designed to enhance connectivity, gather insights, and drive engagement through intuitive digital touchpoints.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-28 sm:gap-y-36 md:gap-y-40 lg:gap-x-10">
          {offeringsData.map((offering, index) => (
            <div 
              key={offering.title} 
              className="relative flex flex-col items-center min-h-[420px] sm:min-h-[720px] md:min-h-[760px]"
              style={{ perspective: '2000px' }} 
            >
              <motion.div 
                className="relative transition-transform duration-500 ease-out group hover:scale-105"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: index % 2 === 0 ? (isGhostLayer(1) ? 20 : 5) : (isGhostLayer(1) ? -20 : -5) }} 
                style={{ 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Ghost Phone Layer 1 (Furthest Back) */}
                <PhoneRender
                  offering={offering}
                  isGhost
                  className="absolute top-0 left-0 !opacity-20 !blur-md transform -translate-x-8 -translate-y-8 -rotate-[25deg] scale-[0.90] z-0"
                  angle={index % 2 === 0 ? 20 : -20} 
                />
                {/* Ghost Phone Layer 2 (Middle) */}
                <PhoneRender
                  offering={offering}
                  isGhost
                  className="absolute top-0 left-0 !opacity-35 !blur-sm transform translate-x-5 translate-y-5 rotate-[10deg] scale-[0.95] z-10"
                  angle={index % 2 === 0 ? 10 : -10}
                />
                {/* Primary Phone (Front) */}
                <PhoneRender
                  offering={offering}
                  className="relative z-20 group-hover:shadow-[0_0_60px_rgba(2,130,242,0.45)]"
                  angle={index % 2 === 0 ? 15 : -15}
                />
              </motion.div>
              <div className="mt-10 text-center px-2">
                <h3 className="font-headline text-xl md:text-2xl font-semibold text-[#E2FDFF] mb-3 group-hover:text-[#FFCB47] transition-colors duration-300">{offering.title}</h3>
                <Link href={`/solutions/${offering.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} passHref>
                  <div className="inline-flex items-center text-[#0282F2]/80 group-hover:text-[#FFCB47] transition-colors duration-300 font-medium text-sm md:text-base cursor-pointer">
                    Explore Offering
                    <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Helper function to determine if it's a ghost layer for rotation logic
const isGhostLayer = (layerIndex: number) => layerIndex > 0;


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
          {benefitsData.map((benefit, index) => (
            <motion.div 
              key={benefit.title} 
              className="bg-gradient-to-tl from-[#1A1913]/90 to-[#100F0A]/95 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 group border border-white/10 shadow-[0_10px_30px_-15px_rgba(244,96,54,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(244,96,54,0.25)]" // Orange glow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-5 mb-6 bg-[#F46036]/15 rounded-full text-[#F46036] transition-all duration-300 group-hover:bg-[#F46036]/25 group-hover:scale-110">
                <benefit.icon size={36} />
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#E2FDFF] mb-3 group-hover:text-[#FFCB47] transition-colors duration-300">{benefit.title}</h3>
              <p className="text-sm text-[#E2FDFF]/70 group-hover:text-[#E2FDFF]/80">{benefit.description}</p>
            </motion.div>
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
          <Aperture size={40} className="mx-auto mb-6 text-[#FFCB47]" />
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
    

    