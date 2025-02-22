import { promises as fs } from 'fs';
import path from 'path';
import { ProductGrid } from '@/components/product-grid';
import type { Product } from '@/types/types';

async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'public/mock-data/products.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(jsonData);

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
