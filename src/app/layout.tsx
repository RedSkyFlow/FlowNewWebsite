
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import PageTransitionWrapper from '@/components/shared/PageTransitionWrapper';
import FloatingChatButton from '@/components/shared/FloatingChatButton';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <ParticleBackground />
        <SidebarProvider defaultOpen={false}>
          <div className="flex flex-col min-h-screen flex-1 relative z-10">
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
