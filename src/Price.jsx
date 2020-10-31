import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {PriceHeader} from './Header';
import {PriceSection,PriceTable} from './Section';
export default function Price() {
  return (
    <>  
        <NavBar></NavBar>
        <PriceHeader></PriceHeader>
        <PriceSection></PriceSection>
        <PriceTable></PriceTable>
        <Footer></Footer>
    </>
  );
}