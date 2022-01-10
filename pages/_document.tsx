// used for injecting custom scripts available for our whole application
// for changing the basic HTML structure available on every single page.

// Re start when changing it! _document and _ app are not detected
import Document, {Html, Head, Main, NextScript} from 'next/document'

// Forming the  page structure, is only rendered on the server.
// NO  JS in this file is executed in the client side.
export default class CustomDocument extends Document {
  constructor(props: any) {
    super(props);
  }

  // UNCOMMENT TO REPRODUCE BUG(?) with Head component
  
  // static async getInitialProps(ctx) {
  //   const {html} = await ctx.renderPage();
  //   return {
  //     html,
  //   };
  // }

  render() {
    console.log(this.props)

    return(
      <Html>
        <Head>
         <meta property='doc meta' content='_document meta tag' />
        </Head>

        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}