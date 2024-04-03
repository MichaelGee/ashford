import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import bear from '@/assets/images/Polar Bear.svg';
import whatsapp from '@/assets/images/whatsapp.svg';
import {Button} from '@/components/ui/button';

function RequestedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

          const now = new Date().getTime();
  const targetDate = new Date('2024-04-06T05:00:00'); // Set your target date and time here

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      // Check if countdown has finished
      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemainingTime({days, hours, minutes, seconds});
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const {days, hours, minutes, seconds} = remainingTime;

  // Function to format time with leading zeros
  const formatTime = time => String(time).padStart(2, '0');

  return (
    <React.Fragment>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource.tag}
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
        <div className="rounded border-primary border  bg-[#E9ECF2] flex justify-between p-2 items-end ">
          <div className="font-bold text-[2rem]">
            {formatTime(days)} <span className="text-slate-400">:</span>
          </div>
          <div className="font-bold text-[2rem]">
            {formatTime(hours)} <span className="text-slate-400">:</span>
          </div>
          <div className="font-bold text-[2rem]">{formatTime(minutes)} </div>
          <div className=" text-2xl font-bold text-slate-400">
            {formatTime(seconds)}
          </div>
        </div>
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
