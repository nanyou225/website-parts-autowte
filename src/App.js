import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "./components/Connexion";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Panier from "./components/Panier";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/contact" element={<Contact />} exact />
      <Route path="/connexion" element={<Connexion />} exact />
      <Route path="/panier" element={<Panier />} exact />
    </Routes>
  );
}

export default App;
