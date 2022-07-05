import React from 'react';
import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../container/Footer'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="icon" href="/favicon.png" />

    </Head>
    <GoogleAnalytics />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
