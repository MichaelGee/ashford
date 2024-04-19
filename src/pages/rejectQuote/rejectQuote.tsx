import {Button} from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import error from '@/assets/images/pana.svg'
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function RejectQuote() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;
  return (
    <React.Fragment>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource.tag}
      </h1>
      <div className="flex justify-center mt-[2.625rem]">
        <img src={error} alt="" />
      </div>
      <div className=" flex flex-col w-full mt-[8.5rem] items-center justify-center ">
        <div className=" font-bold text-center text-[2rem] ">
          Thank you for your response!
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          Our team acknowledges it. We'll carefully review your concerns and get
          back to you shortly.{' '}
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full hover:bg-[#1E427D] hover:text-white  mt-[9.5625rem] "
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to Dashboard
      </Button>
    </React.Fragment>
  );
}

export default RejectQuote;
