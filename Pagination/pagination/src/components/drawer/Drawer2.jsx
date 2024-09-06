import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react'

const style = { //Drawer custom styles
  background: 'red',
};

const Drawer2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  };

  return (
    <>
      <button onClick={toggleDrawer} >Show</button>
      <Drawer
        
        open={isOpen}
        onClose={toggleDrawer}
        direction='top'
        // size={'50vw'}
        className=''
        style={style}
        // duration={1000}
        overlayOpacity={0.8}
        // overlayColor={'black'}
        enableOverlay={true}
        // zIndex={100}
        lockBackgroundScroll={true}
      >
        <div className='flex justify-between p-2 border-2 w-full'>
          Hello World
          <span>
            <button onClick={toggleDrawer}>Close</button>
          </span>
        </div>
      </Drawer>
    </>
  )
}

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
