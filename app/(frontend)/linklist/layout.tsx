'use client';

import React from 'react';
import BackgroundPaths from '@/components/background-paths';

export default function LinkListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      {/* BackgroundPaths behind everything */}
      <div className='absolute inset-0 -z-10'>
        <BackgroundPaths title='' />
      </div>
      {children}
    </div>
  );
}
