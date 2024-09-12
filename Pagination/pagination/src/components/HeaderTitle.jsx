import PropTypes from 'prop-types'

const HeaderTitle = ({ title, text }) => {

  return (
    <div className='flex flex-col items-center space-y-5 text-white'>
      <h2 className='text-3xl sm:text-2xl lg:text-3xl'>{title}</h2>
      <div className='border-t-4 border-primary w-16'></div>
      <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-3'>{text}</h2>
    </div>
  )
};

HeaderTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default HeaderTitle