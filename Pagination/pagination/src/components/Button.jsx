import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <button className="bg-[#5ebb79] hover:bg-green-400 text-white px-4 py-2 rounded-lg text-sm md:text-base">{text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button