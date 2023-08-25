import '../styles/globals.css';
import React from 'react';
import MainLayout from './fotter_header.js/layout';
import Header from './fotter_header.js/header';

// import MainLayout from './fotter_header/layout';


export default function App({ Component, pageProps}) {
  return (
    <>
    
  <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    
    </>
  
 
  )
}