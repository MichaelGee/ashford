import ProductCard from '@/components/molecules/productCard';
import React from 'react';

const Home = () => {
  const array = Array.from({length: 6});
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
        <div className="flex flex-wrap gap-4">
          {array.map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
