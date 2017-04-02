import React, { PropTypes } from 'react';
import calculatePadding from '../services/helpers';

export default function Photo({ url, title, width, height }) {
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
        data-srcset={`${url}?fm=jpg&fl=progressive&w=768, ${url}?fm=jpg&fl=progressive&w=1536 2x`}
      />
      <source
        media="(min-width: 769px)"
        data-srcset={`${url}?fm=jpg&fl=progressive&w=1050, ${url}?fm=jpg&fl=progressive&w=2100 2x`}
      />
      <img
        alt={title}
        className="b-lazy Photo__element"
        data-src={`${url}?fm=jpg&fl=progressive&w=1050|${url}?fm=jpg&fl=progressive&w=2100`}
        width={width} height={height}
      />
    </picture>
  );
}

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
