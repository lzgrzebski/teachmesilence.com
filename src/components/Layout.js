import React, { PropTypes } from 'react';
import Head from 'next/head';

import scss from '../pages/index.scss';

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: scss }} />
      { children }
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
