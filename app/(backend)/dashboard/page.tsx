import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Dashboard</h1>
      <Link href='/dashboard/add-item'>
        <Button>Add New Item</Button>
      </Link>
      {/* Add more dashboard content here */}
    </div>
  );
}
