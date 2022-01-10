import styles from './page2.module.scss'
import Head from 'next/head'

export default function Page1(props) {
  return (
    <>
    {console.log(props, 'PROPS')}
      <Head>
        <meta property='customPage2' content='yoloPage2' />
      </Head>
      <h1 className={styles.green}>Page2 H1, {props.star}</h1>
    </> 
  )}