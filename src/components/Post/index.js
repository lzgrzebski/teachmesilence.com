import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Content from './Content';
import TextWrapper from './TextWrapper';
import Title from './Title';
import Text from './Text';

import Social from '../Social';

import Photo from '../Photo';
import CoverPhoto from '../CoverPhoto';

export default function Post({ title, description, photos, cover }) {
  return (
    <Wrapper>
      <CoverPhoto key={cover.id} {...cover} />
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: description }} />
        </TextWrapper>
        <section>
          {photos.map(photo =>
            <Photo key={photo.id} {...photo} />,
          )}
        </section>
        <Social />
      </Content>
    </Wrapper>
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
