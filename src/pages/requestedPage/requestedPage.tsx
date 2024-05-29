import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import bear from '@/assets/images/Polar Bear.gif';
import whatsapp from '@/assets/images/whatsapp.svg';
import {Button} from '@/components/ui/button';
import Countdown from '@/components/molecules/countdown';


function RequestedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;
  
  return (
    <React.Fragment>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource?.quote?.quote?.packageId?.name}
      </h1>
      <div className="w-full flex justify-center mt-[2.0625rem]">
        <img src={bear} alt="" />
      </div>
      <p className="text-center mt-[2.625rem] ">
        We know that waiting long could be boring that is why we’ve made it easy
        for you to follow up on the status of your quote.
      </p>
      <div className="flex flex-col justify-center border rounded py-[1.8438rem] gap-2 mt-[2.125rem] ">
        <p className="font-bold text-center">
          You can send us a WhatsApp message via:
        </p>
        <div className="flex gap-3 w-fit self-center ">
          <img src={whatsapp} alt="" />
          <div className="rounded p-1 bg-[#E9ECF2] ">+234 801 1223 344</div>
        </div>
      </div>
      <div className="flex flex-col w-[13.5625rem] mx-auto mt-[5.5rem] justify-center gap-5 ">
        <p className="font-bold text-center">Response time progress</p>
        <Countdown targetDate={dataFromSource?.quote?.quote?.responseDate} />
      </div>
      <Button
        variant="outline"
        className="w-full hover:bg-[#1E427D] hover:text-white mt-[3.5625rem] "
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to Dashboard
      </Button>
    </React.Fragment>
  );
}

export default RequestedPage;
