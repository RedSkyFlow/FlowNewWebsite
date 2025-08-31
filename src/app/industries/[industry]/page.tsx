
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES_DATA } from '@/lib/constants';
import IndustryPageClient from '@/components/shared/IndustryPageClient';

type IndustryPageProps = {
  params: { industry: string };
};

// This function tells Next.js which dynamic paths to pre-render at build time.
// It can only be used in a Server Component.
export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    industry: industry.id,
  }));
}

// This function generates metadata on the server.
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = INDUSTRIES_DATA.find(ind => ind.id === params.industry);
  if (!industry) {
    return {
      title: 'Industry Solution Not Found'
    };
  }
  return {
    title: `${industry.name} Solutions | Flow Networks`,
    description: `Explore our intelligent solutions for the ${industry.name} industry. ${industry.description}`,
  };
}

// This is now a Server Component. It fetches data and passes it to the Client Component.
export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRIES_DATA.find(ind => ind.id === params.industry);

  // If no industry is found for the given param, show a 404 page.
  if (!industry) {
    notFound();
  }

  // Render the Client Component and pass the industry data as props.
  return <IndustryPageClient industry={industry} />;
}
