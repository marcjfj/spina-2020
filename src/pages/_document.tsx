import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}