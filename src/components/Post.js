import React, { PropTypes } from 'react';

import Photo from './Photo';

export default function Post({ title, description, photos, cover }) {
  return (
    <article className="Post">
      <Photo {...cover} />
      <div className="o-wrapper">
        <section className="o-wrapper-text">
          <h1 className="Post__title">{title}</h1>
          <p className="Post__text" dangerouslySetInnerHTML={{ __html: description }} />
        </section>
        <section>
          {photos.map(photo =>
            <Photo {...photo} key={photo.id} />,
          )}
        </section>
      </div>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  cover: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
