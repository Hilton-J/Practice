import PropType from 'prop-types'
import FadeLoader from 'react-spinners/ClipLoader'

const override = {
  display: "block",
  margin: "100px auto"
};


const Spinner = ({ loading }) => {
  return (
    <FadeLoader color='#2563eb'
      loading={loading}
      cssOverride={override}
      size={200}
    />
  )
};

Spinner.propTypes = {
  loading: PropType.bool
};

export default Spinner