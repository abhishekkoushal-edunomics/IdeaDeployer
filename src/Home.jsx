import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Section from './Section';
import {Article} from "./Article";
// import {LeftSection,RightSection} from "./Article";
export default function Home() {
  return (
    <>
        <NavBar></NavBar>
        <Header></Header>
        <Section></Section>
        {/* <LeftSection></LeftSection>
        <RightSection></RightSection> */}
        <Article></Article>
    </>
  );
}