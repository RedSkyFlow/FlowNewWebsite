
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { INDUSTRIES_DATA } from '@/lib/constants'; // Removed type Industry import as it's inferred
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Removed CheckCircle as it's not used
import CallToActionSection from '@/components/sections/CallToActionSection';

type IndustryPageProps = {
  params: { industry: string };
};

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    industry: industry.id,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = INDUSTRIES_DATA.find(ind => ind.id === params.industry);
  if (!industry) {
    return { title: 'Industry Solution Not Found' };
  }
  return {
    title: `${industry.name} - AI Solutions | Flow Networks AI Gateway`,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRIES_DATA.find(ind => ind.id === params.industry);

  if (!industry) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The requested industry solution could not be found.
        </p>
        <Button asChild>
          <Link href="/industries">Explore Other Solutions</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedHeading 
                text={industry.title}
                as="h1" 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 !font-headline"
              />
              <p className="text-lg text-muted-foreground md:text-xl mb-8">
                {industry.description}
              </p>
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link href={`/contact?solution=${industry.id}`}>
                  {industry.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div>
              <Image 
                src={industry.image}
                alt={`${industry.name} AI Solutions`}
                width={1200}
                height={600}
                className="rounded-xl shadow-2xl object-cover"
                data-ai-hint={industry.imageHint}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            text={`Key Features for ${industry.name}`}
            as="h2" 
            className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.features.map((feature) => (
              <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                     <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CallToActionSection />
    </>
  );
}
