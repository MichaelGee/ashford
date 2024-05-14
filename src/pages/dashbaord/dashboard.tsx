import ProductCard from '@/components/molecules/productCard';
import Status from '@/components/ui/status';
import {formatDate} from '@/lib/utils';
import {fetchPackagesEP, quotesEP} from '@/services/user';
import {useQuery} from '@tanstack/react-query';
import {ChevronRight, Loader2} from 'lucide-react';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    data: fetchedPackages,
    isError: iserrorProducts,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useQuery({
    queryKey: ['product'],
    queryFn: fetchPackagesEP,
  });

  const {
    data: fetchedQuotes,
    isLoading: isloadingQuote,
    isError: isErrorQuotes,
    error: ErrorQuote,
  } = useQuery({
    queryKey: ['Quotes'],
    queryFn: quotesEP,
  });

  return (
    <React.Fragment>
      {' '}
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
          {isLoadingProducts ? (
            <div className="flex justify-center w-full h-16 items-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            fetchedPackages?.data?.data?.data.map(product => (
              <ProductCard
                key={product._id}
                packageId={product._id}
                tag={product.name}
                status={product.ongoingOrderStatus}
                description={product?.description}
                image={product?.image}
              />
            ))
          )}
          {iserrorProducts ? (
            <div className="flex justify-center w-full h-16 items-center">
              <p className="text-red-500 text-xs">
                Error fetching Products: {errorProducts?.message}
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
              navigate('/transaction-history', {
                state: fetchedQuotes.data.docs,
              });
            }}
          >
            View all
          </p>
        </div>
        {isloadingQuote ? (
          <div className="flex justify-center w-full h-16 items-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          fetchedQuotes.data.docs?.map(quote => (
            <div
              key={quote?._id}
              onClick={() => {
                if (quote.status === 'non-ongoing') {
                  navigate('/quote', {state: {quote}});
                }
                if (quote.status === 'requested') {
                  navigate('/requested-quote', {state: {quote}});
                }
                if (quote.status === 'pending') {
                  navigate('/view-quote', {state: {quote}});
                }
              }}
              className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]"
            >
              <div className="flex">
                <img
                  src={quote?.quote?.packageId?.image}
                  className="rounded-[8px] w-[48px] h-[48px]"
                />
                <div className="ml-[1rem]">
                  <h1 className="text-[0.9rem] mb-[0.4rem]">
                    {quote?.quote?.packageId?.name}
                  </h1>
                  <p className="text-[0.6rem] text-blue004">
                    {formatDate(quote?.quote?.responseDate)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Status variant={quote.status} />
                <ChevronRight />
              </div>
            </div>
          ))
        )}
        {isErrorQuotes ? (
          <div className="flex justify-center w-full h-16 items-center">
            <p className="text-red-500 text-xs">
              Error fetching Quotes: {ErrorQuote?.message}
            </p>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
