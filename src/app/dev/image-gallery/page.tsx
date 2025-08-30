'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

type ImageInfo = {
  src: string;
  alt: string;
};

const ImageGalleryPage: NextPage = () => {
  // Guessing image paths based on project structure and naming conventions
  const imageCategories: { title: string; images: ImageInfo[] } = {
    "Logos": [
      { src: '/images/logos/Allxs_logo.png', alt: 'Allxs Logo' },
      { src: '/images/logos/Baron Group Logo Round.webp', alt: 'Baron Group Logo' },
      { src: '/images/logos/CNN HPP logo.webp', alt: 'CNN HPP Logo' },
      { src: '/images/logos/Everlytic logo.png', alt: 'Everlytic Logo' },
      { src: '/images/logos/Flow-2D-logo.png', alt: 'Flow Networks 2D Logo' },
      { src: '/images/logos/Friendly Wifi Approved Partner.png', alt: 'Friendly Wifi Partner Logo' },
      { src: '/images/logos/Kaseya Centre Logo.webp', alt: 'Kaseya Centre Logo' },
      { src: '/images/logos/Miami Heat logo.webp', alt: 'Miami Heat Logo' },
      { src: '/images/logos/Nascar logo.webp', alt: 'Nascar Logo' },
      { src: '/images/logos/Newcastle Utd Logo.webp', alt: 'Newcastle Utd Logo' },
      { src: '/images/logos/purple-logo-white-v2.svg', alt: 'Purple Logo' },
    ],
    "Industries": [
      { src: '/images/industries/airport aI Gateway.png', alt: 'Airport AI Gateway' },
      { src: '/images/industries/Airports.png', alt: 'Airports' },
      { src: '/images/industries/cities-hero.jpg', alt: 'Cities Hero' },
      { src: '/images/industries/education-hero.jpg', alt: 'Education Hero' },
      { src: '/images/industries/event management.png', alt: 'Event Management' },
      { src: '/images/industries/Event WiFi (2).png', alt: 'Event WiFi' },
      { src: '/images/industries/Fan WiFi.png', alt: 'Fan WiFi' },
      { src: '/images/industries/healthcare.png', alt: 'Healthcare' },
      { src: '/images/industries/hospitality-hero.jpg', alt: 'Hospitality Hero' },
      { src: '/images/industries/Hotel concierge.png', alt: 'Hotel Concierge' },
      { src: '/images/industries/Hospitals.png', alt: 'Hospitals' },
      { src: '/images/industries/malls.png', alt: 'Malls' },
      { src: '/images/industries/malls-hero.jpg', alt: 'Malls Hero' },
      { src: '/images/industries/museums-hero.jpg', alt: 'Museums Hero' },
      { src: '/images/industries/Office WiFi.png', alt: 'Office WiFi' },
      { src: '/images/industries/reatail data.png', alt: 'Retail Data' },
      { src: '/images/industries/Stadiums.png', alt: 'Stadiums' },
      { src: '/images/industries/transport-hero.jpg', alt: 'Transport Hero' },
      { src: '/images/industries/workspace wifi.png', alt: 'Workspace WiFi' },
    ],
    "Products": [
        { src: '/images/products/Allxs-pillar-page-image.png', alt: 'Allxs Pillar Page' },
        { src: '/images/products/cashless events.png', alt: 'Cashless Events' },
        { src: '/images/products/Click and collect.png', alt: 'Click and Collect' },
        { src: '/images/products/Connect Plan.jpg', alt: 'Connect Plan' },
        { src: '/images/products/Engage - personalised marketing.jpg', alt: 'Engage Personalised Marketing' },
        { src: '/images/products/Event WiFi (2).png', alt: 'Event WiFi Product' },
        { src: '/images/products/Friendly Wifi Family.jpg', alt: 'Friendly Wifi Family' },
        { src: '/images/products/Hotel concierge.png', alt: 'Hotel Concierge Product' },
        { src: '/images/products/malls.png', alt: 'Malls Product' },
        { src: '/images/products/monitise wifi stratagies.jpg', alt: 'Monetise WiFi Strategies' },
        { src: '/images/products/securepass-add-on-arriving.jpg', alt: 'SecurePass Add-on' },
        { src: '/images/products/Shield-Add-on-hero-image.jpg', alt: 'Shield Add-on' },
        { src: '/images/products/SMB WiFi31.jpg', alt: 'SMB WiFi' },
        { src: '/images/products/Survey-add-on-image.jpg', alt: 'Survey Add-on' },
    ],
    "Solutions": [
        { src: '/images/solutions/3rd Party Intergrations.jpg', alt: '3rd Party Integrations' },
        { src: '/images/solutions/AI.png', alt: 'AI Solution' },
        { src: '/images/solutions/Internet connectivity1.jpg', alt: 'Internet Connectivity' },
        { src: '/images/solutions/McDonalds Splash.png', alt: 'McDonalds Splash' },
        { src: '/images/solutions/PaidWifiGuest_WiFi-hotel-lobby.jpg', alt: 'Paid WiFi' },
        { src: '/images/solutions/personalised engagement3.jpg', alt: 'Personalised Engagement' },
        { src: '/images/solutions/secure safe wifi.jpg', alt: 'Secure Safe WiFi' },
        { src: '/images/solutions/solutions-hub-hero.png', alt: 'Solutions Hub' },
        { src: '/images/solutions/splash-page - 2024-11-14T091428.903.png', alt: 'Splash Page' },
        { src: '/images/solutions/Sponsored WiFi3.jpg', alt: 'Sponsored WiFi' },
    ],
    "Miscellaneous": [
       { src: '/images/allxs-cashless-hero.jpg', alt: 'Allxs Cashless Hero' },
       { src: '/images/allxs-education-hero.jpg', alt: 'Allxs Education Hero' },
       { src: '/images/allxs-event-hero.jpg', alt: 'Allxs Event Hero' },
       { src: '/images/cnntap-brand-hero.jpg', alt: 'CNNTAP Brand Hero' },
       { src: '/images/cnntap-global-hero.jpg', alt: 'CNNTAP Global Hero' },
       { src: '/images/everlytic-hero.jpg', alt: 'Everlytic Hero' },
       { src: '/images/favicon.ico', alt: 'Favicon' },
    ]
  };

  return (
    <div className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading text="Image Gallery" as="h1" className="text-4xl text-center font-bold mb-4" />
        <p className="text-center text-muted-foreground mb-12">Here are the images available in the `/public` folder.</p>
        
        {Object.entries(imageCategories).map(([category, images]) => (
          <ScrollAnimatedSection key={category} as="section" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {images.map(image => (
                <Card key={image.src}>
                  <CardHeader className="p-2">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain rounded-md"
                        unoptimized // Display raw image without optimization
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if image fails to load
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-2">
                    <p className="text-xs break-all text-muted-foreground">{image.src}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryPage;
