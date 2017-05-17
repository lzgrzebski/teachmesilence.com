import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../components/Loader';

export default (WrappedComponent) => {
  const LoaderDecorator = props => (
    <div>
      { props.isFetching ? <Loader /> : <WrappedComponent {...props} /> }
    </div>
  );

  LoaderDecorator.propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  return LoaderDecorator;
};
