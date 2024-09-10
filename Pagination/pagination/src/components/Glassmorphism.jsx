import Master from '../assets/mastercard.svg'

const Glassmorphism = () => {
  return (
    <section className="h-screen bg-back bg-no-repeat bg-cover bg-center flex justify-center items-center font-card font-semibold flex-col gap-6">
      <div className="isolate aspect-video shadow-lg bg-white/30 w-96 rounded-xl flex flex-col ring-1 ring-black/5 backdrop-blur-sm">
        <div className=''><img src={Master} alt='MasterCard Logo' className='size-full' /></div>
        <div className='p-6 mt-auto'>
          <h4 className='flex justify-between'>Lwandile Majola <span>05/06</span></h4>
          <p className='space-x-2'><span>0506</span><span>3382</span><span>1172</span><span>4502</span></p>
        </div>
      </div>
      <div className="isolate aspect-video shadow-lg bg-white/30 w-96 rounded-xl flex flex-col ring-1 ring-black/5 backdrop-blur-sm">
        <div className=' mt-2 h-12 bg-black'></div>
        <div className='p-6 mt-auto'>
          <h4 className='flex justify-between'>Lwandile Majola <span>05/06</span></h4>
          <p className='space-x-2'><span>0506</span><span>3382</span><span>1172</span><span>4502</span></p>
        </div>
      </div>

    </section>
  )
}

export default Glassmorphism