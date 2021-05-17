// used for injecting custom scripts available for our whole application
// for changign the basic HTML structure available on every single page.

// Re start when changing it! _document and _ app are not detected
import Document, {Html, Head, Main, NextScript} from 'next/document'

// Forming the  page structure, is only rendered on the server.
// NO  JS in this file is executed in the client side.
export default class CustomDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
         <meta property='custom' content='yolo' />
        </Head>

        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}