import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

import { About, Header, Work, Blog } from '../container/containerIndex'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Devin MacGillivray</title>
        <meta name="Portfolio" content="Devin MacGillivrays Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        {/* <Navbar /> */}
        <Header />
        <About />
        <Work />
        <Blog />




      </div>
    </div>
  )
}
