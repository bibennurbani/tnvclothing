import { AutoSliderBanner } from '@/components/auto-slider-banner';
import { promises as fs } from 'fs';
import path from 'path';
import type { Product } from '@/types/types';
import { ProductGrid } from '@/components/product-grid';

async function getProducts(): Promise<Product[]> {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'public/mock-data/products.json');
  // Read the json file
  const jsonData = await fs.readFile(filePath, 'utf8');
  // Parse the JSON string
  const objectData = JSON.parse(jsonData);
  return objectData.products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <AutoSliderBanner
        images={['/assets/banner/streetchrome.gif', '/assets/banner/tnf.gif']}
      />
      <div className='bg-white/80'>
        <section id='product-section' className='py-12'>
          <div className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold mb-8 text-black'>NEW ARRIVALS</h1>
            <ProductGrid products={products} />
          </div>
        </section>
      </div>
    </div>
  );
}
