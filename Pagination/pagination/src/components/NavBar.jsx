import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import Button from "./Button";
import Drawer2 from "./drawer/Drawer2";
// import DrawerNavBar from "./DrawerNavBar";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  };
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState)
  // };

  return (
    <header className="">
      <nav className="flex justify-between items-center py-6 px-12 ">
        <h1 className='text-xl w-fit sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary font-signature min-w-fit'>LOGO</h1>

        <div className="md:flex hidden items-center gap-9 w-full justify-end">
          <ul className="flex md:flex-row flex-col gap-4 md:gap-8 items-center sm:text-xl xl:text-3xl">
            <li>
              <a href="#about" className={`hover:text-secondary`}>About Me</a>
            </li>
            <li>
              <a href="/movies" className={`hover:text-secondary`}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className={`hover:text-secondary`}>Contact</a>
            </li>
          </ul>
          <div className="w-fit"><Button text={'LOG IN'} /></div>
        </div>

        <div className="flex items-center md:hidden gap-4">
          <a onClick={toggleDrawer} className="text-3xl cursor-pointer text-gray-400">
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </a>
        </div>
      </nav>
      <Drawer2 isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default NavBar;
