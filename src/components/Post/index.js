import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import Wrapper from './Wrapper';
import Content from './Content';
import TextWrapper from './TextWrapper';
import Title from './Title';
import Text from './Text';

import Social from '../Social';

import Photo from '../Photo';

export default function Post(props) {
  return (
    <Wrapper>
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
        {props.lazySocialLoading ? (
          <Waypoint
            topOffset="100px"
            onEnter={waypointData => (
              props.handleEnterSocial(props.slug, props.sharesLoaded, waypointData)
            )}
          >
            <div>
              <Social
                slug={props.slug}
                shares={props.shares}
                liked={props.liked}
                handleClick={props.handleClick}
              />
            </div>
          </Waypoint>
        ) : (
          <Social
            slug={props.slug}
            shares={props.shares}
            liked={props.liked}
            handleClick={props.handleClick}
          />
        )}
      </Content>
    </Wrapper>
  );
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  shares: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  sharesLoaded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleEnterSocial: PropTypes.func,
  lazySocialLoading: PropTypes.bool,
};

Post.defaultProps = {
  lazySocialLoading: false,
  handleEnterSocial: null,
};
