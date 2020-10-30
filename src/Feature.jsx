import React from 'react';
import NavBar from './NavBar';
import {FeatureHeader} from './Header';
import {FeatureSection} from './Section';
import {Article} from "./Article";
import Footer from './Footer';
// import {LeftSection,RightSection} from "./Article";
export default function Feature() {
  return (
    <>  
        <NavBar></NavBar>
        <FeatureHeader></FeatureHeader>
        <FeatureSection></FeatureSection>
        <Article></Article>
        <Footer></Footer>
    </>
  );
}