
import HeroSection from '@/components/sections/HeroSection';
import HomepageKeyPointsSection from '@/components/sections/HomepageKeyPointsSection'; // New consolidated section
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CaseStudiesTeaserSection from '@/components/sections/CaseStudiesTeaserSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection'; // Adding Testimonials
import ROICalculator from '@/components/shared/ROICalculator'; // Adding ROI Calculator

// Removed ServicesOverviewSection as its content will be integrated into HomepageKeyPointsSection or similar

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* 
        The prompt mentions "Key Offerings Overview", "Key Benefits", "Client Success", "Future Tease".
        HomepageKeyPointsSection can cover "Key Offerings".
        WhyChooseUsSection covers "Key Benefits".
        CaseStudiesTeaserSection/TestimonialsSection covers "Client Success".
        A simple "Future Tease" can be added if needed.
      */}
      <HomepageKeyPointsSection /> 
      <WhyChooseUsSection />
      <TestimonialsSection /> {/* Client Success stories / Testimonials */}
      <CaseStudiesTeaserSection /> {/* Could be more focused on detailed examples */}
      {/* <ROICalculator /> */} {/* Optional: Based on "Tools" in constants, could be a homepage feature */ }
      {/* TODO: Add a "Future Tease" section if desired */}
      <CallToActionSection />
    </>
  );
}
