import { ProductCard } from '@/components/product-card';
import { AutoSliderBanner } from '@/components/auto-slider-banner';
import { Product } from '@/types/types';

async function getProducts() {
  // In a real application, this would be an API call
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
            <h1 className='text-4xl font-bold mb-8 text-black'>EXPLORE NEW DROPS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {products.map((product: Product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <AutoSliderBanner
        images={['/assets/banner/tnvclothingid.gif', '/assets/banner/tnf.gif']}
        showOverlay={false}
      />
    </div>
  );
}
