import TransactionsFilter from '@/components/molecules/transactionsFilter';
import {Input} from '@/components/ui/input';
import Status from '@/components/ui/status';
import {formatDate} from '@/lib/utils';
import {ChevronRight, Search} from 'lucide-react';
import React from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

const TransactionHistory = () => {
  const location = useLocation();
  const dataFromSource = location.state;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex items-center gap-2">
        <Input
          startIcon={Search}
          placeholder="Search History"
          className="bg-[#E9ECF2] border-none"
        />
        <TransactionsFilter />
      </div>
      <div>
        {dataFromSource?.map(quote => (
          <div
            onClick={() => {
              if (quote.status === 'requested') {
                navigate('/requested-quote', {state: {quote}});
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
        ))}
      </div>
    </React.Fragment>
  );
};

export default TransactionHistory;
