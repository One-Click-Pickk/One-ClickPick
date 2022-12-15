import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Carousel from 'react-bootstrap/Carousel';
import dumyData from './dumpData';
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';

import AllProduct from './AllProduct.js'

export default function App({ Component, pageProps }: AppProps) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`http://localhost:8080/product/`)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      
        <AllProduct.Provider value={{ products }}>
          <Component {...pageProps} />
        </AllProduct.Provider>
      
    </>
  );
}
