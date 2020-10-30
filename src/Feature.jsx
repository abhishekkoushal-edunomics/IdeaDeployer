import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Section from './Section';
import {Article} from "./Article";
import Footer from './Footer';
// import {LeftSection,RightSection} from "./Article";
export default function Feature() {
  return (
    <>  
        <NavBar></NavBar>
        <Header></Header>
        <Section></Section>
        <Article></Article>
        <Footer></Footer>
    </>
  );
}