'use client';

import useSWR from 'swr';
import { ProductGrid } from '@/components/product-grid';
import { ShopFilters } from '@/components/shop-filters';
import { ShopSort } from '@/components/shop-sort';
import type { Product } from '@/types/types';

// Define a fetcher function that returns JSON data.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ShopPage() {
  // Use a relative URL to ensure it automatically uses the current domain.
  const { data, error } = useSWR<{ products: Product[] }>(
    '/mock-data/products.json',
    fetcher
  );

  if (error) return <div>Error loading products: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const products = data.products;

  return (
    <div className='container mx-auto px-4 py-8 text-black'>
      <h1 className='text-4xl font-bold mb-8 text-black'>Shop All Products</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <aside className='w-full md:w-1/4 bg-white'>
          <div className='m-10'>
            <ShopFilters />
          </div>
        </aside>
        <main className='w-full md:w-3/4'>
          <div className='flex justify-between items-center mb-6'>
            <p className='text-sm text-gray-600'>{products.length} Products</p>
            <ShopSort />
          </div>
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
}
