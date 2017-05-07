import React from 'react';
import PropTypes from 'prop-types';

import { unique, imgPadding, imgRatio, imgHeight, imgSrcSet } from '../../services/helpers';
import settings from '../../services/settings';

import Wrapper from './Wrapper';
import Source from './Source';
import Img from './Img';

export default function Photo({ id, url, title, width, height, imgType, thumb }) {
  const sizes = settings[imgType];
  const imgSizesLength = sizes.length - 1;
  const ratio = imgRatio(width, height);
  const dataSrc = imgSrcSet(
    url,
    sizes[imgSizesLength],
    imgHeight(sizes[imgSizesLength], ratio),
    thumb,
  );
  return (
    <Wrapper
      paddingTop={`${imgPadding(width, height)}%`}
    >
      {sizes.map((source, i) => (
        <Source
          key={unique(id, i)}
          url={url}
          width={source}
          height={imgHeight(source, ratio)}
          isLast={imgSizesLength === i}
          fullWidth={width}
          fullHeight={height}
          thumb={thumb}
        />
        ),
      )}
      <Img
        alt={title}
        className="lazy"
        data-src={dataSrc}
        width={width}
        height={height}
      />
    </Wrapper>
  );
}

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imgType: PropTypes.string,
  thumb: PropTypes.bool,
};

Photo.defaultProps = {
  imgType: 'imageSizes',
  thumb: false,
};
