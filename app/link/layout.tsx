'use client';

import React from 'react';
import BackgroundPaths from '@/components/background-paths';
import { SplashScreen } from '@/components/splash-screen';

export default function LinkListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex flex-col items-center justify-center max-h-screen'>
      <div className='absolute inset-0 -z-10'>
        <BackgroundPaths title='' />
      </div>

      <SplashScreen />
      <div className='flex flex-col items-center justify-center flex-1 h-full'>
        {children}
      </div>
      <footer className='w-full bg-black text-white py-8'>
        <div className='container mx-auto px-4'>
          <p className='text-center text-sm'>© 2024 TNV Clothing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
