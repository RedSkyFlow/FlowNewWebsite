import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google'; // 1. Import from next/font
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

// 2. Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Create CSS variable
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', // Create CSS variable
});

export const metadata: Metadata = {
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
  return (
    // 3. Apply font variables to the root element
    <html lang="en" className={cn(inter.variable, roboto.variable)} suppressHydrationWarning={true}>
      {/* 4. The <head> tag is no longer needed here for fonts */}
      <body className="font-headline antialiased" suppressHydrationWarning={true}>
        <MousePositionUpdater />
        <ParticleBackground 
          // 5. Use CSS variables for colors, not hard-coded values
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