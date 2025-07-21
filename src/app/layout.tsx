import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import PageTransitionWrapper from '@/components/shared/PageTransitionWrapper';
import FloatingChatButton from '@/components/shared/FloatingChatButton';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import MousePositionUpdater from '@/components/shared/MousePositionUpdater';
import SchemaMarkup from '@/components/shared/SchemaMarkup'; // 1. IMPORT THE SCHEMA COMPONENT

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  // Your existing metadata is excellent.
  title: {
    default: 'Flow Networks - Intelligent Venue & AI Gateway Solutions',
    template: '%s | Flow Networks',
  },
  description: 'Flow Networks transforms physical venues into intelligent ecosystems with secure WiFi, location analytics, WiFi Marketing, and the visionary AI Gateway for hyper-local experiences.',
  keywords: 'Intelligent WiFi, Venue Analytics, Guest WiFi, WiFi Marketing, AI Gateway, Flow Networks, Purple WiFi, Location Intelligence, Marketing Automation, AI Agents, Smart Venues, Everlytic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. DEFINE THE SCHEMA OBJECTS WITH YOUR OFFICIAL DATA
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flow Networks',
    url: 'https://flowhq.co.za',
    logo: 'https://flowhq.co.za/images/logos/flow-logo-for-schema.png', // NOTE: Ensure this logo image exists at this path
    sameAs: [
      'https://www.facebook.com/flowrhs',
      'https://www.linkedin.com/company/flow-networks-pty-ltd/about/',
      'https://www.youtube.com/@flowhq.global/about',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Flow Networks',
    url: 'https://flowhq.co.za',
  };

  return (
    <html lang="en" className={cn(inter.variable, roboto.variable)} suppressHydrationWarning={true}>
      <head>
        {/* 3. INJECT THE SCHEMA MARKUP INTO THE HEAD OF EVERY PAGE */}
        <SchemaMarkup schema={[organizationSchema, websiteSchema]} />
      </head>
      <body className="font-headline antialiased" suppressHydrationWarning={true}>
        <MousePositionUpdater />
        <ParticleBackground 
          colors={['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))']} 
          speed={0.2}
          particleCount={35}
        />
        <SidebarProvider defaultOpen={false}>
          <div className="relative z-10 flex flex-col min-h-screen flex-1 bg-transparent">
            <AppHeader />
            <PageTransitionWrapper>
              <main className="flex-grow w-full">
                {children}
              </main>
            </PageTransitionWrapper>
            <AppFooter />
          </div>
          <FloatingChatButton />
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}