// import Master from '../assets/mastercard.svg';
import Hero from '../assets/hero.svg'
import NavBar from './NavBar'
import Button from "./Button";
// import Typewriter from './Typewriter';

const Glassmorphism = () => {
  return (
    // <section className="h-screen bg-back bg-no-repeat bg-cover bg-center flex justify-center items-center font-card font-semibold flex-col gap-6">
    <section id='home' className="bg-black/35 w-full flex flex-col backdrop-blur-xl text-white xl:h-screen">
      <div className='container mx-auto'>
        <NavBar />
        <div className='px-12 py-6 h-full flex items-center justify-between sm:flex-row flex-col mb-10 md:mb-20  md:mt-10 gap-6 overflow-hidden'>
          <div className='flex items-center sm:items-start justify-center flex-col h-full w-full min-w-72 flex-1'>
            <h4 className='text-green-400 sm:text-xl lg:text-3xl xl:text-4xl'>Hello, I am</h4>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold'>
              Lwandile Majola
              <span className='text-primary'>.</span>
              {/* <Typewriter text={'Lwandile Majola'} delay={300} infinite /> */}
            </h1>
            <h3 className='text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-textSecondary mt-6'>Full Stack Develper</h3>
            <div className="w-fit mt-6">
              <Button text={'DOWNLOAD CV'} primary={true} hrefProp={''} />
            </div>
          </div>
          <div className='flex flex-1 '>
            <img src={Hero} alt='Hero SVG' className=' md:translate-x-6 lg:translate-x-11' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Glassmorphism