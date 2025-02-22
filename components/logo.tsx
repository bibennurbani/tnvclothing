import Image from 'next/image';

interface LogoProps {
  style?: 'transparant' | 'black' | 'white';
}

export function Logo({ style = 'transparant' }: LogoProps) {
  const src = `/logo/svg/${style}.svg`;

  return (
    <div className='relative w-10 h-10'>
      <Image src={src} alt='TNV Logo' fill className='object-contain' priority />
    </div>
  );
}
