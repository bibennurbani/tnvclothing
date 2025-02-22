import { promises as fs } from 'fs';
import path from 'path';
import { ProductGrid } from '@/components/product-grid';
import type { Product } from '@/types/types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/mock-data/products.json');
  const objectData = await res.json();

  // Sort products by createdAt date, newest first
  return objectData.products.sort(
    (a: Product, b: Product) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export default async function NewProductsPage() {
  const products = await getProducts();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-black'>New Arrivals</h1>
      <ProductGrid products={products} />
    </div>
  );
}
