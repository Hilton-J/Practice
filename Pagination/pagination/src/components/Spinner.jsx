import PropType from 'prop-types'
import FadeLoader from 'react-spinners/FadeLoader'

// const override = {
//   display: "block",
//   margin: "100px auto"
// };


const Spinner = ({ loading }) => {
  return (
    <FadeLoader color='#2563eb'
      loading={loading}
      // cssOverride={override}
    />
  )
};

Spinner.propTypes = {
  loading: PropType.bool
};

export default Spinner