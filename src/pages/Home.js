import React from "react";
import ContentA from "../components/ContentA";
import ContentB from "../components/ContentB";
import ContentBox from "../components/ContentBox";
import ContentC from "../components/ContentC";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Container } from "../globalStyles";

const Home = () => {
  return (
    <div>
      <Container>
        <NavBar></NavBar>
        <SideBar>SideBar</SideBar>
        <Main>Main</Main>
        <ContentBox>
          <ContentA>ContentA</ContentA>
          <ContentB>ContentB</ContentB>
          <ContentC>ContentC</ContentC>
        </ContentBox>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
