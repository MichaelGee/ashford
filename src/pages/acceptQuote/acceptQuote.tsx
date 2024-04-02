import {CircleAlert} from 'lucide-react';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function AcceptQuote() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;
  return (
    <React.Fragment>
      <h1 className="font-bold text-center text-primary">
        {dataFromSource.tag}
      </h1>
      <div className=" flex flex-col w-full h-[70vh] items-center justify-center ">
        <div className=" font-bold text-center text-[2rem] ">
          Thank you for your response!
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          Kindly make payments into the account number you copied earlier.
        </p>
        <div className="border-primary border rounded-lg text-primary bg-[#E9ECF2] flex items-center gap-2 py-2 px-[0.625rem] cursor-pointer hover:bg-primary hover:text-white " onClick={() => {
          navigate('/view-quote/accept-quote/confirming-payment', { state: dataFromSource });
        }
        } >
          <CircleAlert className="w-4" />
          <p className="text-xs  ">I have made Payment </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AcceptQuote;
