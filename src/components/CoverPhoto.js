import React, { PropTypes } from 'react';

const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

function calculatePadding(width, height) {
  const ratio = width / height;
  return 100 / ratio;
}

export default function CoverPhoto({ url, title, width, height }) {
  return (
    <div>
      <picture
        className="Photo Photo--mobile"
        style={{ paddingTop: `${calculatePadding(768, 789)}%` }}
      >
        <source
          media="(max-width: 360px)"
          data-srcset={`${url}?fm=jpg&fl=progressive&w=360&h=370&fit=thumb, ${url}?fm=jpg&fl=progressive&w=720&h=740&fit=thumb 2x`}
        />
        <source
          media="(max-width: 375px)"
          data-srcset={`${url}?fm=jpg&fl=progressive&w=375&h=385&fit=thumb, ${url}?fm=jpg&fl=progressive&w=750&h=771&fit=thumb 2x`}
        />
        <source
          media="(max-width: 768px)"
          data-srcset={`${url}?fm=jpg&fl=progressive&w=768&h=789&fit=thumb, ${url}?fm=jpg&fl=progressive&w=1536&h=1579&fit=thumb 2x`}
        />
        <img
          alt={title}
          className="b-lazy Photo__element"
          data-src={`${url}?fm=jpg&fl=progressive&w=360&h=385&fit=thumb|${url}?fm=jpg&fl=progressive&w=720&h=740&fit=thumb`}
          width="768" height="789"
        />
      </picture>
      <picture
        className="Photo Photo--large"
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
          data-src={`${url}?fm=jpg&fl=progressive&w=1980|${url}?fm=jpg&fl=progressive&w=3960`}
          width={width} height={height}
        />
      </picture>
    </div>
  );
}

CoverPhoto.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
