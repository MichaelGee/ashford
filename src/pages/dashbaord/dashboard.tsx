import ProductCard from '@/components/molecules/productCard';
import Status from '@/components/ui/status';
import {ChevronRight} from 'lucide-react';
import React from 'react';

const Dashboard = () => {
  const products = [
    {id: 1, tag: 'AIR FREIGHT'},
    {id: 2, tag: 'SEA FREIGHT'},
    {id: 3, tag: 'CARGO'},
    {id: 4, tag: 'LAND FREIGHT'},
    {id: 5, tag: 'WAREHOUSING'},
    {id: 6, tag: 'PACKAGING'},
  ];
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-primary font-medium leading-[28px]">
          Good Afternoon, Raymond
        </h1>
        <p className="text-[0.6rem] leading-[20px]">How are you doing today?</p>
      </div>
      <h1 className="text-blue002 text-[0.8rem] mt-6">
        Welcome to <span className="font-bold">Ashford Express Logistics</span>{' '}
        - Your Trusted Partner in Streamlined Delivery
      </h1>

      {/* Products */}
      <div className="mt-space400">
        <h1 className="text-primary font-bold mb-space200">Our Products</h1>
        <div className="flex flex-wrap gap-4 justify-between">
          {products.map(product => (
            <ProductCard key={product.id} tag={product.tag} />
          ))}
        </div>
      </div>

      {/* Transaction history overview */}
      <div className="flex flex-col mt-space300">
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-bold mb-space200">
            Transaction History
          </h1>{' '}
          <p className="text-[0.6rem] text-blue003">View all</p>
        </div>

        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="success" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="pending" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="requested" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="success" />
            <ChevronRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
