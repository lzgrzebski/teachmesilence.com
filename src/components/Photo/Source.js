import React from 'react';
import PropTypes from 'prop-types';

import { sourceSrcSet } from '../../services/helpers';

export default function Source({ url, width, height, isLast, fullWidth, fullHeight, thumb }) {
  const endWidth = isLast ? (fullWidth / 2).toFixed(0) : width;
  const endHeight = isLast ? (fullHeight / 2).toFixed(0) : height;

  return (
    <source
      media={isLast ? `(min-width: ${width}px)` : `(max-width: ${width}px)`}
      data-srcset={sourceSrcSet(url, endWidth, endHeight, thumb)}
    />
  );
}

Source.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  fullWidth: PropTypes.number.isRequired,
  fullHeight: PropTypes.number.isRequired,
  thumb: PropTypes.bool,
};

Source.defaultProps = {
  thumb: false,
};

