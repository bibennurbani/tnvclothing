'use client';

import { motion } from 'framer-motion';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${
      189 + i * 6
    } -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${
      343 - i * 6
    }C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6}`,
    color: `rgba(0,0,0,${0.02 + i * 0.005})`, // Changed to black with low opacity
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className='absolute inset-0 pointer-events-none'>
      <svg className='w-full h-full text-black' viewBox='0 0 696 316' fill='none'>
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke='currentColor'
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({ title = '' }: { title?: string }) {
  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden bg-white'>
      <div className='absolute inset-0'>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
}
