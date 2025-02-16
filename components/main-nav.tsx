'use client';

import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Logo } from './logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const mainNavItems = [
  { name: 'Produk Terbaru', href: '/new' },
  { name: 'Wanita', href: '/women' },
  { name: 'Pria', href: '/men' },
  { name: 'Anak-Anak', href: '/kids' },
  { name: 'SPEEDCAT', href: '/speedcat' },
  { name: 'Koleksi', href: '/collections' },
  { name: 'Olahraga', href: '/sports' },
  { name: 'Outlet', href: '/outlet' },
];

export function MainNav() {
  return (
    <nav className='bg-black text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center gap-8'>
            <Link href='/' className='flex-shrink-0'>
              <Logo />
            </Link>
            <div className='hidden lg:flex items-center gap-6'>
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-medium hover:text-gray-300 transition-colors'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='relative w-64 hidden lg:block'>
              <Input
                type='search'
                placeholder='CARI PUMA.COM'
                className='bg-gray-900 border-gray-700 text-white placeholder:text-gray-400'
              />
              <Search className='absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
            </div>
            <Button variant='ghost' size='icon' className='text-white'>
              <Search className='h-5 w-5 lg:hidden' />
            </Button>
            <Button variant='ghost' size='icon' className='text-white'>
              <ShoppingBag className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' className='text-white'>
              <User className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
