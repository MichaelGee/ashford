// import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {Button} from '@/components/ui/button';
import {Filter} from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import DateRange from '@/components/ui/dateRange';
import {DateRange as ReactDayPickerDateRange} from 'react-day-picker';
import {useState} from 'react';

const TransactionsFilter = () => {
  const [dateRange, setDateRange] = useState<
    ReactDayPickerDateRange | undefined
  >({
    from: new Date(),
    to: null,
  });

  // Function to handle date selection
  const handleDateChange = (range: ReactDayPickerDateRange | undefined) => {
    setDateRange(range);
  };
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="bg-[#E9ECF2] p-[0.65rem] rounded-[0.3287rem]">
          <Filter />
        </div>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-[1.5rem]">
        <DrawerHeader>
          <DrawerTitle>
            <h1 className="text-start text-primary font-bold mb-5">
              Filter Transactions
            </h1>
          </DrawerTitle>
          <DrawerDescription>
            <div className="flex items-center justify-between mb-5  ">
              <p className="text-[0.75rem] text-primary">Date</p>
              <DateRange date={dateRange} setDate={handleDateChange} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.75rem] text-primary">Transaction Status</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="requested">Requested</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button className="w-full">Display Transactions</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TransactionsFilter;
