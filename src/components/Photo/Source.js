import React, { PropTypes } from 'react';

import { sourceSrcSet } from '../../services/helpers';

export default function Source({ url, width, height, isLast, fullWidth, fullHeight, thumb }) {
  const endWidth = isLast ? fullWidth : width;
  const endHeight = isLast ? fullHeight : height;

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

