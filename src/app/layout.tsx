
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import PageTransitionWrapper from '@/components/shared/PageTransitionWrapper';
import FloatingChatButton from '@/components/shared/FloatingChatButton';

export const metadata: Metadata = {
  title: 'Flow Networks - Advanced Network Solutions',
  description: 'Flow Networks delivers robust, scalable, and secure networking infrastructure and services to drive your business forward.',
  keywords: 'Network Solutions, WiFi Infrastructure, Location Intelligence, Digital Signage, Flow Networks, flowhq.co.za',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Removed 'dark' class */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <SidebarProvider defaultOpen={false}>
          <div className="flex flex-col min-h-screen flex-1">
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
