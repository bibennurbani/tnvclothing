'use client';

import React from 'react';
import BackgroundPaths from '@/components/background-paths';

export default function LinkListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex flex-col items-center justify-center max-h-screen'>
      {children}
    </div>
  );
}
