import {Button} from '@/components/ui/button';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {CircleAlert, Copy} from 'lucide-react';

function ViewQuote() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;

  const invoices = [
    {
      product: 'Solar panel',
      price: '443',
      quantity: '2',
      amount: '886',
    },
    {
      product: 'MacBook Air',
      price: '999',
      quantity: '1',
      amount: '999',
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white  relative">
        <div className="relative">
          <img
            src={dataFromSource.image}
            className=" relative h-[13.3125rem] w-full object-cover"
          />
          <p className="text-white font-black absolute bottom-[2px] z-[1] ml-[0.6rem]">
            {dataFromSource.tag}
          </p>
        </div>

        <div className="p-[0.5rem]">
          <p className=" text-sm leading-[1.5rem] mb-2 text-primary">
            {dataFromSource.description}
          </p>

          <div className="my-2">
            <Table className="mb-6">
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className=" font-semibold text-sm p-0 text-primary ">
                    Order
                  </TableHead>
                  <TableHead className="text-right text-sm font-semibold p-0 text-primary">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border-b ">
                <TableRow>
                  <TableCell className="font-medium border-none p-0 ">
                    #00224
                  </TableCell>
                  <TableCell className="text-right font-medium px-0 py-2">
                    19th - Jan - 2024
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow className="border-none bg-transparent">
                  <TableHead className=" font-semibold text-sm px-0 text-primary ">
                    Product(s)
                  </TableHead>
                  <TableHead className=" font-semibold text-sm text-right text-primary">
                    Price
                  </TableHead>
                  <TableHead className=" font-semibold text-sm text-right text-primary ">
                    Quantity
                  </TableHead>
                  <TableHead className="text-right text-sm font-semibold px-0 text-primary">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map(invoice => (
                  <TableRow key={invoice.product} className="border-none  ">
                    <TableCell className="font-medium p-0 ">
                      {invoice.product}
                    </TableCell>
                    <TableCell className="text-right font-medium p-3 ">
                      ${invoice.price}
                    </TableCell>
                    <TableCell className="text-right font-medium py-0 ">
                      {invoice.quantity}
                    </TableCell>
                    <TableCell className="text-right font-medium p-0 ">
                      ${invoice.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className=" bg-transparent ">
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-primary text-right">
                    Total
                  </TableCell>
                  <TableCell className="text-right p-0">$1,885</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div className=" flex flex-col gap-[0.875rem] ">
            <div className="flex gap-2">
              <h1 className="text-primary text-sm font-semibold ">
                Payment details:
              </h1>
              <div className="text-[0.6rem]  cursor-pointer flex items-center bg-[#0B8DBC] text-white px-2 rounded-lg gap-2 ">
                <p>0001110001</p>
                <p>|</p>
                <p>Paystack- Titan</p>
                <div></div>
                <Copy className="w-3" />
              </div>
            </div>
            <div className="border-primary border rounded-lg text-primary bg-[#E9ECF2] flex items-center gap-2 p-2">
              <CircleAlert />
              <p className="text-xs  ">
                In the event of accepting this quote, kindly copy the details
                above to make payments on the next page.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-[2.25rem] ">
            <Button
              className="w-full hover:bg-[#1E427D] hover:text-white "
              onClick={() => {
                navigate('/view-quote/accept-quote', { state: dataFromSource });
              }}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              className="w-full hover:bg-[#1E427D] hover:text-white "
              onClick={() => {
                navigate('/view-quote/download');
              }}
            >
              Download PDF
            </Button>
            <Button
              variant="ghost"
              className="w-full text-primary hover:bg-[#1E427D] hover:text-white "
              onClick={() => {
                 navigate('/view-quote/reject');
              }}
            >
              Reject
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewQuote;
