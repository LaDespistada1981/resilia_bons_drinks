import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="navMenu menuTop">
      <nav className="navBar">
        <Link to="/drinks">Drinks</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/" className="logo">
          Bons Drinks
        </Link>
        <Link to="/time">Nosso time</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/drinks/*">Drinks</Link>
      </nav>
    </header>
  );
};

export default Header;
