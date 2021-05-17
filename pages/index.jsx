import styles from './index.module.scss'

// NO JS executed for creating the HTML template in client side. This is SSR in NextJS (But JS is attached and executed once the HTML is ready)
// Default export should be a React component
export default function Home() {
  console.log('Hello home')
  return <h1 className={styles.red}>Index Page</h1>
}


