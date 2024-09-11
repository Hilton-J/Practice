import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Typewriter = ({ text, delay, infinite }) => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }
  }, [currentIndex, delay, text, infinite]);

  return (
    <span>{currentText}<span className='text-green-400'>.</span></span>
  )
};

Typewriter.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  infinite: PropTypes.bool
};

export default Typewriter