import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { NavSearch } from "./NavBar.elements";

const NavBar = ({ onSearchChange }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Allo-Auto</Link>
        </div>
        <NavSearch onClick={handleClick} click={click}>
          <SearchBox
            className="search-box"
            onChangeHandler={onSearchChange}
            placeholder="Rechercher un produit, une réference ou une marque"
          />
        </NavSearch>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/contact">Contact & FaQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/connexion">Connexion</Link>
          </li>
          <li className="nav-item">
            <Link to="/panier">Panier</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
