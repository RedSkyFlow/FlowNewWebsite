// src/app/layout.tsx (Corrected)
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import { Toaster } from "@/components/ui/toaster";
import MousePositionUpdater from "@/components/shared/MousePositionUpdater";

const fontHeadline = Inter({
  subsets: ["latin"],
  variable: "--font-headline",
});

const fontBody = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

// --- FIX START ---
// Definitive metadata for the entire site, including the icon path.
export const metadata: Metadata = {
  title: {
    default: "Flow Networks | Intelligent Venue Ecosystems",
    template: "%s | Flow Networks",
  },
  description: "Transforming physical venues into sentient ecosystems with secure, AI-powered, hyper-local services.",
  icons: {
    icon: '/favicon.ico', // This explicitly tells Next.js where to find the icon.
  },
};
// --- FIX END ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <MousePositionUpdater />
        <div className="relative flex min-h-screen flex-col">
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}