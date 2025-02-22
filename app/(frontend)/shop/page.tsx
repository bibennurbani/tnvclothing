import { promises as fs } from 'fs';
import path from 'path';
import { ProductGrid } from '@/components/product-grid';
import { ShopFilters } from '@/components/shop-filters';
import { ShopSort } from '@/components/shop-sort';
import type { Product } from '@/types/types';

async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'public/mock-data/products.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(jsonData);
  return objectData.products;
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className='container mx-auto px-4 py-8 text-black'>
      <h1 className='text-4xl font-bold mb-8 text-black'>Shop All Products</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <aside className='w-full md:w-1/4'>
          <ShopFilters />
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
