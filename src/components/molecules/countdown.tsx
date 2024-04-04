import React, {useEffect, useState} from 'react';
import {formatTime} from '../../lib/utils';

function Countdown({targetDate}) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
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
  );
}

export default Countdown;
