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
    <html lang='en' className='h-full'>
      <body className={`${inter.className} h-full min-h-screen relative flex flex-col`}>
        {/* BackgroundPaths behind everything */}
        <div className='absolute inset-0 -z-10'>
          <BackgroundPaths title='' />
        </div>

        <SplashScreen />
        <NotificationBanner />
        <MainNav />

        {/* Main content grows to fill available space */}
        <main className='flex-grow'>{children}</main>

        <footer className='bg-black text-white py-8'>
          <div className='container mx-auto px-4'>
            <p className='text-center text-sm'>
              © 2024 TNV Clothing. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
