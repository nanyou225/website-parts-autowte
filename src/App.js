// import React from "react";
// import Connexion from "./pages/Connexion";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Panier from "./pages/Panier";
import { ThemeProvider } from "styled-components";
import { ContentA } from "./components/ContentA.elements";
import { ContentB } from "./components/ContentB.elements";
import { ContentBox } from "./components/ContentBox.elements";
import { ContentC } from "./components/ContentC.elements";
import { Footer } from "./components/Footer.elements";
import { Main } from "./components/Main.elements";
import { NavBar } from "./components/NavBar.elements";
import { SideBar } from "./components/SideBar.elements";
// import { Routes, Route } from "react-router-dom";
import GlobalStyle, { Container } from "./globalStyles";

const theme = {
  colors: {
    GlobalStyle: "black",
    NavBar: "#29323c",
    body: "#E8E8E8",
    Catalogue: "#2980b9",
    Footer: "#29323c",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <NavBar>NavBar</NavBar>
        <SideBar>SideBar</SideBar>
        <Main>Main</Main>
        <ContentBox>
          <ContentA>ContentA</ContentA>
          <ContentB>ContentB</ContentB>
          <ContentC>ContentC</ContentC>
        </ContentBox>
        <Footer>Footer</Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

/*<Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/contact" element={<Contact />} exact />
      <Route path="/connexion" element={<Connexion />} exact />
      <Route path="/panier" element={<Panier />} exact />
    </Routes>*/
