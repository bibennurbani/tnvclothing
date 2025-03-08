'use client';

import useSWR from 'swr';
import { AutoSliderBanner } from '@/components/auto-slider-banner';
import { ProductGrid } from '@/components/product-grid';
import { Product } from '@/types/types';
import Link from 'next/link';

// Define a fetcher function to get JSON data.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  // Using SWR with a relative URL to automatically match the current domain.
  const { data, error } = useSWR<{ products: Product[] }>(
    '/mock-data/products.json',
    fetcher
  );

  if (error) return <div>Error loading products: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const products = data.products;

  return (
    <div>
      <AutoSliderBanner
        images={['/assets/banner/streetchrome.gif', '/assets/banner/tnf.gif']}
      />
      <div className='bg-white/80'>
        <section id='product-section' className='py-12'>
          <div className='container mx-auto px-4'>
            <Link href='/new-arrivals'>
              <h2 className='text-4xl font-bold mb-8 text-black flex items-center'>
                NEW ARRIVALS <span className='ml-2 text-2xl'>&rarr;</span>
              </h2>
            </Link>
            <ProductGrid products={products} />
          </div>
        </section>
      </div>
      <AutoSliderBanner
        images={['/assets/banner/tnvclothingid.gif']}
        showOverlay={false}
      />
    </div>
  );
}
