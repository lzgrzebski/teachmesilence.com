import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Heart from './Heart';
import Count from './Count';

export default function Social(props) {
  const handleClick = () => {
    
  };
  return (
    <Wrapper href="https://www.facebook.com/sharer/sharer.php?u=http%3A//teachmesilence.com" target="_blank" onCLick={handleClick}>
      <Heart />
      <Count>
        <b className="js-count">1</b> people shared with love
      </Count>
    </Wrapper>
  );
}
