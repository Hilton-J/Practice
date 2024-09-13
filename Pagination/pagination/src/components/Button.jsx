import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <a className="bg-secondary px-6 py-2 rounded-lg sm:text-xl cursor-pointer  hover:shadow-custom block">{text}</a>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button