'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface AutoSliderBannerProps {
  images: string[];
  descriptionText?: string;
  buttonText?: string;
  showOverlay?: boolean;
}

export function AutoSliderBanner({
  images,
  descriptionText = 'Elevate Your Style',
  buttonText = 'SHOP',
  showOverlay = true,
}: AutoSliderBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handleShopClick = () => {
    const productSection = document.getElementById('product-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}>
          <Image
            src={src || '/placeholder.svg'}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      ))}

      {showOverlay && (
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-center mb-4'>
            Premium Streetwear
          </h1>
          <p className='text-xl text-gray-300 text-center mb-8'>{descriptionText}</p>
          <Button
            onClick={handleShopClick}
            size='lg'
            variant='outline'
            className='text-black border-black bg-white hover:bg-black hover:text-white'>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}
