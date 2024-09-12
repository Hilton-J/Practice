import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import PropTypes from 'prop-types'
// import Button from "../Button";

// const style = { //Drawer custom styles vanilla css
//   background: 'red',
// };

const Drawer2 = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      className={` h-screen p-4 ${isOpen ? 'flex flex-col' : 'hidden'}`} // Adds w-full when open, w-0 when closed
      // style={{ position: 'hidden', top: 0, right: 0, zIndex: 50 }}
      duration={2000}
    >
      <div className='border-b-2 border-[#5ebb79] '>
        <h1 className='text-xl w-fit sm:text-2xl font-bold text-green-400 font-signature min-w-fit'>LOGO</h1>
      </div>
      <div className=" text-black h-full">
        <ul className=" gap-4 items-start mb-auto">
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
        <button className="bg-[#5ebb79] hover:bg-green-400 text-white px-4 py-2 rounded-lg text-sm sm:text-base mt-auto">LOG IN</button>
      </div>
    </Drawer>
  )
};

Drawer2.propTypes = {
  isOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

export default Drawer2





// import PropTypes from 'prop-types';

// export default function Drawer({ children, isOpen, setIsOpen }) {
//   return (
//     <main
//       className={
//         " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
//         (isOpen
//           ? " transition-opacity opacity-100 duration-500 translate-x-0  "
//           : " transition-all delay-500 opacity-0 translate-x-full  ")
//       }
//     >
//       <section
//         className={
//           " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
//           (isOpen ? " translate-x-0 " : " translate-x-full ")
//         }
//       >
//         <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
//           <header className="p-4 font-bold text-lg">Header</header>
//           {children}
//         </article>
//       </section>
//       <section
//         className=" w-screen h-full cursor-pointer "
//         onClick={() => {
//           setIsOpen(false);
//         }}
//       ></section>
//     </main>
//   );
// };

// Drawer.propTypes = {
//   children: PropTypes.node,
//   isOpen: PropTypes.bool,
//   setIsOpen: PropTypes.func,
// }
