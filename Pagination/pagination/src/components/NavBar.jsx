import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import Button from "./Button";
import Drawer2 from "./drawer/Drawer2";
// import DrawerNavBar from "./DrawerNavBar";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState)
  // };

  return (
    <>
      <nav className="flex justify-between items-center py-6 px-12">
        <h1 className='text-xl w-fit sm:text-2xl font-bold text-green-400 font-signature min-w-fit'>LOGO</h1>

        <div className="md:flex hidden items-center gap-9 w-full justify-end">
          <ul className="flex md:flex-row flex-col gap-4 md:gap-8 items-center">
            <li>
              <a href="/search" className={`hover:text-[#5ebb79]`}>About Me</a>
            </li>
            <li>
              <a href="/movies" className={`hover:text-[#5ebb79]`}>Portfolio</a>
            </li>
            <li>
              <a href="/tv-shows" className={`hover:text-[#5ebb79]`}>Contact</a>
            </li>
          </ul>
          <div className="w-fit"><Button text={'LOG IN'} /></div>
        </div>

        <div className="flex items-center md:hidden gap-4">
          <a onClick={toggleDrawer} className="text-3xl cursor-pointer text-gray-400">
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </a>
        </div>

        {/* <DrawerNavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} linkClass={linkClass} /> */}
      </nav>
      <Drawer2 isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default NavBar;
