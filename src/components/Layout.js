import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import settings from '../services/settings';
import { getAbsoluteUrl } from '../services/helpers';

import HeaderContainer from '../containers/HeaderContainer';

export default function Layout({ children, title, desc, img, url }) {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="canonical" href={url} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={`https:${img}`} />
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <HeaderContainer />
      { children }
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Layout.defaultProps = {
  title: settings.siteTitle,
  desc: settings.siteDescription,
  url: getAbsoluteUrl(),
  img: settings.siteImage,
};
