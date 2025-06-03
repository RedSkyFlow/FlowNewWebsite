import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ROICalculator from '@/components/shared/ROICalculator';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <ROICalculator />
      <CallToActionSection />
    </>
  );
}
