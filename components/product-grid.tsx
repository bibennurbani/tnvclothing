import { ProductCard } from '@/components/product-card';
import type { Product } from '@/types/types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
