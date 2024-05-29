import logo from '@/assets/images/logo.svg';
import { Bell, MenuIcon } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 w-full p-[1rem] z-[100]">
      <img src={logo} />
    </div>
  );
};

const InAppNavBar = () => {
   const secondButton = document.getElementById('secondButton');
  const { handleLogout } = useUser();
  const navigate = useNavigate()
  
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-[1rem] bg-white z-[100]">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className=" cursor-pointer">
              <MenuIcon />
            </MenubarTrigger>
            <MenubarContent className=" mt-3">
              <MenubarItem
                onClick={() => {
                  navigate('/');
                }}
              >
                Dashboard
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                onClick={() => {
                  navigate('/about-us');
                }}
              >
                About us
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                onClick={() => {
                  navigate('/contact-us');
                }}
              >
                Contact us
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                onClick={() => {
                  navigate('/faq');
                }}
              >
                FAQ
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                className="text-[#E74C3C]"
                onClick={() => {
                  setTimeout(() => {
                    secondButton.click();
                  }, 100);
                }}
              >
                Logout
              </MenubarItem>
              <MenubarItem>
                <Button
                  className="w-full hover:bg-primary hover:text-white "
                  size="sm"
                >
                  Contact Us
                </Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Bell />
      </div>

      <AlertDialog>
        <AlertDialogTrigger
          id="secondButton"
          className="bg-[#3A3F6A] text-white px-4 py-2 rounded-lg hidden"
        >
          Continue
        </AlertDialogTrigger>
        <AlertDialogContent className=" w-[80%]">
          <AlertDialogHeader>
            <AlertDialogTitle className=" text-center">Logout</AlertDialogTitle>
            <AlertDialogDescription className=" text-center">
              Are you sure you want to logout?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className=" flex">
            <AlertDialogCancel className="  hover:text-error  border-none w-full  ">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="text-[#E74C3C] bg-[#E9ECF2] w-full hover:bg-primary hover:text-white "
              onClick={() => {
                handleLogout();
                navigate('/auth/logout-successful');
              }}
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export {Navbar, InAppNavBar};
