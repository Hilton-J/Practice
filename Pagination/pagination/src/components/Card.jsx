import PropTypes from 'prop-types'
const Card = ({ image, title, github, demo }) => {
  return (
    <div className="bg-black/50 backdrop-blur-3xl border border-transparent hover:border-primary hover:bg-transparent transition-all duration-700 rounded-3xl p-5 grid grid-rows-subgrid row-span-3">
      <div className='rounded-3xl overflow-hidden'>
        <img src={image} alt={title} className='size-full' />
      </div>
      <h3>{title}</h3>
      <div className=' flex gap-5'>
        <a href={github} target='_blank' className='border border-primary hover:border-transparent text-sm md:text-base px-3 md:px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black block transition-all duration-300 text-primary'>GitHub</a>
        <a href={demo} className='border border-transparent text-sm md:text-base px-3 md:px-6 py-2 rounded-lg cursor-pointer bg-primary hover:bg-white hover:text-black block transition-all duration-300 text-white' target='_blank' rel='noreferrer'>Live Demo</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
}

export default Card