import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="NavBar">
          <Link to="/drinks">Drinks</Link>
          <Link to="/about">Sobre nós</Link>
          <Link to="/" className="logo">
            Bons Drinks
          </Link>
          <Link to="/time">Nosso time</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>
    );
  }
}
