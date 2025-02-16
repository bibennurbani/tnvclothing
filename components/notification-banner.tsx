'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='bg-[#B39B7D] text-white px-4 py-2 text-sm text-center relative'>
      <span>
        GRATIS ONGKIR DENGAN PEMBELIAN LEBIH DARI Rp 250K PULAU JAWA. SILAHKAN CEK S&K
        PENGIRIMAN{' '}
        <Link href='/shipping' className='underline'>
          DI SINI
        </Link>
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className='absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full'>
        <X className='h-4 w-4' />
      </button>
    </div>
  );
}
