import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import '../styles/mainStyles';

export default class extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    /* eslint-disable react/no-danger */
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    );
    /* eslint-enable react/no-danger */

    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://www.google-analytics.com/analytics.js" async />
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer />
        </body>
      </html>
    );
  }
}
