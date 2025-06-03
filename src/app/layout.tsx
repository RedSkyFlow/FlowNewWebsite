import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import PageTransitionWrapper from '@/components/shared/PageTransitionWrapper';
import FloatingChatButton from '@/components/shared/FloatingChatButton';

export const metadata: Metadata = {
  title: 'FlowAI Gateway - Intelligent Automation Solutions',
  description: 'Empowering businesses with cutting-edge AI Gateway technology and tailored AI agent solutions for various industries.',
  keywords: 'AI Gateway, Artificial Intelligence, Automation, AI Agents, FlowAI, Purple.ai, flowhq.co.za, Hospitality AI, Retail AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider defaultOpen={false}>
          <div className="flex flex-col min-h-screen">
            <AppHeader />
            <PageTransitionWrapper>
              <main className="flex-grow">
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
