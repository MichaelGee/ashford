import TransactionsFilter from '@/components/molecules/transactionsFilter';
import {Input} from '@/components/ui/input';
import Status from '@/components/ui/status';
import {formatDate} from '@/lib/utils';
import {ChevronRight, Search} from 'lucide-react';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import emptyDash from '../../assets/images/emptyDash.svg';

const TransactionHistory = () => {
  const location = useLocation();
  const dataFromSource = location.state;
  const navigate = useNavigate();

  const handleClick = quote => {
    const status = quote?.status;
    if (status === 'requested') {
      navigate('/requested-quote', {state: {quote}});
      if (status === 'non-ongoing') navigate('/quote', {state: quote});
      if (status === 'pending') navigate('/view-quote', {state: quote});
    }
  };
  return (
    <React.Fragment>
      <div className="flex items-center gap-2">
        <Input
          startIcon={Search}
          placeholder="Search History"
          className="bg-[#E9ECF2] border-none"
        />
        <TransactionsFilter data={dataFromSource} />
      </div>
      <div>
        {dataFromSource ? (
          dataFromSource?.map(quote => (
            <div
              key={quote?._id}
              onClick={() => handleClick(quote)}
              className="flex justify-between items-center py-[1rem] mt-2 border-b-[0.7px] border-[#00000033]"
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
        ) : (
          <div className="h-[70vh] flex flex-col justify-center items-center">
            <>
              <img src={emptyDash} alt="" />
              <p className=" text-center text-[#0B8DBC] mt-[1.1875rem] ">
                No transaction history.
              </p>
            </>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default TransactionHistory;
