import React, { PropTypes } from 'react';

const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

function calculatePadding(width, height) {
  const ratio = width / height;
  return 100 / ratio;
}

export default function CoverPhoto({ url, title, width, height }) {
  return (
    <picture
      className="Photo"
      style={{ paddingTop: `${calculatePadding(width, height)}%` }}
    >
      <source
        media="(max-width: 360px)"
        data-srcset={`${url}?fm=jpg&fl=progressive&w=360, ${url}?fm=jpg&fl=progressive&w=720 2x`}
      />
      <source
        media="(max-width: 375px)"
        data-srcset={`${url}?fm=jpg&fl=progressive&w=375, ${url}?fm=jpg&fl=progressive&w=750 2x`}
      />
      <source
        media="(max-width: 768px)"
        data-srcset={`${url}?fm=jpg&fl=progressive&w=375, ${url}?fm=jpg&fl=progressive&w=750 2x`}
      />
      <img
        alt={title}
        className="b-lazy Photo__element"
        src={DEFAULT_IMAGE}
        data-src={`${url}?fm=jpg&fl=progressive&w=1980|${url}?fm=jpg&fl=progressive&w=3960`}
        width={width} height={height}
      />
    </picture>
  );
}

CoverPhoto.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
