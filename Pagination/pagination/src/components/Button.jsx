import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <a className=" bg-primary  text-white px-6 py-3 rounded-lg sm:text-xl xl:text-2xl cursor-pointer shadow-custom hover:shadow-customHover">{text}</a>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button