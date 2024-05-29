import {Button} from '@/components/ui/button';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import success from '../../assets/images/Successfully Done.gif';

function ResetPinSuccessful() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex flex-col w-full h-[70vh] items-center justify-center ">
        <div className="mb-6 w-[14.375rem] h-[14.375rem] ">
          <img src={success} alt="" />
        </div>
        <div className=" font-bold text-center text-[2rem] ">
          Pin changed successfully.
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          Pin reset was successful, You can now proceed to login your account.
        </p>
      </div>
      <Button
        className="w-full hover:bg-primary hover:text-white "
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        Go to Login
      </Button>
    </div>
  );
}

export default ResetPinSuccessful;
