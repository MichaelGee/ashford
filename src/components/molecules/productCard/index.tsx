// import React from 'react'

import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-[8px] max-w-[10rem] min-h-[9.8rem]">
      <img src="https://rb.gy/8ywh5w" className="rounded-t-[8px]" />
      <div className="p-[0.5rem]">
        <p className="text-[0.6rem] mb-2 text-primary">
          Our expedited air cargo service ensures rapid and reliable tran...
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Get quote{' '}
          <div className="ml-1">
            <ArrowRight width={15} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
