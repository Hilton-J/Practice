import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
// import DrawerNavBar from "./DrawerNavBar";


const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center p-4">
      <a href="/" className='text-xl w-fit sm:text-2xl font-bold text-green-400 hover:text-[#5ebb79] font-signature min-w-fit'>Lh Majola</a>

      <div className="md:flex hidden items-center gap-9 w-full justify-end">
        <ul className="flex md:flex-row flex-col gap-4 lg:gap-8 items-center">
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
        <button className="bg-[#5ebb79] hover:bg-green-400 text-white px-4 py-2 rounded-lg text-sm md:text-base">LOG IN</button>
      </div>

      <div className="flex items-center md:hidden gap-4">
        <a onClick={toggleMenu} className="text-3xl cursor-pointer text-gray-600">
          {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </a>
      </div>
      {/* <DrawerNavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} linkClass={linkClass} /> */}
    </nav>
  );
}

export default NavBar;
