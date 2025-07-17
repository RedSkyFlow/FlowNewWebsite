
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import { Toaster } from '@/components/ui/toaster';
import FloatingChatButton from '@/components/shared/FloatingChatButton';
import MousePositionUpdater from '@/components/shared/MousePositionUpdater';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Flow Networks | Intelligent Venue Solutions',
    template: '%s | Flow Networks',
  },
  description: 'Transforming physical venues into intelligent, data-driven ecosystems with our AI Gateway, powered by secure WiFi authentication and bespoke AI agents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground font-body">
        <MousePositionUpdater />
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
        <Toaster />
        <FloatingChatButton />
      </body>
    </html>
  );
}
