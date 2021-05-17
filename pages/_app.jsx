// Global stylings file, name.css, can only be imported in the _app file.
// If you want your CSS to be available only for a particular component should be name.module.css
import './globals.css'


// Arguments passed by next js internally
function MyApp({Component, pageProps}) {
 
// ** WHAT IS IT ** 
// My app is THE page, if this would return <h1>hello </h1> we would get that in ALL aour pages.
// All the other jsx files in pages would be ignores. But now they are not because we are returning <Component />
// Doing so we are allowing as to browse between all the .jsx pages(components)


// ** JS EXECUTION **
// JS in this file is executed both in server side and in client side.
// Once the HTML is being rendered, the JS is attached and ran.

  return <Component {...pageProps} />
}

export default MyApp
