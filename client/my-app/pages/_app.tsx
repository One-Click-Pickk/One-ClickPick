import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Carousel from 'react-bootstrap/Carousel';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Component {...pageProps} />
  </>
  )


  
}

