// // Global stylings file, name.css, can only be imported in the _app file.
// // If you want your CSS to be available only for a particular component should be name.module.css
// import './globals.css'
// import Head from 'next/head'


// // Arguments passed by next js internally
// function MyApp({ Component, pageProps }) {

//   // ** WHAT IS IT ** 
//   // My app is THE page, if this would return <h1>hello </h1> we would get that in ALL our pages.
//   // All the other jsx files in pages would be ignored. But now they are not because we are returning <Component />
//   // Doing so we are allowing as to browse between all the .jsx pages(components)


//   // ** JS EXECUTION **
//   // JS in this file is executed both in server side and in client side, depends how you export the pages.
//   // Once the HTML is being rendered, the JS is attached and ran(Hydration).
//   return (
//     <>
//       <Head>
//         <meta property='meta _app' content='meta _app' />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   )
// }

// MyApp.getInitialProps = async (ctx) => {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const json = await res.json()
//   return { props: 'Marco is a star' }
// }

// export default MyApp



// ** USING CLASS ***

import App from 'next/app';
import Head from 'next/head'

// Arguments passed by next js internally
class MyApp extends App {

  constructor(props) {
    super(props);
  }

  static getInitialProps = async ({Component, ctx}) => {
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const json = await res.json()
    return { component: Component, star: 'Marco is a star' }
  }

  componentDidMount() {
    console.log('mounted')
  }

// ** WHAT IS IT ** 
// My app is THE page, if this would return <h1>hello </h1> we would get that in ALL our pages.
// All the other jsx files in pages would be ignored. But now they are not because we are returning <Component />
// Doing so we are allowing as to browse between all the .jsx pages(components)


// ** JS EXECUTION **
// JS in this file is executed both in server side and in client side, depends how you export the pages.
// Once the HTML is being rendered, the JS is attached and ran.
render() {
    console.log(this.props)
    const Component = this.props.Component
    const star = this.props.star
    return(
      <>
      <Head>
        <meta property='_app meta' content='_app meta' />
      </Head>
        <Component star={star}/>
      </>
    ) 
  }
}

export default MyApp
