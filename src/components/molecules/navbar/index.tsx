import logo from '@/assets/images/logo.svg';
import {Bell, MenuIcon} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 w-full p-[1rem] z-[100]">
      <img src={logo} />
    </div>
  );
};

const InAppNavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-[1rem] bg-white z-[100]">
      <MenuIcon />
      <Bell />
    </div>
  );
};

export {Navbar, InAppNavBar};
