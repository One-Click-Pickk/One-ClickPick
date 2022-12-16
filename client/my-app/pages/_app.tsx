import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Carousel from 'react-bootstrap/Carousel';
import {slidesData,favoriteData} from './dumpData';

import {useEffect,useState,createContext} from "react"
import AppContext from "./AppContext.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function App({ Component, pageProps }: AppProps) {

  const firebaseConfig = {
    apiKey: "AIzaSyAB4Tbd8160wL9DLTgQXb8QmuKa7oVVZ_w",
    authDomain: "fedi-brand.firebaseapp.com",
    projectId: "fedi-brand",
    storageBucket: "fedi-brand.appspot.com",
    messagingSenderId: "173756680980",
    appId: "1:173756680980:web:6f8b4400b81bdb6f181001",
    measurementId: "G-X5FVPCC6SK"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  console.log(slidesData)
  
  const [test,setTest] = useState(slidesData)
  const [favoriteData,setFavoriteData]=useState("")
  const [userInfo,setUserInfo]=useState([])
  const [initializing, setInitializing] = useState(true);
  
  console.log(userInfo)

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      console.log("user ", user);
      setFavoriteData(user.email);
      if (initializing) {
        setInitializing(false);
      }
      if (!user) {
        // navigate("/login");
      } else {
        // navigate("/home");
      }
    })
  )


  return (
    <>
    <AppContext.Provider value={{test,setTest,favoriteData,setUserInfo,setFavoriteData}}>
         <Component {...pageProps} />
    </AppContext.Provider>
  </>
  )


  
}

