import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NotificationBanner } from '@/components/notification-banner';
import { MainNav } from '@/components/main-nav';
import BackgroundPaths from '@/components/background-paths';
import { SplashScreen } from '@/components/splash-screen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TNV Clothing',
  description: 'Premium streetwear and comfortable clothing',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
