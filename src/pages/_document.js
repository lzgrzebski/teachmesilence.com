import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import mainStyles from '../styles/mainStyles';

export default class extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: mainStyles }} />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          <script src="https://www.google-analytics.com/analytics.js" async />
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer />
        </body>
      </html>
    );
  }
}
