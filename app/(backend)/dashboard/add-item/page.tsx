'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AddItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ name, description, price });
    alert('Item added successfully!');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Add New Item</h1>
      <form onSubmit={handleSubmit} className='max-w-md'>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-600'>
            Name
          </label>
          <Input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-600'>
            Description
          </label>
          <Textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-600'>
            Price
          </label>
          <Input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <Button type='submit'>Add Item</Button>
      </form>
    </div>
  );
}
