import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NotificationBanner } from '@/components/notification-banner';
import { MainNav } from '@/components/main-nav';
import { ThemeProvider } from '@/components/theme-provider';
import BackgroundPaths from '@/components/background-paths';
import { SplashScreen } from '@/components/splash-screen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TNV Clothing',
  description: 'Premium streetwear and comfortable clothing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <BackgroundPaths title='' />
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          <SplashScreen />
          <div className='relative z-10'>
            <NotificationBanner />
            <MainNav />
            <main>{children}</main>
            <footer className='bg-black text-white py-8'>
              <div className='container mx-auto px-4'>
                <p className='text-center text-sm'>
                  © 2024 TNV Clothing. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
