import logo from '@/assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 w-full p-[1rem] ">
      <img src={logo} />
    </div>
  );
};

export default Navbar;
