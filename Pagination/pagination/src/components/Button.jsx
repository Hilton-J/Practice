import PropTypes from 'prop-types'

const Button = ({ text, primary = false, hrefProp }) => {
  return (
    <a href={hrefProp} rel='noreferrer' target='_blank' className={` border text-sm md:text-base px-3 md:px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black block transition-all duration-700 ${primary ? 'border-transparent  bg-secondary text-white' : 'border-secondary hover:border-transparent  text-secondary'}`}>{text}</a>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  hrefProp: PropTypes.string,
  primary: PropTypes.bool,
};

export default Button