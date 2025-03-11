import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Link {
  id: number;
  name: string;
  url: string;
  icon: string;
  iconPosition: 'left' | 'right';
}

const LinkList: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    fetch('/data/links.json')
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error('Error fetching links:', error));
  }, []);

  return (
    <ul className='list-none p-0'>
      {links.map((link) => (
        <li key={link.id} className='mb-4'>
          <a
            className='flex items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-2 px-4 rounded-full shadow-md hover:from-gray-600 hover:via-gray-800 hover:to-black transition'
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'>
            {link.iconPosition === 'left' && (
              <Image
                src={link.icon}
                alt=''
                className='w-6 h-6 mr-2'
                width={6}
                height={6}
              />
            )}
            <span
              className={`flex-grow text-left ${
                link.iconPosition === 'left' ? 'ml-2' : 'ml-10'
              }`}>
              {link.name}
            </span>
            {link.iconPosition === 'right' && (
              <Image
                src={link.icon}
                alt=''
                className='w-6 h-6 ml-2'
                width={6}
                height={6}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
