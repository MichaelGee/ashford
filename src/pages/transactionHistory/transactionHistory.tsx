import TransactionsFilter from '@/components/molecules/transactionsFilter';
import {Input} from '@/components/ui/input';
import Status from '@/components/ui/status';
import {ChevronRight, Search} from 'lucide-react';
import React from 'react';

const TransactionHistory = () => {
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
            <Status variant="rejected" />
            <ChevronRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionHistory;
