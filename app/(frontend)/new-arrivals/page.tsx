'use client';

import useSWR from 'swr';
import { ProductGrid } from '@/components/product-grid';
import type { Product } from '@/types/types';

// Define a fetcher function to handle the HTTP request and JSON parsing.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewProductsPage() {
  // Use SWR to fetch the products data using a relative URL.
  const { data, error } = useSWR<{ products: Product[] }>(
    '/mock-data/products.json',
    fetcher
  );

  if (error) return <div>Error loading products: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  // Sort products by createdAt date (newest first)
  const sortedProducts = data.products.sort(
    (a: Product, b: Product) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-black'>New Arrivals</h1>
      <ProductGrid products={sortedProducts} />
    </div>
  );
}
