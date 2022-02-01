/* eslint-disable @next/next/no-page-custom-font */
import Document, { Head, Html, Main, NextScript } from "next/Document";
import faveicon from "../../public/favicon.png";
export const repoName = 'IgnewsBlog1'
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="../../public/favicon.png"
            type="image/png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap"
            rel="stylesheet"
          />
           <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
