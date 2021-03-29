import React from "react";
import BuscarDrinks from "../../components/BuscarDrinks/BuscarDrinks";
import styles from "./Drinks.module.css";

const Drinks = (props) => {
  return (
    <main className={styles.drinks}>
      <h1 className="titleDrinks">{props.titulo}</h1>
      <BuscarDrinks />
    </main>
  );
};

export default Drinks;
