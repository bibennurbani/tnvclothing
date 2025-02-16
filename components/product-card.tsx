'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  compareAtPrice: number | null;
  images: { url: string; alt: string }[];
  ratings: { average: number; count: number };
}

export function ProductCard({
  id,
  name,
  price,
  compareAtPrice,
  images,
  ratings,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={id} className='bg-white rounded-lg overflow-hidden shadow-lg'>
      <div
        className='relative aspect-square'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Image
          src={isHovered && images[1] ? images[1].url : images[0].url}
          alt={isHovered && images[1] ? images[1].alt : images[0].alt}
          fill
          className='object-cover transition-opacity duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-black'>{name}</h3>
        <div className='flex items-center justify-between mb-2'>
          <div>
            <span className='text-lg font-bold text-black'>${price.toFixed(2)}</span>
            {compareAtPrice && (
              <span className='ml-2 text-sm text-gray-500 line-through'>
                ${compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className='flex items-center'>
            <span className='text-yellow-400'>★</span>
            <span className='ml-1 text-sm text-gray-600'>
              {ratings.average.toFixed(1)} ({ratings.count})
            </span>
          </div>
        </div>
        <Button className='w-full bg-black text-white hover:bg-gray-800'>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
