import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Carousel from 'react-bootstrap/Carousel';
import dumyData from './dumpData';

import {useState,createContext} from "react"
import AppContext from "./AppContext.js"


export default function App({ Component, pageProps }: AppProps) {
  console.log(dumyData)
  const [test,setTest] = useState(dumyData)

  return (
    <>
    <AppContext.Provider value={{test,setTest}}>
         <Component {...pageProps} />
    </AppContext.Provider>
  </>
  )


  
}

