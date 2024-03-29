import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function ForgotPin() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Forgot Pin?</h1>
        <p className="text-[0.8rem] text-gray002">
          Don’t worry, it happens. Please enter the email or phone number
          associated with your account.
        </p>
      </div>
      <form className="flex flex-col justify-between h-[65vh]">
        <div className="flex flex-col gap-space200">
          <Input placeholder="Email or Phone number" />

          <a className="text-[0.8rem] underline">Try another way</a>
        </div>
        <div className="flex flex-col text-center gap-space100">
          <Button
            className="w-full"
            type="submit"
            onClick={() => navigate('/auth/login')}
          >
            Reset Pin
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ForgotPin;
