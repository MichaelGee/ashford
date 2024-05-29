import {Button} from '@/components/ui/button';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import success from '../../assets/images/Successfully Done.gif';

function LogoutSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth/login');
    }, 4000);

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts.
  }, [navigate]);
  return (
    <div>
      <div className=" flex flex-col w-full h-[70vh] items-center justify-center ">
        <div className="mb-6 w-[14.375rem] h-[14.375rem] ">
          <img src={success} alt="" />
        </div>
        <div className=" font-bold text-center text-[2rem] ">
          Logout Successful.
        </div>
        <p className="text-primary text-center mt-[1.1875rem] mb-6 ">
          You have successfully logged out of your account.
        </p>
      </div>
    </div>
  );
}

export default LogoutSuccess;
