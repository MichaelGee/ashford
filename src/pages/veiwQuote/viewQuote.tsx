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
import {formatter} from '@/lib/currency';
import {acceptQouteEP} from '@/services/user';
import {formatQuoteDate} from '@/lib/utils';

function ViewQuote() {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state.quote;
  console.log(dataFromSource);

  const acceptQuote = () => {
    setIsLoading(true);
    acceptQouteEP(dataFromSource._id)
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <div className="bg-white  relative">
        <div className="relative">
          <img
            src={dataFromSource?.quote?.packageId?.image}
            className=" relative h-[13.3125rem] w-full object-cover"
          />
          <p className="text-white font-black absolute bottom-[2px] z-[1] ml-[0.6rem]">
            {dataFromSource?.quote?.packageId?.tag}
          </p>
        </div>

        <div className="p-[0.5rem]">
          <p className=" text-sm leading-[1.5rem] mb-2 text-primary">
            {dataFromSource?.quote?.packageId?.description}
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
                    #{dataFromSource._id}
                  </TableCell>
                  <TableCell className="text-right font-medium px-0 py-2">
                    {formatQuoteDate(dataFromSource.quote.responseDate)}
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
                {dataFromSource?.products?.map(invoice => (
                  <TableRow key={invoice._id} className="border-none  ">
                    <TableCell className="font-medium p-0 ">
                      {invoice.name}
                    </TableCell>
                    <TableCell className="text-right font-medium p-3 ">
                      {formatter.format(invoice.price)}
                    </TableCell>
                    <TableCell className="text-right font-medium py-0 ">
                      {invoice.quantity}
                    </TableCell>
                    <TableCell className="text-right font-medium p-0 ">
                      {formatter.format(
                        invoice.price * parseInt(invoice.quantity)
                      )}
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
                  <TableCell className="text-right p-0">
                    {formatter.format(dataFromSource.totalAmount)}
                  </TableCell>
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
                <p>{dataFromSource?.paymentDetails?.account_number}</p>
                <p>|</p>
                <p>{dataFromSource?.paymentDetails?.bank}</p>
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
              onClick={acceptQuote}
              loading={isLoading}
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
                navigate('/view-quote/reject-quote', {state: dataFromSource});
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
