import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Google from '@/assets/images/google.svg';

const LoginAsGuest = () => {
  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Sign In</h1>
        <p className="text-[0.8rem] text-gray002">
          You will receive a 6-digit OTP
        </p>
      </div>
      <form className="flex flex-col justify-between h-[65vh]">
        <div className="flex flex-col gap-space200">
          <Input placeholder="Email or Phone number" type="text" />
          <Button className="w-full">Send OTP</Button>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-space100">
          <Button className="w-fit bg-transparent" variant="outline">
            <img src={Google} className="mr-3" /> Sign in with Google
          </Button>
          <span className="text-[0.8rem]">
            New user? <a>Sign up</a>
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default LoginAsGuest;
