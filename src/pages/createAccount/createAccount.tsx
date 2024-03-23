import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';

const CreateAccount = () => {
  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">
          Create your Ashford Account
        </h1>
        <p className="text-[0.8rem] text-gray002">
          Join the league of happy people using Ashford for their deliveries
        </p>
      </div>
      <form className=" h-[65vh] flex flex-col justify-between ">
        <div className="flex flex-col justify-between gap-space200">
          <div className="flex gap-space200">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <Input placeholder="Phone number" />
          <Input placeholder="Name of company (Optional)" />
          <Input placeholder="Create a 6-digit pin" type="password" />
          <Input placeholder="Confirm pin" type="password" />
        </div>
        <div>
          <div className="items-top flex space-x-2 mb-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-[0.8rem] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-[0.8rem] leading-4 text-gray002">
                You acknowledge that you read, and agree to our{' '}
                <span className="text-blue001">terms and conditions</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center gap-space100">
            <Button className="w-full">Submit</Button>
            <span className="text-[0.8rem]">
              Have an account already? <a href="/auth/login">Login</a>
            </span>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateAccount;
