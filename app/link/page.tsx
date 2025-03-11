'use client';

import React from 'react';
import Link from 'next/link';
import LinkList from '@/components/LinkList';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './styles.css';

export default function LinksPage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <motion.div
        className='bg-transparent p-6 rounded-lg shadow-lg w-11/12 max-w-md backdrop-filter backdrop-blur-lg animated-border'
        style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}
        animate={{
          borderImageSource: [
            'linear-gradient(90deg, black, white, grey, black)',
            'linear-gradient(180deg, black, white, grey, black)',
            'linear-gradient(270deg, black, white, grey, black)',
            'linear-gradient(360deg, black, white, grey, black)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}>
        <Link href='/' className='flex flex-col items-center mb-10'>
          <Image
            src='/logo/1500/black.png'
            alt='Profile Avatar'
            className='w-24 h-24 rounded-full mb-2'
            width={24}
            height={24}
          />
          <h2 className='text-xl font-semibold'>TnV Clothing / tnvclothingid</h2>
        </Link>
        <h1 className='text-2xl font-bold mb-6 text-center'>Links</h1>
        <div className='mb-4'>
          <LinkList />
        </div>
      </motion.div>
    </div>
  );
}
