import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRupiah = (value: number) => {
  // This will format the number with Indonesian thousand separators
  return value.toLocaleString('id-ID');
};
