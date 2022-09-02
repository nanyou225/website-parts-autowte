import React from "react";
<<<<<<< HEAD
import NavBar from "../components/NavBar";

=======
import ContentA from "../components/ContentA";
import ContentB from "../components/ContentB";
import ContentBox from "../components/ContentBox";
import ContentC from "../components/ContentC";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Container } from "../globalStyles";
>>>>>>> 9b032d1 (F03 feat Destructuring and Routing Components)

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
      <NavBar />
=======
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
>>>>>>> 9b032d1 (F03 feat Destructuring and Routing Components)
    </div>
  );
};

export default Home;
