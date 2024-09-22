import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <a className="bg-secondary px-6 py-2 rounded-lg cursor-pointer hover:shadow-custom block transition-all duration-300">{text}</a>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button