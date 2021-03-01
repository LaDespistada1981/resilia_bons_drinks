import React, { Component } from "react";
import "../Header/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="NavBar">
          <a href="#" target="_blank" rel="">
            Drinks
          </a>
          <a href="#" target="_blank" rel="">
            Sobre nós
          </a>
          <a className="logo" href="#" target="_blank" rel="">
            Bons Drinks
          </a>
          <a href="#" target="_blank" rel="">
            Nosso time
          </a>
          <a href="#" target="_blank" rel="">
            Contato
          </a>
        </nav>
      </header>
    );
  }
}
