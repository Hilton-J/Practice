// import Master from '../assets/mastercard.svg' 
import Hero from '../assets/hero.svg'
import NavBar from './NavBar'
import Button from "./Button";
// import Typewriter from './Typewriter';

const Glassmorphism = () => {
  return (
    // <section className="h-screen bg-back bg-no-repeat bg-cover bg-center flex justify-center items-center font-card font-semibold flex-col gap-6">
    <>
      <section className="h-full lg:h-screen bg-white/50 dark:bg-black/45 w-full flex flex-col backdrop-blur-lg text-black dark:text-white">
        <NavBar />

        <div className='px-12 py-6 h-full flex items-center sm:justify-between sm:flex-row flex-col'>
          <div className='flex items-center sm:items-start justify-center flex-col h-full w-full min-w-72'>
            <h4 className='text-green-400 sm:text-xl lg:text-3xl'>Hello, I am</h4>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold '>
              Lwandile Majola
              <span className='text-green-400'>.</span>
              {/* <Typewriter text={'Lwandile Majola'} delay={300} infinite /> */}
            </h1>
            <h3 className='text-lg sm:text-2xl lg:text-3xl text-gray-400 mt-6'>Full Stack Develper</h3>
            <div className="w-fit mt-6">
              <Button text={'DOWNLOAD CV'} />
            </div>
          </div>

          <div className='flex justify-center flex-col'>

            <img src={Hero} alt='Hero SVG' className='size-full' />

          </div>
        </div>
      </section>
      <div className=" aspect-video shadow-lg bg-white/30 w-full rounded-xl flex flex-col ring-1 ring-black/5 backdrop-blur-sm">
        <div className=' mt-2 h-12 bg-black'></div>
        <div className='p-6 mt-auto'>
          <h4 className='flex justify-between'>Lwandile Majola <span>05/06</span></h4>
          <p className='space-x-2'><span>0506</span><span>3382</span><span>1172</span><span>4502</span></p>
        </div>
      </div>
    </>
  )
}

export default Glassmorphism