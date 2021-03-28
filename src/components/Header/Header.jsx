import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/drinks">Drinks</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/" className={styles.logo}>
          Drinks
        </Link>
        <Link to="/time">Nosso Time</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
