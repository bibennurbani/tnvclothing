import { AutoSliderBanner } from '@/components/auto-slider-banner';
import { ProductGrid } from '@/components/product-grid';
import { Product } from '@/types/types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/mock-data/products.json');
  const data = await res.json();
  return data.products;
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
      <AutoSliderBanner
        images={['/assets/banner/tnvclothingid.gif']}
        showOverlay={false}
      />
    </div>
  );
}
