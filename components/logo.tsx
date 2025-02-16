import Image from 'next/image';

export function Logo() {
  return (
    <div className='relative w-10 h-10'>
      <Image
        src='/logo/svg/transparant.svg'
        alt='TNV'
        fill
        className='object-contain'
        priority
      />
    </div>
  );
}
