import ProductCard from '@/components/molecules/productCard';
import Status from '@/components/ui/status';
import {fetchPackagesEP} from '@/services/auth';
import {useQuery} from '@tanstack/react-query';
import {ChevronRight, Loader2} from 'lucide-react';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    data: products,
    isSuccess,
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: fetchPackagesEP,
  });

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
        <div className="flex flex-wrap gap-y-2 justify-between">
          {isLoading ? (
            <div className="flex justify-center w-full h-16 items-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            products?.data?.docs?.map(product => (
              <ProductCard
                key={product._id}
                packageId={product._id}
                tag={product.name}
                status="quote"
                description={product?.description}
                image={product?.image}
              />
            ))
          )}
          {isError ? (
            <div className="flex justify-center w-full h-16 items-center">
              <p className="text-red-500 text-xs">
                Error fetching Products: {error?.message}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Transaction history overview */}
      <div className="flex flex-col mt-space300">
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-bold mb-space200">
            Transaction History
          </h1>{' '}
          <p
            className="text-[0.6rem] text-blue003 cursor-pointer"
            onClick={() => {
              navigate('/transaction-history');
            }}
          >
            View all
          </p>
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
