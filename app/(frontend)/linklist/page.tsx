'use client';

import React from 'react';
import LinkList from '@/components/LinkList';

export default function LinksPage() {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md w-11/12 max-w-md'>
      <div className='flex flex-col items-center mb-4'>
        <img
          src='/logo/1500/black.png'
          alt='Profile Avatar'
          className='w-24 h-24 rounded-full mb-2'
        />
        <h2 className='text-xl font-semibold'>Profile Name / Store Name</h2>
      </div>
      <h1 className='text-2xl font-bold mb-6 text-center'>Links</h1>{' '}
      {/* Increased margin-bottom */}
      <div className='mb-4'>
        {' '}
        {/* Added margin-bottom */}
        <LinkList />
      </div>
    </div>
  );
}
