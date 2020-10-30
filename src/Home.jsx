import React from 'react';
import NavBar from './NavBar';
import {HomeHeader} from './Header';
import {HomeSection,HomeBottomSection,HomeUpperSection} from './Section';
import {HomeArticle} from './HomeArticle';
import Footer from './Footer';
import {AdditionalFeatures,BottomAdditionalFeatures} from './AdditionalFeatures';
export default function Home() {
  return (
    <>  
        <NavBar></NavBar>
        <HomeHeader></HomeHeader>
        <HomeUpperSection></HomeUpperSection>
        <HomeSection></HomeSection>
        <HomeArticle></HomeArticle>
        <HomeBottomSection></HomeBottomSection>
        {/* <AdditionalFeatures></AdditionalFeatures> */}
        <BottomAdditionalFeatures></BottomAdditionalFeatures>
        <Footer></Footer>
    </>
  );
}