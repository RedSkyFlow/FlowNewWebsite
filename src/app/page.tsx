
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <CaseStudiesTeaserSection />
      <CallToActionSection />
    </>
  );
}
