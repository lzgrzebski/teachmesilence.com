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
          <svg style={{ display: 'none' }}>
            <symbol id="instagram" viewBox="0 0 512 512">
              <path d="M256 49.47c67.266 0 75.233.258 101.8 1.47 24.562 1.12 37.9 5.224 46.778 8.674a78.052 78.052 0 0 1 28.966 18.845 78.052 78.052 0 0 1 18.845 28.964c3.45 8.877 7.552 22.216 8.672 46.778 1.212 26.565 1.47 34.532 1.47 101.8s-.258 75.233-1.47 101.8c-1.12 24.562-5.225 37.9-8.674 46.778a83.427 83.427 0 0 1-47.812 47.812c-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.47-101.8 1.47s-75.237-.258-101.8-1.47c-24.562-1.12-37.9-5.225-46.778-8.674a78.05 78.05 0 0 1-28.966-18.845A78.053 78.053 0 0 1 59.61 404.58c-3.45-8.876-7.553-22.215-8.673-46.777-1.212-26.564-1.47-34.532-1.47-101.8s.258-75.233 1.47-101.8c1.12-24.562 5.224-37.9 8.674-46.778a78.052 78.052 0 0 1 18.85-28.967 78.053 78.053 0 0 1 28.966-18.845c8.877-3.45 22.216-7.554 46.778-8.674 26.565-1.214 34.532-1.47 101.8-1.47m0-45.39c-68.418 0-77 .29-103.866 1.514-26.815 1.224-45.127 5.482-61.15 11.71a123.488 123.488 0 0 0-44.62 29.057A123.488 123.488 0 0 0 17.3 90.983c-6.223 16.025-10.48 34.337-11.7 61.152C4.37 179 4.08 187.582 4.08 256s.29 77 1.52 103.866c1.224 26.815 5.482 45.127 11.71 61.15a123.49 123.49 0 0 0 29.057 44.62 123.486 123.486 0 0 0 44.62 29.058c16.025 6.228 34.337 10.486 61.15 11.71 26.87 1.226 35.45 1.516 103.867 1.516s77-.29 103.866-1.516c26.815-1.224 45.127-5.482 61.15-11.71a128.817 128.817 0 0 0 73.678-73.677c6.228-16.025 10.486-34.337 11.71-61.15 1.226-26.87 1.516-35.45 1.516-103.867s-.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.15a123.486 123.486 0 0 0-29.057-44.62A123.487 123.487 0 0 0 421.02 17.3c-16.025-6.223-34.337-10.48-61.152-11.7C333 4.37 324.418 4.08 256 4.08z" />
              <path d="M256 126.635A129.365 129.365 0 1 0 385.365 256 129.365 129.365 0 0 0 256 126.635zm0 213.338A83.973 83.973 0 1 1 339.974 256 83.974 83.974 0 0 1 256 339.973z" />
              <circle cx="390.476" cy="121.524" r="30.23" />
            </symbol>
            <symbol id="github" viewBox="0 0 1024 1024">
              <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-.47-52.562-.72-95.312C242 908.812 211.907 817.5 211.907 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.53-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375-113.656-12.937-233.218-56.875-233.218-253.063 0-55.938 19.97-101.562 52.656-137.406-5.22-13-22.843-65.094 5.063-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.03 128.125-17.22 43.5.19 87.31 5.876 128.187 17.282 97.688-66.312 140.688-52.5 140.688-52.5 28 70.53 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.47 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-.688 123.625-.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
            </symbol>
            <symbol id="heart" viewBox="0 0 32 32">
              <path d="M29.7 10.6q0-1.4-0.4-2.6t-1-1.8-1.5-1.1-1.7-0.6-1.7-0.1-2 0.5-2 1.1-1.5 1.3-1.1 1.1q-0.3 0.4-0.9 0.4t-0.9-0.4q-0.4-0.5-1.1-1.1t-1.5-1.3-2-1.1-2-0.5-1.7 0.1-1.7 0.6-1.5 1.1-1 1.8-0.4 2.6q0 3 3.3 6.3l10.4 10 10.4-10q3.4-3.4 3.4-6.4zM32 10.6q0 3.9-4.1 8l-11.1 10.7q-0.3 0.3-0.8 0.3t-0.8-0.3l-11.1-10.7q-0.2-0.1-0.5-0.5t-1-1.2-1.2-1.7-1-2.2-0.4-2.5q0-3.9 2.3-6.1t6.3-2.2q1.1 0 2.3 0.4t2.1 1 1.7 1.2 1.4 1.2q0.6-0.6 1.4-1.2t1.7-1.2 2.1-1 2.3-0.4q4 0 6.3 2.2t2.3 6.1z" />
            </symbol>
            <symbol id="heartFull" viewBox="0 0 32 32">
              <path d="M16 29.7q-0.5 0-0.8-0.3l-11.1-10.7q-0.2-0.1-0.5-0.5t-1-1.2-1.2-1.7-1-2.2-0.4-2.5q0-3.9 2.3-6.1t6.3-2.2q1.1 0 2.3 0.4t2.1 1 1.7 1.2 1.4 1.2q0.6-0.6 1.4-1.2t1.7-1.2 2.1-1 2.3-0.4q4 0 6.3 2.2t2.3 6.1q0 3.9-4.1 8l-11.1 10.7q-0.3 0.3-0.8 0.3z" />
            </symbol>
          </svg>
          <script src="https://www.google-analytics.com/analytics.js" defer />
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer />
        </body>
      </html>
    );
  }
}
