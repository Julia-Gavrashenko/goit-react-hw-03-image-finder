import PropTypes from 'prop-types';
import { ColorRing } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <ColorRing
      visible={visible}
      height="150"
      width="150"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

Loader.propTypes = { visible: PropTypes.bool.isRequired };
