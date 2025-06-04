
import HeroSection from '@/components/sections/HeroSection';
import HomepageKeyPointsSection from '@/components/sections/HomepageKeyPointsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ROICalculator from '@/components/shared/ROICalculator';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomepageKeyPointsSection />
      <TestimonialsSection />
      <ROICalculator />
      <CallToActionSection />
    </>
  );
}
