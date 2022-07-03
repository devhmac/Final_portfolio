import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../container/Footer'

function MyApp({ Component, pageProps }) {
  return (<>

    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
