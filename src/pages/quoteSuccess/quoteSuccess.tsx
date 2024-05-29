import {Button} from '@/components/ui/button';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import success from '../../assets/images/Successfully Done.gif';


function QuoteSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;
  return (
    <div>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource.tag}
      </h1>
      <div className=" flex flex-col w-full h-[70vh] items-center justify-center ">
        <div className="mb-6 w-[14.375rem] h-[14.375rem] ">
          <img src={success} alt="" />
        </div>
        <div className=" font-bold text-center text-[2rem] ">
          Thank You for Requesting a quote!
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          Our team will reach out to you within 24 hours.
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full hover:bg-[#1E427D] hover:text-white "
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to Dashboard
      </Button>
    </div>
  );
}

export default QuoteSuccess;
