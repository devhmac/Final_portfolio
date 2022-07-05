import React from 'react';
import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../container/Footer'
import { GoogleAnalytics } from "nextjs-google-analytics";


function MyApp({ Component, pageProps }) {
  return (<>
    <GoogleAnalytics />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
