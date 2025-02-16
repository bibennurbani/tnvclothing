import { HoodieCard } from '@/components/hoodie-card';

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: 'TNV Classic Black',
      price: 149.99,
      image1: 'https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg',
      image2: 'https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg',
    },
    {
      id: 2,
      name: 'TNV Premium Gray',
      price: 154.99,
      image1: 'https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg',
      image2: 'https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg',
    },
    {
      id: 3,
      name: 'TNV Signature Navy',
      price: 159.99,
      image1: 'https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg',
      image2: 'https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg',
    },
    {
      id: 4,
      name: 'TNV Limited Edition',
      price: 199.99,
      image1: 'https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg',
      image2: 'https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg',
    },
  ];

  return (
    <div className='bg-white/80'>
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-8 text-black'>EXPLORE NEW DROPS</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
