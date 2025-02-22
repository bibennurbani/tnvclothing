'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const categories = ['Hoodies', 'T-Shirts', 'Pants', 'Shoes', 'Accessories'];
const colors = ['Black', 'White', 'Gray', 'Blue', 'Red'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function ShopFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className='space-y-4'>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='categories'>
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              {categories.map((category) => (
                <div key={category} className='flex items-center'>
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`category-${category}`} className='ml-2'>
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='colors'>
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              {colors.map((color) => (
                <div key={color} className='flex items-center'>
                  <Checkbox
                    id={`color-${color}`}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => handleColorChange(color)}
                  />
                  <Label htmlFor={`color-${color}`} className='ml-2'>
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='sizes'>
          <AccordionTrigger>Sizes</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-2'>
              {sizes.map((size) => (
                <div key={size} className='flex items-center'>
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                  />
                  <Label htmlFor={`size-${size}`} className='ml-2'>
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
