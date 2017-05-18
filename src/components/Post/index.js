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

export default function Post(props) {
  return (
    <Wrapper>
      <CoverPhoto key={props.cover.id} {...props.cover} />
      <Content>
        <TextWrapper>
          <Title>{props.title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: props.description }} />
        </TextWrapper>
        <section>
          {props.photos.map(photo =>
            <Photo key={photo.id} {...photo} />,
          )}
        </section>
        <Social
          slug={props.slug}
          shares={props.shares}
          liked={props.liked}
          handleClick={props.handleClick}
        />
      </Content>
    </Wrapper>
  );
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  cover: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  shares: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
