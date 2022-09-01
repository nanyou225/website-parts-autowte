import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { SideBar } from "./components/SideBar.elements";
import { Main } from "./components/Main.elements";
import { ContentBox } from "./components/ContentBox.elements";
import { ContentA } from "./components/ContentA.elements";
import { ContentB } from "./components/ContentB.elements";
import { ContentC } from "./components/ContentC.elements";
import GlobalStyle, { Container } from "./globalStyles";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ConnexionPage from "./pages/ConnexionPage";
import PanierPage from "./pages/PanierPage";

const theme = {
  colors: {
    GlobalStyle: "black",
    NavBar: "#29323c",
    body: "#E8E8E8",
    Catalogue: "#2980b9",
    Footer: "#29323c",
  },
  space: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/connexion" element={<ConnexionPage />} />
            <Route path="/panier" element={<PanierPage />} />
          </Routes>
        </NavBar>
        <SideBar>SideBar</SideBar>
        <Main>Main</Main>
        <ContentBox>
          <ContentA>ContentA</ContentA>
          <ContentB>ContentB</ContentB>
          <ContentC>ContentC</ContentC>
        </ContentBox>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
