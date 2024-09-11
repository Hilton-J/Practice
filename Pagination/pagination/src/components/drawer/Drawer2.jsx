import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import PropTypes from 'prop-types'
import Button from "../Button";

// const style = { //Drawer custom styles vanilla css
//   background: 'red',
// };

const Drawer2 = ({ toggleDrawer, isOpen }) => {

  return (
    <Drawer

      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      className=' h-full'
      duration={1000}
    >
      <div className="flex flex-col items-center gap-9 w-full justify-end text-black ">
        <ul className="flex md:flex-row flex-col gap-4 md:gap-8 items-center text-black">
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
        <div className="w-fit mt-auto"><Button text={'LOG IN'} /></div>
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
