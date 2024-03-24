import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

const QuoteForm = () => {
  return (
    <React.Fragment>
      <h1 className="text-[1.25rem] text-primary font-bold text-center">
        Warehousing
      </h1>
      <p className="text-[0.8rem] mt-space200 mb-space600">
        We are glad that you have chosen us. Kindly fill this form and we will
        get back to you shortly.
      </p>

      <form className=" h-[65vh] flex flex-col justify-between ">
        <div className="flex flex-col justify-between gap-space200">
          <Input placeholder="Country of departure" />
          <Input placeholder="Final delivery address" />
          <div className="flex gap-space200">
            <Input placeholder="Recipient’s full name" />
            <Input placeholder="Recipient’s contact number" />
          </div>
          <Input placeholder="Weight of package" />
          <Input placeholder="Package Description (Fragile, Perishable, etc.)" />
          <Input placeholder="Special Instructions (Optional)" />
        </div>
        <div>
          <div className="flex flex-col text-center gap-space100">
            <Button className="w-full">Submit</Button>
            <Button className="w-full" variant="outline">
              Cancel Request
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default QuoteForm;
