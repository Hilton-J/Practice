import PropTypes from 'prop-types'
import Button from './Button'
const Card = ({ image, title, github, demo }) => {
  return (
    <div className="bg-black/35 backdrop-blur-3xl border border-transparent hover:border-secondary hover:bg-transparent transition-all duration-700 rounded-3xl p-5 grid grid-rows-subgrid row-span-3">
      <div className='rounded-3xl overflow-hidden h-60'>
        <img src={image} alt={title} className='size-full' />
      </div>
      <h3>{title}</h3>
      <div className='flex gap-5'>
        <Button text={'GitHub'} hrefProp={github} />
        <Button text={'Live Demo'} primary={true} hrefProp={demo} />
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