import React, { PropTypes } from 'react';
import Head from 'next/head';

import HeaderContainer from '../containers/HeaderContainer';

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderContainer />
      { children }
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Layout.defaultProps = {
  title: 'This is the default title',
};
