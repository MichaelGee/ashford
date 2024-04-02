import logo from '@/assets/images/logo.svg';
import {Bell, ChevronLeft, MenuIcon} from 'lucide-react';
import {useLocation, useNavigate} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 w-full p-[1rem] z-[100]">
      <img src={logo} />
    </div>
  );
};

const InAppNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-[1rem] bg-white z-[100]">
      {location.pathname === '/view-quote' ? (
        <ChevronLeft
          onClick={() => {
            if (location.pathname === '/view-quote') {
              navigate(-1);
            }
          }}
        />
      ) : (
        <MenuIcon />
      )}
      { location.pathname !== '/view-quote' &&
        <Bell />
      }
    </div>
  );
};

export {Navbar, InAppNavBar};
