import React from "react"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Feature from "../components/Feature";
import Extra from "../components/Extra";
import Cardcontent from  "../components/Cardcontent";
import Footer from "../components/Footer";

import styled from "styled-components"

const Container = styled.div `
.test {
    color:purple;
   text-align :center;
}
`

  export default () => (
  <Container>
      <Header />
      <Banner />
      <Main />
      <Feature />
      <Extra />
      <Cardcontent />
      <Footer />
      
  </Container>
 
)
